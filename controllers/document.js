const Docs = require("../models/document");
const User = require("../models/user");
const cloudinary = require("./config/cloudinary")
exports.documents = async (req, res) => {
    try {
        const { docId, docTitle, docTags, additionalInfo } = req.body;
        const fileStr = req.body.data;

        if (!docTitle || !docTags) {
            return res.json({ success: false, message: "All fields are required" });
        }
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'getMyDocs',
        });
        console.log(uploadResponse);
        const docs = await Docs.create({
            docId,
            docTitle,
            docTags,
            additionalInfo,
            docLink: uploadResponse
        });
        // const user = await User.findOne({ email: req.user.email })
        const updateuser = await User.updateOne(
            { email: req.user.email },
            {
                $push: { documents: docs._id },
            }
        );
        console.log(updateuser);
        res.json({ success: true, message: "Document Added in DB" });
    } catch (error) {
        return res.json({
            error: error.message,
            success: false,
            message: "Error in Creating a New Document",
        });
    }
};

exports.addTag = async (req, res) => {
    try {
        var { tag } = req.body;
        console.log(tag);
        tag = tag.toUpperCase();
        console.log(tag);
        const user = await User.findOne({ email: req.user.email });
        console.log(user);
        if (user.tags.includes(tag)) {
            return res.json({
                success: false,
                token: true,
                message: "This Tag is Already Present Try a Different Name",
            });
        }

        const updateuser = await User.updateOne(
            { email: req.user.email },
            {
                $push: { tags: tag },
            }
        );
        res.json({ success: true, message: "New Tag Added Successfully" });
    } catch (error) {
        return res.json({
            error: error.message,
            success: false,
            message: "Error updating Tag",
        });
    }
};

exports.getalltags = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.user.email });
        const tags = user.tags;
        console.log(tags);
        res.json({
            success: true,
            tags: tags,
            message: "Tags Received Successfully",
        });
    } catch (error) {
        return res.json({
            error: error.message,
            success: true,
            message: "Tags Received Successfully",
        });
    }
};

exports.getdocs = async (req, res) => {
    try {

        const tag = req.params.tags;
        const user = await User.findOne({ email: req.user.email });
        var docsarr = [];
        for (let i = 0; i < user.documents.length; i++) {
            const docs = await Docs.findOne({ _id: user.documents[i] });
            if (docs.docTags === tag) {
                docsarr.push(docs);
            }
        }
        res.json({
            success: true,
            docs: docsarr,
            message: "Documents With Selected Tag Sent",
        });
    } catch (error) {
        return res.json({
            success: false,
            error: error.message,
            message: "Documents Cannot Be Sent",
        });
    }
};

const Docs = require("../models/document");

exports.documents = async (req, res) => {
    try {
        const { docId, docTitle, category, docTags, additionalInfo } =
            req.body;
        const docs = await Docs.create({ docId, docTitle, docTags, additionalInfo, category });

    } catch (error) {
        return res.json({ error: error.message, success: false, message: "Error in Creating a New Document" });
    }
};

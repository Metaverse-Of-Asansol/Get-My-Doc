const jwt = require("jsonwebtoken");
exports.isAuthenticated = (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        if (!token || token == undefined) {
            return res.status(403).json({
                success: false,
                token: false,
                message: "Token is Missing Please Sign In to Continue",
            });
        }
        try {
            const info = jwt.verify(token, process.env.SECRET);
            console.log(info);
            req.user = info;
        } catch (error) {
            return res.json({
                success: false,
                token: false,
                message: "Invalid Token",
            });
        }
        next();
    } catch (error) {
        console.log(error.message);
        return res.json({
            success: false,
            token: false,
            message: "Something Went Wrong token can't be Verified Please Try Again",
        });
    }
};

const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const { register, login } = require("../controllers/auth")
const { documents, addTag, getalltags } = require("../controllers/document")
const { isAuthenticated } = require("../middlewares/isAuthenticates")
router.post(
  "/register",
  [
    check("email", "E-Mail is Required").isEmail(),
    check("password", "Password should be atleat 5 character").isLength({
      min: 5,
    }),
  ],
  register
);
router.post("/login", [check("email", "E-Mail is Required").isEmail()], login);
router.get("/addDocument", isAuthenticated, documents);
router.post("/addtag", isAuthenticated, addTag);
router.get("/getalltags", isAuthenticated, getalltags);


module.exports = router;

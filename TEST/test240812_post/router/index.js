// const express = require("express")
// const router = express.Router();
// const bodyParser = require("body-parser");

// router.use(bodyParser.urlencoded({extended:true}));

// const path = require("path");
// const file_path = path.join(__dirname , "../public")

// router.post("/",(req,res)=>{
//     res.sendFile(file_path + "/postLogin")
// })

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

// POST 요청을 파싱하기 위한 body-parser 미들웨어
router.use(bodyParser.urlencoded({ extended: true }));

// 아이디와 비밀번호 확인을 위한 하드코딩된 값
const VALID_ID = "admin";
const VALID_PASSWORD = "1234";

// 로그인 POST 요청 처리
router.post("/postLogin", (req, res) => {
    const { id, pw } = req.body;

    if (id === VALID_ID && pw === VALID_PASSWORD) {
        res.send(`${id}님 환영합니다!`);
    } else {
        res.send("아이디 또는 비밀번호를 확인해주세요.");
    }
});

module.exports = router;




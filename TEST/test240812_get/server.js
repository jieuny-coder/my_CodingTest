// // const http = require('http');
// // const url = require('url');
// const express = require("express");
// const app = express();
// const bp = require("body-parser");

// // 정적파일 html
// app.use(express.static("public"));
// // body-parser등록하기
// app.use(bp.urlencoded({ extended: true }))

// // 서버등록
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html")
// })

// // get데이터
// app.get("/result", (req, res) => {
//     const num = Number(req.query.num);
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })

//     if (num >= 1 && num <= 9) {
//         res.send("<table border='1'>")
//         for (let i = 1; i <= 9; i++) {
//             res.send(`<tr><td>${num}x${i}=${num * i}</td></tr>`)
//         }
//         res.send("</table>")
//     }else{
//         res.send(__dirname + "/public/index.html")
//     }
// })

// app.listen(8000)

const express = require("express");
const app = express();
const bp = require("body-parser");

// 정적 파일 서빙
app.use(express.static("public"));

// body-parser 등록하기
app.use(bp.urlencoded({ extended: true }));

// 기본 경로: 숫자 입력 폼 제공
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 결과 경로: 구구단 출력
app.get("/result", (req, res) => {
    const num = Number(req.query.num);

    if (num >= 1 && num <= 9) {
        let html = "<table border='1'>";
        for (let i = 1; i <= 9; i++) {
            html += `<tr><td>${num} x ${i} = ${num * i}</td></tr>`;
        }
        html += "</table>";
        res.send(html); // 누적된 HTML 문자열을 응답으로 전송
    } 
});

// 서버 시작
app.listen(8000, () => {
    console.log('Server is listening on http://localhost:8000');
});





// http.createServer((req, res) => {
//     let url_qr = url.parse(req.url, true).query;
//     console.log(url_qr); //확인용
//     let num = Number(url_qr.num);

//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
//     if (num >= 1 && num <= 9) {
//         res.write("<table border='1px solid black'>")
//         for (let i = 1; i <= 9; i++) {
//             res.write(`<tr><td>${num}x${i}=${num * i}</td></tr>`)
//         }
//         res.write("</table>")
//     }
//     res.end();
// }).listen(8000);
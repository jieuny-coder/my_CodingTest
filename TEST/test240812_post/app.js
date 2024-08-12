// const express = require("express");
// const app = express();
// const indexRouter = require("./routes/index")

// app.use("/",indexRouter);

// app.listen(8000);

const express = require("express");
const app = express();
const indexRouter = require("./router/index"); // 수정: 올바른 경로로 변경

const path = require("path");

// 정적 파일 서빙을 위한 미들웨어 설정
app.use(express.static(path.join(__dirname)));

// 라우터 설정
app.use("/", indexRouter);

// 서버 시작
app.listen(8000, () => {
    console.log('Server is listening on http://localhost:8000');
});


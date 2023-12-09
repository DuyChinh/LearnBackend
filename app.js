console.log("Học Node JS không khó");
/*
    Request => Thông qua HTTP => Server ==> Xử lí ==> Thông qua Http ==> Response

    NodeJS: Mặc định import bằng CommonJS (Dùng hàm require)
*/
const http = require("http");
//http là 1 module có sẵn của node JS
// console.log(http);
const server = http.createServer((req, res) => {
    //req: nhận request từ client
    const url = req.url;
    const method = req.method;
    const userAgent = req.headers["user-agent"];
    let content;
    if (url === "/") {
      content = `<h1>Hoc Node Js khong kho - Duy Chinh</h1>`;
      res.setHeader("Set-Cookie", "name=duychinh; path=/;max-age=86400; HttpOnly");
    } else if (url === "/gioithieu") {
      content = `<h1>Gioi thieu</h1>`;
    } else if (url === "/product") {
      content = `<h1>Product</h1>`;
      const cookie = req.headers["cookie"];
      content = `<h1>Product: ${cookie}</h1>`;
    } else {
        res.statusCode = 404;
        content = `<h1>Page not found</h1>`;
    }
    //res: Trả về response cho client
    res.setHeader("Content-type", "text/html; charset=utf-8");
    res.end(content);
    // res.setHeader("x-api-key", "123");
    // res.statusCode = 404;
    // res.end(`<h1>Hoc NodeJs khong kho</h1>
    //     <h2>Url: ${url}</h2>
    //     <h2>Method: ${method}</h2>
    //     <h2>User agent: ${userAgent}</h2>
    // `);
});

// console.log(server);
const hostname = "localhost";
const port = 8080;
server.listen(port, hostname, () => {
    //run success -> callback se dc goi
    console.log("run success with port " + port);
});
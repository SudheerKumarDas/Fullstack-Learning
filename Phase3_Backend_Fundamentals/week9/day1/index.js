import http from 'http';

const server = http.createServer((req, res) => {
    // res.write("Hello from my backend server");
    // res.end();
    if(req.url === "/"){
        res.write("Home page");
    }else if(req.url === "/about"){
        res.write("About page");
    }else if(req.url === "/contact"){
        res.write("Contact page");
    }else{
        res.write("Page not found");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
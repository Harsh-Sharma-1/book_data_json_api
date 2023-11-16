const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
    console.log("inside");
    next(req, res);
});
const PORT = 8000;

server.listen(process.env.PORT || 5000, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`);
});

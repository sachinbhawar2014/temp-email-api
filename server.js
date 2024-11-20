import server from "./index.js";

const port = 3600;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

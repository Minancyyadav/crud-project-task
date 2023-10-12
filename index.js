require("dotenv").config();

const server=require("./App")

const hostname = process.env.HOST;
const port = process.env.PORT;



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
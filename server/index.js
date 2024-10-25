const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const cookiesParser = require("cookie-parser")
const connection = require("./db")
const userRouter = require("./routes/user.routes")
const BlogRouter = require("./routes/blog.routes")

const app = express()
dotenv.config()
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json())
app.use(cookiesParser())

app.use("/user", userRouter);
app.use("/post", BlogRouter);

app.listen(process.env.PORT || 3000 ,async() => {
    try {
        await connection
        console.log(`server is running on port ${process.env.PORT || 3000}`);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
})
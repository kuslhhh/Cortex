import express from "express"
import authRoutes from "./routes/auth"
import contentRoutes from "./routes/content"
import shareRoutes from "./routes/share"
import cors from "cors"
import "dotenv/config"
import { errorHandler } from "./middleware/errorHandler"
import cookieParser from "cookie-parser"
import { authMiddleware } from "./middleware/auth"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
   origin: "http://localhost:3000",
   credentials: true
}))

app.use("/api/v1", authRoutes)
app.get("/api/v1/protected",authMiddleware,  (req, res) => {
   res.status(200).json({message: "You accessed protected route"})
})
app.use("/api/v1/contents", contentRoutes)
app.use("/api/v1/share", shareRoutes )

const PORT = process.env.PORT || 3000

app.use(errorHandler)
app.listen(PORT, () => {
   console.log(`Server running on port http://localhost:${PORT}`);
})

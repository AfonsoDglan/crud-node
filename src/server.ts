import "reflect-metadata"
import express from "express"
import { AppDataSource } from "../data-source"
import { routes } from "./routes"

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const app = express()

app.use(express.json())
app.use(routes)
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render('teste.ejs');
});
app.listen(3000, () => console.log("Server is running"))
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "dev",
    password: "password123",
    database: "dev",
    logging: true,
    entities: ["src/entities/*.ts"],
    migrations: ["src/database/migrations/*.ts"],
})

const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
// const router=require("../routes/webapi_0");
// const model=require("../models/Posts");

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    // await mongoose.connect(process.env.MONGODB_URI);
    await mongoose.connect(process.env.DB_CONNECTION);
});
  
  /* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET books status", () => {
    it("should return all books", async () => {
        const res = await request(app).get('/webapi_0/');
        expect(res.statusCode).toBe(200);
    });
    it("should return all books", async () => {
        const res = await request(app).get('/webapi_0/');
        console.log(res.body.length);
        expect(res.body.length).toBeGreaterThan(0);
    });
});




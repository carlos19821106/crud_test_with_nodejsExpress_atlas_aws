const mongoose = require("mongoose");
// const $=require("jquery");
const request = require("supertest");
const app = require("../app");
// var express=require("express");
// const app=express();
const router=require("../routes/webapi_0");
const model=require("../models/Posts");

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
        
        // expect(res.body.length).toBeGreaterThanOrEqual(0);
    
    });
});

describe("GET books number", () => {
    it("should return all books", async () => {
    
        const res = await request(app).get('/webapi_0/');
        
        // expect(res.statusCode).toBe(200);
        
        expect(res.body.length).toBeGreaterThanOrEqual(0);
    
    });
});



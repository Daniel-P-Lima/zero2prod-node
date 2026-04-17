import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from "../src/app.js";

describe("GET /emails", () => {
  it("responds with json", async () => {
    await request(app)
      .get("/emails")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});

describe("GET /emails/:id", () => {
  it("responds with json and email located", async () => {
    await request(app)
      .get("/emails/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect((res) => { 
        expect(res.body.email).toEqual("teste@gmail.com")
      })
      .expect(200);
  })
})
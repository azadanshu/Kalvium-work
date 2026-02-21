const request = require("supertest");
const app = require("../src/app");
const path = require("path");

describe("Automated API Testing Lab", () => {

  /*
  -----------------------------------
  Health Check Test
  -----------------------------------
  */
  it("GET /health should return status UP", async () => {

    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });


  /*
  -----------------------------------
  File Upload Test
  -----------------------------------
  */
  it("POST /api/user/upload should upload a profile picture", async () => {

    const filePath = path.join(
      __dirname,
      "../test-assets/sample.jpg"
    );

    const response = await request(app)
      .post("/api/user/upload")
      .attach("profilePic", filePath);

    expect(response.statusCode).toBe(201);
  });

});
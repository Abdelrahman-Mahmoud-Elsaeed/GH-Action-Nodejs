const test = require("node:test");
const assert = require("node:assert");

const { requestHandler } = require("../app");

test("returns hello message", () => {
  let body = "";

  const req = {};

  const res = {
    writeHead(statusCode, headers) {
      assert.strictEqual(statusCode, 200);
      assert.strictEqual(
        headers["Content-Type"],
        "application/json"
      );
    },

    end(data) {
      body = data;
    },
  };

  requestHandler(req, res);

  const response = JSON.parse(body);

  assert.deepStrictEqual(response, {
    message: "Hello from Node.js!",
  });
});
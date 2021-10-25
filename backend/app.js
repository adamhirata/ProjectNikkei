const Express = require("express");
const BodyParser = require("body-parser");
const Cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
const DATABASE_NAME = "pn";

var app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Cors());
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Access-Control-Allow-Origin"
  ); // Add other headers here
  res.setHeader("Access-Control-Allow-Methods", "POST"); // Add other methods here
  res.send();
});
var database, collectionUsers, collectionAuth;

// CREATE request for making new user

app.post("/auth", (request, response) => {
  console.log(request.body);
  if (request.body.token != "oof") {
    return response.status(500).send("You are not an authorized user");
  }
  delete request.body.token;
  collectionAuth.insertOne(request.body, (error, result) => {
    if (error) {
      return response.status(500).send(error);
    }
    console.log(result);
    collectionUsers.insertOne({ _id: result.insertedId }, (error1, result1) => {
      if (error) {
        console.log("error");
        return response.status(500).send(error1);
      }
      response.send(result1.result);
    });
    response.send(result.result);
  });
});

app.listen(5000, () => {
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database = client.db(DATABASE_NAME);
      collectionAuth = database.collection("auth");
      collectionUsers = database.collection("users");
      console.log("Connected to `" + DATABASE_NAME + "`!");
    }
  );
});

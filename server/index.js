require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

// server root route
app.get("/", (req, res) => {
  res.send("To - Do Web server runnig");
});

// const uri = "mongodb+srv://<db_username>:<db_password>@cluster0.lfjkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = process.env.MONGOURI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // collection
    const usersCollection = client.db("taskManager").collection("users");
    const tasksCollection = client.db("taskManager").collection("task");

    // user related api
    app.post("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email };
      const user = req.body;
      const isExist = await usersCollection.findOne(query);
      if (isExist) {
        return res.send({ message: "user allready exists" });
      }
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    // task related apis
    // task save to db
    app.post("/tasks", async (req, res) => {
      const task = req.body;
      const result = await tasksCollection.insertOne(task);
      res.send(result);
    });

    // task get for specifed user
    app.get("/tasks", async (req, res) => {
      const {email, category } = req.query;
      const result = await tasksCollection
        .find({
          $and: [{ email }, { category }],
        })
        .toArray();
      res.send(result);
    });

    // task update to db
    app.get("/tasks/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      console.log(query)
      const result = await tasksCollection.findOne(query);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`TO-Do server running on this port :  ${port}`);
});

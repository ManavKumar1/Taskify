// Main Import
import express from 'express';

// Secondary Imports
// import mongo from "./Database/Mongo";

const app = express();
// mongo();
const PORT = 8080;

app.listen(PORT, () => {
  console.log('Server is Connected');
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ParseServer = require('parse-server').ParseServer;
const app = express_1.default();
// const api = new ParseServer({
//   databaseURI: 'mongodb://localhost:27017/dev', // Connection string for your MongoDB database
//   // cloud: '/home/myApp/cloud/main.js', // Absolute path to your Cloud Code
//   appId: 'myAppId',
//   masterKey: 'myMasterKey', // Keep this key secret!
//   fileKey: 'optionalFileKey',
//   serverURL: 'http://localhost:1337/parse', // Don't forget to change to https if needed
// });
const port = 8080; // default port to listen
// app.use('/parse', api);
// app.listen(1337, () => {
//   console.log('parse-server-example running on port 1337.');
// });
// define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
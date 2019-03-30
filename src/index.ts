import express from 'express';

const app = express();
const port = 8080; // default port to listen

app.get('/', (req : any, res: any) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

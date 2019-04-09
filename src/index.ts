import express from 'express';
import bodyParser from 'body-parser';
// TODO: Consider this moving into its own module and writing it in TS with bluebird or observables
import * as imdbJs from '../imdb';

const app = express();

const port = 8080; // default port to listen

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req : any, res: any) => {
  res.send('Now you\'re thinking with portals');
});

app.post('/scan', (req : any, res: any) => {
  // TODO: Parse payload
  // TODO: Add image processing
  imdbJs.getInfo('Zachary Levi').then((info) => {

    if (info) res.send(info);
    else res.sendStatus(404);
  });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

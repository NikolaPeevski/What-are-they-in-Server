import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import { PythonShell } from 'python-shell';

// TODO: Consider this moving into its own module and writing it in TS with bluebird or observables
import * as imdbJs from './imdb';

const app = express();
const port = 8080; // default port to listen

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req : any, res: any) => {
  res.send('Now you\'re thinking with portals');
});

app.post('/scan', (req : any, res: any) => {
  // TODO: Add image processing
  const fileName = `${new Date().getTime()}_out.png`;
  fs.writeFile(fileName, req.body.data, 'base64', (err) => {
    if (err != null) {
      console.log(err);
      res.sendStatus(501);
    }

    // Pass it to the facial recognition
    const options = {
      pythonPath: '/anaconda3/bin/python',
      pythonOptions: ['-u'],
      scriptPath: '.',
      args: ['Hello World!'],
    };

    PythonShell.run('./script.py', options, (err, results) => {
      if (err) console.error(err);
      if (results) console.log(results);

      const result = 'Zachary Levi';
      imdbJs.getInfo(result).then((info) => {
        const url = 'https://image.tmdb.org/t/p/w500';

        if (info) {
          info['profile_path'] = `${url}${info['profile_path']}`;
          info['known_for'].map((el:any) => {
            el['poster_path'] = `${url}${el['poster_path']}`;
            el['backdrop_path'] = `${url}${el['backdrop_path']}`;
            return el;
          });
          res.send(info);
        }
        else res.sendStatus(404);
      });
    });
  });
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});

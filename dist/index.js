"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const python_shell_1 = require("python-shell");
// TODO: Consider this moving into its own module and writing it in TS with bluebird or observables
const imdbJs = __importStar(require("./imdb"));
const app = express_1.default();
const port = 8080; // default port to listen
app.use(body_parser_1.default.json({ limit: '50mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '50mb', extended: true }));
app.get('/', (req, res) => {
    res.send('Now you\'re thinking with portals');
});
app.post('/scan', (req, res) => {
    // TODO: Add image processing
    const fileName = `${new Date().getTime()}_out.jpg`;
    fs_1.default.writeFile(fileName, req.body.data, 'base64', (err) => {
        if (err != null) {
            console.log(err);
            res.sendStatus(501);
        }
        console.log(`../${fileName}`);
        // Pass it to the facial recognition
        const options = {
            pythonPath: '/anaconda3/bin/python',
            pythonOptions: ['-i'],
            scriptPath: './facial-recognition',
            args: [`../${fileName}`],
        };
        python_shell_1.PythonShell.run('./identify_face_image.py', options, (err, results) => {
            if (err)
                console.error(err);
            if (results)
                console.log(results);
            const result = 'Zachary Levi';
            imdbJs.getInfo(result).then((info) => {
                const url = 'https://image.tmdb.org/t/p/w500';
                if (info) {
                    info['profile_path'] = `${url}${info['profile_path']}`;
                    info['known_for'].map((el) => {
                        el['poster_path'] = `${url}${el['poster_path']}`;
                        el['backdrop_path'] = `${url}${el['backdrop_path']}`;
                        return el;
                    });
                    res.send(info);
                }
                else
                    res.sendStatus(404);
            });
        });
    });
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
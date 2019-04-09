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
// TODO: Consider this moving into its own module and writing it in TS with bluebird or observables
const imdbJs = __importStar(require("../imdb"));
const app = express_1.default();
const port = 8080; // default port to listen
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('Now you\'re thinking with portals');
});
app.post('/scan', (req, res) => {
    // TODO: Parse payload
    // TODO: Add image processing
    imdbJs.getInfo('Zachary Levi').then((info) => {
        if (info)
            res.send(info);
        else
            res.sendStatus(404);
    });
});
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map
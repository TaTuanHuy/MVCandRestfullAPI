"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRouter_1 = __importDefault(require("./router/mainRouter"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const methodOverride = require('method-override');
const app = (0, express_1.default)();
const port = 8000;
//sử dụng middleware
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(methodOverride('_method'));
//Template Engine
app.engine('hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, '../src/view'));
(0, mainRouter_1.default)(app);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

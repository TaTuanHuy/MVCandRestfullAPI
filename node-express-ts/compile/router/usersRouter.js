"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersController_1 = __importDefault(require("../controller/usersController"));
const createUser_1 = __importDefault(require("../middleware/createUser"));
router.get('/create', usersController_1.default.getFormCreateUser);
router.get('/profile/:id', usersController_1.default.profileUser);
router.delete('/:id', usersController_1.default.deleteUser);
router.put('/:id', usersController_1.default.updateUser);
router.post('/', createUser_1.default.checkUser, usersController_1.default.createNewUser);
router.get('/', usersController_1.default.index);
exports.default = router;

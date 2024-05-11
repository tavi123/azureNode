"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const dataFilePath = 'data.json';
// JSON 데이터 불러오기
const loadData = () => {
    const rawData = fs_1.default.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(rawData);
};
// GET /api/categories
app.get('/api/categories', (req, res) => {
    const categories = loadData().categories;
    res.json(categories);
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

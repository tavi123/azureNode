import express, { Request, Response } from 'express';
import fs from 'fs';
const app = express();
const dataFilePath = 'data.json';
interface Category {
  id: number;
  name: string;
  main_dishes: MainDish[];
}
interface MainDish {
  name: string;
  recommended_side_dishes: string[];
}
// JSON 데이터 불러오기
const loadData = (): { categories: Category[] } => {
  const rawData = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(rawData);
};
// GET /api/categories
app.get('/api/categories', (req: Request, res: Response) => {
  const categories = loadData().categories;
  res.json(categories);
});
// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
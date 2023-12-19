import express from 'express';
import path from 'path';
import rootDir from './utils/path.mjs';

const PORT = 5000;
const app = express();

app.use(express.static(path.join(rootDir, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});

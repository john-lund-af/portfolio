import express from 'express';
import path from 'path';
import rootDir from './utils/path.mjs';
import portfolioData from './data/portfolio.json' assert { type: 'json' };

const PORT = 3000;
const app = express();

app.use(express.static(path.join(rootDir, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index', {
    portfolio: portfolioData
  });
});

const server = app.listen(PORT, () => {
  console.log(portfolioData);
  console.log(`Running on PORT: ${PORT}`);
});

server.on('error', (error) => {
  console.error(error);
});

server.on('close', () => {
  console.log('Server shut down.');
});

import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello World this is the node server that is runnig from the contarizwd docker");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

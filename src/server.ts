import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send("Hello Worlds");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

import express, { Request, Response } from 'express';
import { run } from './admin';
import { sendMessage } from './producer';
import { getMessage } from './consumer';

const app = express();
const port = 4000;

sendMessage();
getMessage()

// app.get('/', async (req: Request, res: Response) => {
//     try {
//         await run();  
//         await sendMessage(); 
//         await getMessage();
//         res.send('Kafka topic created successfully!');
//     } catch (err) {
//         res.status(500).send('Error occurred while creating Kafka topic.');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

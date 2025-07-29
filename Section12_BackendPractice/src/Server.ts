import express, { Request, Response } from 'express';
import employeesRouter from './api/empl/Employee.route';


const PORT = 3000;


export class Server {

    private app = express();

    startServer() {

        // this.app.get('/hello', (req: Request, res: Response) => {
        //     res.send('Hello World!')
        // })
       
        this.app.use('/employees', employeesRouter)

        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }

}


new Server().startServer();

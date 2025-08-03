import express, { NextFunction, Request, Response } from 'express';
import employeesRouter from './api/empl/Employee.route';
import reportsRouter from './api/reports/Reports.route';


const PORT = 3000;


export class Server {

    private app = express();

    startServer() {

        // this.app.get('/hello', (req: Request, res: Response) => {
        //     res.send('Hello World!')
        // })
        
        this.app.use('/employees', employeesRouter)
        
        this.app.use('/reports', reportsRouter)

        this.app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(error.stack)
            res.send(error.message)
            next()
        })

        this.app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    }

}


new Server().startServer();

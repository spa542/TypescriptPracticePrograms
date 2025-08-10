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
        
        this.app.use(function (req: Request, res: Response, next: NextFunction) {
            res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            // Handle preflight requests quickly
            if (req.method === 'OPTIONS') {
                return res.sendStatus(204);
            }
            next();
        })

        // Parse JSON bodies for POST/PUT/PATCH
        this.app.use(express.json())
        
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

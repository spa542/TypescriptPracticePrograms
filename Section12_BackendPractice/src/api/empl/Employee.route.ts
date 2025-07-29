import { Router, Request, Response, json } from 'express';
import * as handlers from './Employee.handler';


const employeesRouter = Router();


employeesRouter.use(json())


employeesRouter.get('/', handlers.getAll)


employeesRouter.get('/:id', handlers.getById)


employeesRouter.post('/', handlers.addEmployee)


employeesRouter.put('/', (req: Request, res: Response) => {
    res.send('Hello from employees PUT')
})


export default employeesRouter

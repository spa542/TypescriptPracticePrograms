import { Router, Request, Response, json } from 'express';
import * as handlers from './Employee.handler';
//import { validateAsEmployee } from './Validator';
import { validateAsEmployee } from './ZodValidator';


const employeesRouter = Router();


employeesRouter.use(json())


employeesRouter.get('/', handlers.getAll)


employeesRouter.get('/:id', handlers.getById)


// Old way
//employeesRouter.post('/', validateAsEmployee, handlers.addEmployee)
// Zod Library
employeesRouter.post('/', validateAsEmployee, handlers.addEmployee)


employeesRouter.put('/', (req: Request, res: Response) => {
    res.send('Hello from employees PUT')
})


export default employeesRouter

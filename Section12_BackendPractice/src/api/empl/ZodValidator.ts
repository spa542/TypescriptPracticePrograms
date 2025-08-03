import { Response, Request, NextFunction } from 'express';
import { z, ZodError } from 'zod';


const employeeSchema = z.object({
    name: z.string(),
    position: z.enum(['Manager', 'HR', 'Engineer']),
    salary: z.number(),
    emloyedAt: z.date().optional(),
    id: z.string().optional()
}).strict() // This means that nothing extra can be sent, all keys must be recognized!!!


type ZodEmployee = z.infer<typeof employeeSchema>


export function validateAsEmployee(req: Request, res: Response, next: NextFunction) {
    try {
        const parsedResult = employeeSchema.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400)
        } 
        next(error) 
    }
}

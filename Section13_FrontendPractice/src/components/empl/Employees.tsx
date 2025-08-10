import { useState, useEffect } from "react";
import type { Employee } from "../../model/Employee.model";
import { EmployeesList } from "./EmployeesList";
//import { getEmployees, createEmployee } from "../../services/FakeDataService";
import { getEmployees, createEmployee } from "../../services/DataService";
import { EmployeeForm } from "./EmployeesForm";


export function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([])
    const [errorMessage, setErrorMessage] = useState('') 
    
    const onEmployeeAdd = async (empl: Employee) => {
        setErrorMessage('')
        try {
            console.log(empl)
            const id = await createEmployee(empl)
            setEmployees([...employees, empl]) 
            return id 
        } catch (error) {
            if (error instanceof Error) {
                console.error(error)
                setErrorMessage(error.message)
            }
        }
    }

    useEffect(() => {
        const fetchEmployees = async () => {
            const employees = await getEmployees()
            setEmployees(employees)
        }
        fetchEmployees()
    }, [])

    return (
        <div>
            <EmployeeForm onEmplAdd={onEmployeeAdd} /> 
            {
                errorMessage ? <label style={{ color: 'red' }}>{errorMessage}</label> : null
            }
            <EmployeesList employees={employees} /> 
        </div>
    )
}
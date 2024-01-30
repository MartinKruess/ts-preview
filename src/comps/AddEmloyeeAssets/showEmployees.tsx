import { EmployeeDatatype, EmployeeStateType } from "../global/typeManager";

export const ShowEmployees = ({ employees }: EmployeeStateType) => {
  return (
    {employees.map((employee: EmployeeDatatype) => (
      <div key={employee.name}>
        <h2>{employee.name}</h2>
        <p>{employee.age}</p>
        <p>{employee.position}</p>
      </div>
    ))}
  );
}
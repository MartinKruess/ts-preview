import { useState } from "react";
import { AddEmployeeForm } from "./AddEmloyeeAssets/addEmployeeForm";

// Types
import { EmployeeStateType } from "./global/typeManager";

export const AddEmployee = () => {
  const [employees, setEmployees] = useState<EmployeeStateType>({
    employees: [],
    setEmployees: () => {},
  });

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Lege einen Mitarbeiter an.</p>
      <AddEmployeeForm employees={employees} setEmployees={setEmployees} />
    </div>
  );
};

import { useState } from "react";
import { AddEmployeeForm } from "./AddEmloyeeAssets/addEmployeeForm";
import { ShowEmployees } from "./AddEmloyeeAssets/showEmployees";

// Types
import { EmployeeStateType } from "./global/typeManager";

export const AddEmployee = () => {
  const [employees, setEmployees] = useState<any>([]);
  const num = 1;

  return (
    <div>
      <h1>Landing Page</h1>
      <p>Lege {num} Mitarbeiter an.</p>
      <AddEmployeeForm employees={employees} setEmployees={setEmployees} />
      <ShowEmployees employees={employees} setEmployees={setEmployees} />
    </div>
  );
};

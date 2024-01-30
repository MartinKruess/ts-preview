export interface PropsProvider {
  children: React.ReactNode;
}

export interface EmployeeDatatype {
  name: string;
  age: number;
  position: string;
}

export interface EmployeeStateType {
  employees: EmployeeDatatype;
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeDatatype>>;
}

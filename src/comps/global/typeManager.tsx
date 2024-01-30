export interface PropsProvider {
  children: React.ReactNode;
}

interface EmployeeDatatype {
  id: number;
  name: string;
  age: number;
  position: string;
}

export interface EmployeeStateType {
  employees: EmployeeDatatype[];
  setEmployees: React.Dispatch<React.SetStateAction<EmployeeDatatype[]>>;
}

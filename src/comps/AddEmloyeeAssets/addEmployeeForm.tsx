import { EmployeeStateType } from "../global/typeManager";

export const AddEmployeeForm: React.FC<EmployeeStateType> = ({
  employees,
  setEmployees,
}) => {
  console.log(employees);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;

    const emp = {
      id: Math.floor(Math.random() * 1000),
      name: formElement.fullname.value,
      age: Number(formElement.age.value),
      position: formElement.position.value,
    };
    setEmployees([...employees, emp]);
  };

  return (
    <div>
      <h2>Neuer Mitarbeiter</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="fullname" id="name" />
        <label htmlFor="age">Alter</label>
        <input type="number" name="age" id="age" />
        <label htmlFor="position">Position</label>
        <input type="text" name="position" id="position" />
        <button type="submit">Speichern</button>
      </form>
    </div>
  );
};

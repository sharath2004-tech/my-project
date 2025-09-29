import { useState } from "react";

function StudentCard({ id, name, age }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>ID: {id}</p>
      <p>Age: {age}</p>
    </div>
  );
}

const initialStudents = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!name || !age) return;
    const newStudent = {
      id: students.length ? students[students.length - 1].id + 1 : 1,
      name,
      age: Number(age)
    };
    setStudents([...students, newStudent]);
    setName("");
    setAge("");
  };

  return (
    <div className="app-container">
      <h1>Student List</h1>
      <form onSubmit={handleAddStudent} className="student-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <button type="submit">Add Student</button>
      </form>
      <div className="student-list">
        {students.map(s => (
          <StudentCard key={s.id} {...s} />
        ))}
      </div>
    </div>
  );
}

export default App;

// eslint-disable-next-line react/prop-types
const Students = ({ students, setStudents }) => {
    const addStudent = () => {
        const newStudent = { id: Date.now(), name: '', class: '' };
        setStudents([...students, newStudent]);
    };

    const updateStudent = (id, key, value) => {
        // eslint-disable-next-line react/prop-types
        setStudents(students.map(student =>
            student.id === id ? { ...student, [key]: value } : student
        ));
    };

    const deleteStudent = (id) => {
        // eslint-disable-next-line react/prop-types
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div>
                <h2>Students</h2>
                <button className="add" onClick={addStudent}>Add Student</button>
                <ul>
                    {/* eslint-disable-next-line react/prop-types */}
                    {students.map(student => (
                        <li key={student.id}>
                            <input
                                type="text"
                                value={student.name}
                                onChange={(e) => updateStudent(student.id, 'name', e.target.value)}
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                value={student.class}
                                onChange={(e) => updateStudent(student.id, 'class', e.target.value)}
                                placeholder="Class"
                            />
                            <button className="delete" onClick={() => deleteStudent(student.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
        </div>
    );
};

export default Students;

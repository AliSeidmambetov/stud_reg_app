// eslint-disable-next-line react/prop-types
const Grades = ({ students, subjects, grades, setGrades }) => {
    const addGrade = () => {
        // eslint-disable-next-line react/prop-types
        const newGrade = { studentId: students[0]?.id || '', subjectId: subjects[0]?.id || '', date: '', grade: '' };
        setGrades([...grades, newGrade]);
    };

    const updateGrade = (index, key, value) => {
        const updatedGrades = [...grades];
        updatedGrades[index][key] = value;
        setGrades(updatedGrades);
    };

    const deleteGrade = (index) => {
        // eslint-disable-next-line react/prop-types
        setGrades(grades.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Grades</h2>
            <button className="add" onClick={addGrade}>Add Grade</button>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {grades.map((grade, index) => (
                    <li key={index}>
                        <select value={grade.studentId} onChange={(e) => updateGrade(index, 'studentId', e.target.value)}>
                            {/* eslint-disable-next-line react/prop-types */}
                            {students.map(student => (
                                <option key={student.id} value={student.id}>{student.name}</option>
                            ))}
                        </select>
                        <select value={grade.subjectId} onChange={(e) => updateGrade(index, 'subjectId', e.target.value)}>
                            {/* eslint-disable-next-line react/prop-types */}
                            {subjects.map(subject => (
                                <option key={subject.id} value={subject.id}>{subject.title}</option>
                            ))}
                        </select>
                        <input
                            type="date"
                            value={grade.date}
                            onChange={(e) => updateGrade(index, 'date', e.target.value)}
                        />
                        <input
                            type="text"
                            value={grade.grade}
                            onChange={(e) => updateGrade(index, 'grade', e.target.value)}
                            placeholder="Grade"
                        />
                        <button className="delete" onClick={() => deleteGrade(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Grades;

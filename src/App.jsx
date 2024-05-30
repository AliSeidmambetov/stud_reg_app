import { useState } from 'react';
import Students from './components/Students.jsx';
import Subjects from './components/Subjects.jsx';
import Grades from './components/Grades.jsx';
import './index.css';

const App = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Alice', class: '4-A' },
        { id: 2, name: 'Bob', class: '6-A' },
        { id: 3, name: '', class: '' }
    ]);

    const [subjects, setSubjects] = useState([
        { id: 1, title: 'Math' },
        { id: 2, title: 'English' },
        { id: 3, title: '' }
    ]);

    const [grades, setGrades] = useState([
        { studentId: 1, subjectId: 1, date: '2023-05-01', grade: 'A' },
        { studentId: 2, subjectId: 2, date: '2023-05-02', grade: 'B' },
        { studentId: 3, subjectId: 3, date: '', grade: '' }
    ]);

    return (
        <div className="container">
            <header>
                <h1 className="header-text">Student Management System</h1>
            </header>
            <div className="main-content">
                <section className="students">
                    <Students students={students} setStudents={setStudents} />
                </section>
                <section className="subjects">
                    <Subjects subjects={subjects} setSubjects={setSubjects} />
                </section>
                <section className="grades">
                    <Grades students={students} subjects={subjects} grades={grades} setGrades={setGrades} />
                </section>
            </div>
        </div>
    );
};

export default App;

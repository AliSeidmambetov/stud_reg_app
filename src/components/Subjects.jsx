// eslint-disable-next-line react/prop-types
const Subjects = ({ subjects, setSubjects }) => {
    const addSubject = () => {
        const newSubject = { id: Date.now(), title: '' };
        setSubjects([...subjects, newSubject]);
    };

    const updateSubject = (id, key, value) => {
        // eslint-disable-next-line react/prop-types
        setSubjects(subjects.map(subject =>
            subject.id === id ? { ...subject, [key]: value } : subject
        ));
    };

    const deleteSubject = (id) => {
        // eslint-disable-next-line react/prop-types
        setSubjects(subjects.filter(subject => subject.id !== id));
    };

    return (
        <div>
            <h2>Subjects</h2>
            <button className="add" onClick={addSubject}>Add Subject</button>
            <ul>
                {/* eslint-disable-next-line react/prop-types */}
                {subjects.map(subject => (
                    <li key={subject.id}>
                        <input
                            type="text"
                            value={subject.title}
                            onChange={(e) => updateSubject(subject.id, 'title', e.target.value)}
                            placeholder="Title"
                        />
                        <button className="delete" onClick={() => deleteSubject(subject.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Subjects;

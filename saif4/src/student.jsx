function Student({ student }) {
    return (
        <div>
            <ul>
                <li>Student Name:{student.name}</li>
                <li>Student Age:{student.age}</li>
                <li>Student Id:{student.id}</li>
            </ul>

        </div>
    )
}
export default Student;
const List = ({addStudent,students}) => {
    
  return (
    <>
        <div className="container">
            <h1>Student Lists</h1>
            <button type="button" className="btn btn-primary float-end" onClick={()=>addStudent()}>Add Student</button>
            <table className="table text-center align-middle" style={{ tableLayout:"fixed" }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Sex</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Profile</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((stu)=>{
                        return (
                            <tr>
                                <td>{stu.id}</td>
                                <td>{stu.stu_name}</td>
                                <td>{stu.sex}</td>
                                <td>{stu.address}</td>
                                <td>{stu.email}</td>
                                <td><img width={80} src={stu.profileUrl} alt="" /></td>
                                <td>
                                    <button className="btn btn-warning">Edit</button>
                                    <button className="btn btn-danger ms-2">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default List
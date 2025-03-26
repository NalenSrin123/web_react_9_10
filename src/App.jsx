import { useState } from "react"
import List from "./components/List"
import Modal from "./components/Modal"

const App = () => {
  const [toggleModal,setToggleModal]=useState(true);
  const [student,setStudent]=useState([]);
  function handleAdd(){
    setToggleModal(false)
  }
  function handleClose(){
    setToggleModal(true)
  }
  function getStudent(stu){
    setStudent((prev) => [...prev, stu]);
  }
  function handleDelete(index){
    if(confirm("Are you sure to delete this student ?")){
      setStudent((pre)=>pre.filter((_,i)=>i!==index));
    }
  }
  return (
    <>
      <List addStudent={handleAdd} students={student} onDelete={handleDelete}/>
      {toggleModal ? '':<Modal onClose={handleClose} students={getStudent}/>}
    </>
  )
}

export default App
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
  return (
    <>
      <List addStudent={handleAdd} students={student}/>
      {toggleModal ? '':<Modal onClose={handleClose} students={getStudent}/>}
    </>
  )
}

export default App
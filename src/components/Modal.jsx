import { useState } from "react"
import '../assets/css/modal.css'
const Modal = ({onClose,students}) => {
    const [student,setStudent]=useState({id:'',stu_name:'',sex:'Male',address:'',email:'',profile:'',profileUrl:''});
    function handleChange(e){
        const {name,type,value,files}=e.target;
        if(type=='file'){
            setStudent((pre)=>({
                ...pre,
                profile:files[0],
                profileUrl:URL.createObjectURL(files[0])
            }));
        }else{
            setStudent((pre)=>({
                ...pre,
                [name]:value
            }))
        }
    }
    function handleSubmit(e){
        e.preventDefault();
       students(student);
       onClose();   
    }
  return (
    <div className="modals">
        <form action="" method="post" onSubmit={handleSubmit}>
            <h3 className="text-center">Add Student</h3>
            <div className="form-group">
                <label htmlFor="id" className="form-label">ID</label>
                <input type="text" name="id" id="id" className="form-control" value={setStudent.id}  onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="stu_name" className="form-label">Name</label>
                <input type="text" name="stu_name" id="stu_name" className="form-control" value={setStudent.stu_name} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="sex" className="form-label">Sex</label>
                <select name="sex" id="sex" className="form-select" value={setStudent.sex} onChange={handleChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="address" className="form-label">Address</label>
                <select name="address" id="address" className="form-select" value={setStudent.address} onChange={handleChange}>
                    <option value="">Select a Province</option>
                    <option value="Banteay Meanchey">Banteay Meanchey</option>
                    <option value="Battambang">Battambang</option>
                    <option value="Kampong Cham">Kampong Cham</option>
                    <option value="Kampong Chhnang">Kampong Chhnang</option>
                    <option value="Kampong Speu">Kampong Speu</option>
                    <option value="Kampong Thom">Kampong Thom</option>
                    <option value="Kampot">Kampot</option>
                    <option value="Kandal">Kandal</option>
                    <option value="Koh Kong">Koh Kong</option>
                    <option value="Kratie">Kratie</option>
                    <option value="Mondulkiri">Mondulkiri</option>
                    <option value="Oddar Meanchey">Oddar Meanchey</option>
                    <option value="Pailin">Pailin</option>
                    <option value="Phnom Penh">Phnom Penh</option>
                    <option value="Preah Vihear">Preah Vihear</option>
                    <option value="Prey Veng">Prey Veng</option>
                    <option value="Pursat">Pursat</option>
                    <option value="Ratanakiri">Ratanakiri</option>
                    <option value="Siem Reap">Siem Reap</option>
                    <option value="Preah Sihanouk">Preah Sihanouk</option>
                    <option value="Stung Treng">Stung Treng</option>
                    <option value="Svay Rieng">Svay Rieng</option>
                    <option value="Takeo">Takeo</option>
                    <option value="Tboung Khmum">Tboung Khmum</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" value={setStudent.email} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="profile" className="form-label">Profile</label>
                <input type="file" name="profile" id="profile" className="form-control" value={setStudent.profile} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary mt-2 me-2" >Save</button>
                <button type="button" className="btn btn-danger mt-2" onClick={()=>onClose()}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default Modal
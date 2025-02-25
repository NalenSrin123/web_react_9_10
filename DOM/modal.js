const addUser=document.querySelector('#addUser');
const modal=document.querySelector('.modals');
const id=document.querySelector('#id');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const passowrd=document.querySelector('#password');
const profile=document.querySelector('#profile');
const tbody=document.querySelector('#tbody')
addUser.addEventListener('click',function(){
    modal.style.display="block"
})
const cancel=document.querySelector('#cancel');
cancel.addEventListener("click",function(){
    modal.style.display='none';
}) 
function saveProduct(){
  const btnSave=document.querySelector('#btnSave');
  btnSave.addEventListener('click',function(){
    modal.style.display='none';
     tbody.innerHTML+=`
        <tr>
            <td>${id.value}</td>
            <td>${username.value}</td>
            <td>${email.value}</td>
            <td>${passowrd.value}</td>
            <td><img class="rounded-circle" width="80px" src="${URL.createObjectURL(profile.files[0])}" alt=""></td>
            <td>
                <button class="btn btn-success me-1">Edit</button>
                <button class="btn btn-danger" id="btnDelete" onclick="deleteProduct(this)">Delete</button>
            </td>
        </tr>
     `;
     id.value='';
     username.value='';
     email.value='';
     passowrd.value='';
     profile.value='';
  })  
}
saveProduct();
function deleteProduct(rowIndex){
    const row=rowIndex.parentElement.parentElement;
    if(confirm("Are you sure to delete this user?")){
        row.remove()
    }
    
}

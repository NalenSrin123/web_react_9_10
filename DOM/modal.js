const addUser=document.querySelector('#addUser');
const modal=document.querySelector('.modals');
addUser.addEventListener('click',function(){
    modal.style.display="block"
})
const cancel=document.querySelector('#cancel');
cancel.addEventListener("click",function(){
    modal.style.display='none';
}) 
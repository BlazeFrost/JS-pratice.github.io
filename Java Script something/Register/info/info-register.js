const form=document.querySelector('.info-container');
form.addEventListener('submit',function (event){
    event.preventDefault();

    const username=form.querySelector('input[placeholder="Username"]').value;
    const email=form.querySelector('input[placeholder="example@gmail.com"]').value;
    const password=form.querySelector('input[placeholder="Password"]').value;
    const comfirmPassword=form.querySelector('input[placeholder="PasswordComfirm"]').value;
    const phoneNumbers=form.querySelector('input{placeholder="Phone numbers"}').value;
    console.log(password,"password");
    console.log(comfirmPassword,"comfirmPassword");


    if(password!==comfirmPassword){
        alert("Passwords do not match!");
        return;
    }

    let users=JSON.parse(localStorage.getItem('users'))||[];

    if(users.some(user=>user.email===email)){
        alert("Email is already registered!");
        return;
    }

    users.push({username,email,password});
    localStorage.setItem('users',JSON.stringify(users));
// Successful registeration
    alert('Registeration successful');
    window.location.href ="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
});
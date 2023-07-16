var email = document.getElementById('email');

email.addEventListener('focus',()=>{
    email.style.borderColor = "#4A5F6A";
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "#ccc";
});

var senha = document.getElementById('senha');

senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#4A5F6A";
});
senha.addEventListener('blur',()=>{
    senha.style.borderColor = "#ccc";
});
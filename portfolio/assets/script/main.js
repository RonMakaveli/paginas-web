let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = ()=>{
    navbar.classList.toggle("open-menu")
    menu.classList.toggle("move");
}
window.onscroll = () =>{
    navbar.classList.remove("open-menu")
    menu.classList.remove("move");
}

//Reviews Swiper
var swiper = new Swiper(".reviews-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//Email JS
function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.message');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail (name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email, msg){
    emailjs.send("service_8wk10sv","template_mpjwfbz",{
        from_name: email,
        to_name: name,
        message: msg,
        }); 
}   

function emptyerror() {
    swal({
        title: "Atenção",
        text: "Os espaços não podem estar em branco",
        icon: "error",
    })
}

function success() {
    swal({
        title: "Email enviado com sucesso!",
        text: "Respondemos o mais breve possível!",
        icon: "success",
    })
}

//Mudança do fundo do Cabeçalho ao Scrollar
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('header-active', window.scrollY> 0);
});

//Scroll Top
let scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () =>{
    scrollTop.classList.toggle('scroll-active', window.scrollY>= 1400);
});
const userInfo = document.querySelector('nav > .right .userInfo');
const loginPart = document.querySelector('nav > .login')
const logoutPart = document.querySelector('nav > .logout');
const token = localStorage.getItem('token') || '';
const username = localStorage.getItem('username');
const usernamePos = document.querySelector('nav > .right .userInfo > a')
const hamIcon = document.querySelector('nav .hamburger span');
const asideSection = document.querySelector('nav > .hamburgerPart');
const clearHam = document.querySelector('nav > .hamburgerPart > .clearingHam > svg')
const logo = document.querySelector('nav > .brandLogo');


logo.addEventListener('click', ()=>{
    window.location.href = "index.html";
})

window.addEventListener('load', ()=>{
    displayName();
})

logoutPart.addEventListener('click', (evnt)=>{
    evnt.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    window.location.href = 'index.html'
})

userInfo.addEventListener('mouseenter', ()=>{
    if(token){
        logoutPart.style.display = 'block'
    }else{
        loginPart.style.display = 'block'
    }
})

userInfo.addEventListener('mouseleave', ()=>{
    loginPart.style.display = 'none';
    logoutPart.style.display = 'none';
})

logoutPart.addEventListener('mouseenter', ()=>{
    logoutPart.style.display = 'block';
})

logoutPart.addEventListener('mouseleave', ()=>{
    logoutPart.style.display = 'none'
})

loginPart.addEventListener('mouseenter', ()=>{
    loginPart.style.display = 'block';
})

loginPart.addEventListener('mouseleave', ()=>{
    loginPart.style.display = 'none'
})


const displayName=()=>{
    const defaultString = `
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="user">
                        <circle fill="none" stroke="white" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"></circle>
                        <path fill="none" stroke="white" stroke-width="1.1"
                            d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"></path>
                    </svg>
    `
    if(token){
        usernamePos.innerHTML = `<p>${username}</p>`;
        usernamePos.addEventListener('click', ()=>{
            window.location.href = 'userDashboard.html'
        })
    }else{
        usernamePos.innerHTML = defaultString;
     }
}

hamIcon.addEventListener('click', ()=>{
    asideSection.style.display = 'block'
})

clearHam.addEventListener('click', ()=>{
    asideSection.style.display = 'none'
})
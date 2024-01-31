const container = document.getElementById('container'); 
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});


 const options={
    bottom: '32px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.2s', // default: '0.3s'
   //mixColor: '#fff', // default: '#fff'
    //backgroundColor: '#fff',  // default: '#fff'
   buttonColorDark: '#100f2c',  // default: '#100f2c'
//  // buttonColorLight: '#fff', // default: '#fff'
   saveInCookies: true, // default: true,
  label: '🌓', // default: ''
//     //autoMatchOsTheme: true // default: true
}

//const darkmode = new Darkmode(options);
 darkmode.showWidget();

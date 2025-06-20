 const cardno=document.querySelector('.cardno').value;
  // If using CommonJS

 const password=document.querySelector('.pass').value;
 const login=document.querySelector('.login');
 console.log(cardno);
 console.log(password);
 const API_URL =  "https://vercel-frontend-1.onrender.com";
 
 const SubmitEvent =document.querySelector('input[type="submit"]');
 login.addEventListener('click',async function(e) {
 e.preventDefault();
 const cardno = document.querySelector('.cardno').value;
 const password = document.querySelector('.pass').value;
 console.log("Attempting login request to:", API_URL + "/login");

 const response= await fetch(`${API_URL}/login`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({cardno,password}),
 });
 

 console.log('Response Status:', response.status); 
 if(response.ok){
    window.location.href="hostelpass.html";
 }
 else{
    alert('login failed')
 }
 
 
 });
 
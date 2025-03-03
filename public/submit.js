// const { json } = require("body-parser");

document.addEventListener('DOMContentLoaded',function(){
   const form =document.querySelector('form');
   if(form){
form.addEventListener('submit', async function (e) {
   e.preventDefault();
   
   const nameelement=document.querySelector('.name');
   const roomnoelement=document.querySelector('.Roomno');
   const reasonelement=document.querySelector('.reason');
   const timeoutelement=document.querySelector('.timeout');
   const timeinelement=document.querySelector('.timein');
   if (nameelement && roomnoelement && reasonelement && timeoutelement && timeinelement) {
      const name = nameelement.value;
      const roomno = roomnoelement.value;
      const reason = reasonelement.value;
      const timeout = timeoutelement.value;
      const timein = timeinelement.value;
      console.log(name);
      console.log(roomno);
      console.log(reason);
      console.log(timeout);
      console.log(timein);
   
    try{
   const final=await fetch('http://localhost:3000/submit',{
      method:'POST',
      headers:{
         'Content-Type':'application/json',
       },
       body:JSON.stringify({name,roomno,reason,timeout,timein}),
  
});
 

if(final.ok){
   const result=await final.text();
   console.log(result)
}else{
   console.error('server error')
}}
catch(error){
   console.error('network error',error);
}}
else {
   console.error('One or more form elements not found.');
 }
   });
} else {
   console.error('Form element not found.');
  }});
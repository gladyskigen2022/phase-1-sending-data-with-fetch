// Add your code here
function submitData(name,email){
    const user ={
        name: name,
        email: email
    }
return fetch("http://localhost:3000/users", {
   method: "POST",
   headers: {
    "Content-Type":"application/json",
    "Accept": "application/json"
   },
   body:JSON.stringify(user)

})
.then(res => res.json())
.then(data => {
    const info =document.createElement('p')
    info.textContent = data.id
    document.body.append(info)
    
})
.catch(err=> document.querySelector('body').append('Unauthorized Access'))
}
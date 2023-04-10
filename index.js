// const formData = {
//     name: "Steve",
//     email: "steve@steve.com",
//   };
// let name = "Steve"
// let email = "steve@steve.com"
  
 /* const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: "Steve",
      email: "steve@steve.com"
    }),
  };

function submitData(name, email){
    return fetch('http://localhost:3000/users', configurationObject)
    .then(function (response) {
        return response.json();
      })
    .then(function (object) {
        name = document.getElementById('name');
        email = document.getElementById('email');
        name.innerHTML = object.name
        email.innerHTML = object.email
      })
      .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
      });
}
submitData()*/
let name = "Steve"
let email = "steve@steve.com"

function submitData( name, email ) {  
  return fetch( 'http://localhost:3000/users', {      
    method: "POST",      
    headers: {        
      "Content-Type": "application/json",        
      "Accept": "application/json"      
    },      
    body: JSON.stringify( {name, email})    
  })    
    .then( function ( response ) {      
      return response.json()    } )    
    .then( function ( object ) {      
        document.body.innerHTML = object[ "id" ]    
      } )    
    .catch( function ( error ) {      
        document.body.innerHTML = error.message    
      } )
    }










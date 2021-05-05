class Form {
    constructor (name,lastname,email,phone){
        this.name_ = name;
        this.lastName = lastname;
        this.email_ = email;
        this.phone_ = phone;
    }

}
function load(){
    placesFunction() 
   
  
    const name_ = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email_ = document.getElementById("email").value;
    const phone_ = document.getElementById("phone").value;
    const person = new Form (name_, lastName, email_, phone_);
    console.log(person);
    document.getElementById("text-1").innerHTML = "Olá"
    document.getElementById("text-2").innerHTML =  name_;  
}

class Places {
    constructor(origin, whither, time) {
      this.origin_ = origin;
      this.whither_ = whither;
      this.time = time;
    }
   }
  
function placesFunction (){
    const origin_ = document.getElementById("originValue").value;
    const whither_ = document.getElementById("whitherValue").value;
    const time = document.getElementById("minutes").value;
    const  places = new Places (origin_, whither_, time);
    console.log(places)
    let value;
     if ( places.origin_ === "north" && places.whither_ === "south" || places.origin_ === "south" && places.whither_ === "north" ||
     places.origin_ === "east" && places.whither_ === "west" || places.origin_ === "west" && places.whither_ === "east"){
            value = time * 0.80
            document.getElementById("text-3").innerHTML = 
            "Seu plano terá um valor de R$" + value;   
    } else if (places.origin_ && places.whither_ === "all"){
            value = time * 1.20
            document.getElementById("text-3").innerHTML = 
            "Seu plano terá um valor de R$" + value;  
    } else if (places.origin_ && places.whither_) {
            value = time * 0.20
            document.getElementById("text-3").innerHTML = 
            "Seu plano terá um valor de R$" + value;  
        } else{
            console.log("Error")
        }
       }
     
        
 
  
 
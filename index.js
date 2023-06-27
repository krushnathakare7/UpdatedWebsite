document.getElementById("myButton").onclick = function() {
        location.href="./Quote.html";
}

document.getElementById("contactButton").onclick = function() {
    location.href ="./contact.html";
}

var postalCode = document.querySelector(".form-control").innerHTML;


function takeValue(){
    var postalCode = document.getElementById("placeHolderID").value;
       switch(postalCode){
        case "431001" : alert("We are available..!!")
        break;
        default: alert("Sorry currently we are not available at your location, we are working on it, we will get back to you soon");

       }
    }

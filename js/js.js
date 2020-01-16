function myFunction() {
    var email;
    email = document.getElementById("email").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!email.match(reg)) {
         alert("Invalid email address");
        return false;
    }else{
alert("Email Verified Successfully")}
    
}
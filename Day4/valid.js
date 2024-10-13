function validate() {
    let a = document.getElementById("un").value;
    let b = document.getElementById("pass").value;

   
    if (a.length < 10 || a === '') {
        alert("login failed.");
        return false;  
    }

  
    if (b === '') {
        alert("Password cannot be empty.");
        return false;
    }

  
    return true;
}

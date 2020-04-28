function validateForm() { // Won't allow for you to leave the form boxes blank
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    if (x == "" && y == "") {
        alert("Please fill out Name and Email.");
        return false;
    } else if (x == "") {
        alert("Please fill out your Name.");
        return false;
    } else if (y == "") {
        alert("Please fill out your Email.");
        return false;
    } else {
        return true
    }
}
 window.onload.alert = noalert.validateForm(true);
  validateForm();
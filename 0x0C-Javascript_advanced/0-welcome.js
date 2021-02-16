function welcome(firstName, lastName) {
    var fullName = new String(firstName + " " + lastName);
    
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}

function getFormvalue() {
    // Prevent form from submitting and refreshing the page
    event.preventDefault();

    // Access the form
    const form = document.getElementById("form1");

    // Get the trimmed values of fname and lname
    const firstName = form.fname.value.trim();
    const lastName = form.lname.value.trim();

    // Show the full name
    alert(firstName + " " + lastName);
}

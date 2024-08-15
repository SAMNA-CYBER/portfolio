function sendMail(event) {
    event.preventDefault(); // Prevent form submission and page refresh
// function sendMail(event) {
//     event.preventDefault(); // Prevent form submission and page refresh

    var params = {
        name: document.getElementById("uname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
//     var params = {
//         name: document.getElementById("uname").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value
//     };

    emailjs.send("service_y1tf12z", "template_8o4fg4c", params)
    .then(function(res) {
        alert("Success! Email sent. Status: " + res.status);
    })
    .catch(function(error) {
        console.error("EmailJS Error:", error); // Log the error to the console
        alert("Failed to send email. Please try again.");
    });
//     emailjs.send("service_y1tf12z", "template_8o4fg4c", params)
//     .then(function(res) {
//         alert("Success! Email sent. Status: " + res.status);
//     })
//     .catch(function(error) {
//         console.error("EmailJS Error:", error); // Log the error to the console
//         alert("Failed to send email. Please try again.");
}
function sendEmailFunc() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        city: document.getElementById("city").value,
        quote_reason: document.getElementById("quote_reason").value,
        best_contact: document.getElementById("best_contact").value
    }
    const serviceID = "service_o44ctun";
    const templateID = "template_fpdwwe9";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                console.log(res);
                alert("your message was sent successfully");
            }
        ).end(err => {
            console.log(err);
        })
}



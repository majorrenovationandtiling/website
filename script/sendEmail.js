function sendEmailFunc(e) {
    e.preventDefault();
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        city: document.getElementById("city").value,
        quote_reason: document.getElementById("quote_reason").value,
        best_contact: document.getElementById("best_contact").value
    }
    const serviceID = "service_7r3rokq";
    const templateID = "template_duyzg3u";

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

function sendReview(e) {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number_of_stars: document.getElementById("num_of_stars").value,
        review: document.getElementById("review").value
    }

    const serviceID = "service_7r3rokq";
    const templateID = "template_4cqqpdc";
    
    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                console.log(res);
                alert("Your review has been send");
            }
        ).end(err => {
            alert(err);
            return false;
        })

}



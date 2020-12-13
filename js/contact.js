document.getElementById("helperText").style.display = "none";

// dept and sem form
var contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("submitButton").innerHTML = "Requesting";
    document.getElementById("submitButton").setAttribute("disabled", "disabled");

    var email = document.getElementById("email").value;
    var full_name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;

    $.ajax({
        type: "POST",
        url: "contact.php",
        datatype: "html",
        data: {
            email: email,
            full_name: full_name,
            subject: subject,
            description: description
        },
        success: function (response) {
            var parsedResponse = JSON.parse(response);
            //console.log(parsedResponse);
            if (parsedResponse === "request-success") {
                document.getElementById("helperText").innerHTML = "Submitted successfully";
                document.getElementById("helperText").classList.remove("text-danger");
                document.getElementById("helperText").classList.add("text-success");
                document.getElementById("helperText").style.display = "block";
                document.getElementById("submitButton").innerHTML = "Submit";
                setTimeout(hideHelperText, 10000);
            }
            else {
                document.getElementById("helperText").innerHTML = "Request failed. Please try again.";
                document.getElementById("helperText").classList.remove("text-success");
                document.getElementById("helperText").classList.add("text-danger");
                document.getElementById("helperText").style.display = "block";
                document.getElementById("submitButton").innerHTML = "Submit";
                setTimeout(hideHelperText, 10000);
            }
        },
        error: function (error) { }
    });

    function hideHelperText() {
        document.getElementById("helperText").style.display = "none";
        document.getElementById("submitButton").removeAttribute("disabled", "disabled");
    }
});

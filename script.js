const enquiryForm = document.getElementById("enquiryForm");

enquiryForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get customer details
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate phone number
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Business owner's WhatsApp number
    // Replace with the owner's number including country code.
    const businessNumber = "919790175594";
    // Prepare WhatsApp message
    const whatsappMessage =
        "New Business Enquiry\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + email + "\n" +
        "Message: " + message;

    // Create WhatsApp URL
    const whatsappURL =
        "https://wa.me/" + businessNumber +
        "?text=" + encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

});
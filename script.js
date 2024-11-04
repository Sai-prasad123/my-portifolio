let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: [ 'Angular Developer','Frontend Developer','Web Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

 function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    function sendEmail() {
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID' with EmailJS values {service_dqmfro4 ,template_0ymxeb4}
        // emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        emailjs.send("service_dqmfro4", "template_0ymxeb4", formData)
            .then(response => {
                alert("Message sent successfully!");
                document.getElementById("contactForm").reset();
            })
            .catch(error => {
                console.error("Failed to send message", error);
                alert("Failed to send message. Please try again.");
            });
    }
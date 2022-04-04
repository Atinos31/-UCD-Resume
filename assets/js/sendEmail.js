
function validate(){
        let loader = document.querySelector('.loader');
        let name = document.querySelector('.name');
        let email = document.querySelector('.email');
        let subject = document.querySelector('.subject');
        let message = document.querySelector('.message');
        let submit = document.querySelector('.submit');
        

        submit.addEventListener('click', (e) => {
            e.preventDefault();

            if (
              name.value == "" ||
              email.value == "" ||
              message.value == "" ||
              subject.value == ""
            ) {
              inputEmpty();
            } else {
              loader.style.display = "flex";
              sendmail(name.value, subject.value, email.value, message.value);
              success();
              loader.style.display="none";

            }
        });
    }
    validate();

    function sendmail(name, subject, email, message) {
        emailjs.send("gmail", "template_04ew0co", {
        from_name: name,
        to_name: "Miss Sandra",
        message: message,
        subject: subject,
        from_email:email
      });
    }
      function success() {
            swal({
                title: "Thank You",
                text: " Your Message  was sent successfully, We will get back to you shortly!",
                icon: "success",
                button: "OK!",
            });
        }
        success()

        function error() {
            swal({
                title: "Ooops!",
                text: "Something went wrong, message could not be sent!",
                icon: "error",
                button: "OK!",
            });
        }
        error()

         function inputEmpty() {
            swal({
                title: "Ooops!",
                text: "Input fields are required!",
                icon: "warning",
                button: "OK!",
            });
        }
        inputEmpty()

// form
const formHeading = document.querySelector(".form-heading");
const formInputs = document.querySelectorAll(".contact-form-input");

formInputs.forEach((input) => {
    
    input.addEventListener("focus", () =>{
        formHeading.style.opacity ="0"
        setTimeout(() => {
        formHeading.textContent = `Your ${input.placeholder}`;
        formHeading.style.opacity = "1"
        }, 300);

    });

    input.addEventListener("blur", () =>{
        formHeading.style.opacity ="0"
        setTimeout(() => {
        formHeading.textContent = "Got A project in Mind?";
        formHeading.style.opacity = "1"
        }, 300);
    });
});
// end form
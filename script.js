function msg() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email-field").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      alert("Thanks for your message! I will contact you soon");
    } else {
      alert("Please fill out all fields!");
      return false; // Prevent default form submission
    }
  }
  function msg() {
    alert("Thanks!");
  }
  document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default submission
    alert("Thanks for your message! I will contact you soon");
  });
$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("#email-input");
  var passwordInput = $("#password-input");
  var usernameInput = $("#username-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();

    // Use FormData constructor to build a new multipart form (for handling images)
    var formData = new FormData();
    // append email to form (email: 'alex@alex.com')
    formData.append("email", emailInput.val().trim());
    // append password to form (password: '12345')
    formData.append("password", passwordInput.val().trim());

    formData.append("username", usernameInput.val().trim());
    
    // If we have an email and password, run the signUpUser function
    signUpUser(formData);
    emailInput.val("");
    passwordInput.val("");
    usernameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(formData) {
    $.ajax({
      url: "/api/signup",
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      method: 'POST',
    }).then(function (data) {
      console.log(data);
      window.location.replace(data)
      // If there's an error, handle it by throwing up a bootstrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log(err);
    $("#alert .msg").text(err);
    $("#alert").fadeIn(500);
  }
});
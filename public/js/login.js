$(document).ready(function () {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var usernameInput = $("input#username-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function (event) {
    event.preventDefault();
    console.log("hi");
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      username: usernameInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.username) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password, userData.username);
    emailInput.val('');
    passwordInput.val('');
    usernameInput.val('');
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password, username) {
    $.post("/api/login", {
      email: email,
      password: password,
      username: username,
    }).then(function (data) {
      console.log(data);
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function (err) {
      console.log(err);
    });
  }

});
var name_err = true;
var email_err = true;
var pass_err = true;
var confirmPass_err = true;
$(function () {
  $("#form__nameError").hide();
  $("#form__emailError").hide();
  $("#form__passError").hide();
  $("#form__confirmPassError").hide();
  $("#myForm").submit(handleFormSubmit);
});

function handleFormSubmit(e) {
  name_check();
  email_check();
  password_check();
  confirm_password_check();

  //Name Check
  function name_check() {
    var name_val = $("#name").val();

    if (name_val.length == "") {
      $("#form__nameError").show();
      $("#form__nameError").html("* Please enter your name");
      $("#form__nameError").focus();
      $("#form__nameError").addClass("form__error");
      $("#name").addClass("error");
      e.preventDefault();
      name_err = false;
    } else if (name_val.length < 5) {
      $("#form__nameError").show();
      $("#form__nameError").html("* Name should be atleast 5 characters");
      $("#form__nameError").focus();
      $("#form__nameError").addClass("form__error");
      $("#name").addClass("error");
      e.preventDefault();
      name_err = false;
    } else {
      $("#form__nameError").hide();
      $("#form__nameError").removeClass("form__error");
      $("#name").removeClass("error");
      name_err = true;
    }
  }

  //Email Check
  function email_check() {
    var email_val = $("#email").val();

    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;

    if (email_val.length == "") {
      $("#form__emailError").html("* Please enter your email");
      $("#form__emailError").show();
      $("#form__emailError").focus();
      $("#form__emailError").addClass("form__error");
      $("#email").addClass("error");
      e.preventDefault();
      email_err = false;
    } else if (!emailReg.test(email_val)) {
      $("#form__emailError").html("* Please enter a valid email address");
      $("#form__emailError").show();
      $("#form__emailError").focus();
      $("#form__emailError").addClass("form__error");
      $("#email").addClass("error");
      e.preventDefault();
      email_err = false;
    } else {
      $("#form__emailError").hide();
      $("#form__emailError").removeClass("form__error");
      $("#email").removeClass("error");
      email_err = true;
    }
  }

  //Password Check

  function password_check() {
    var pass_val = $("#password").val();

    if (pass_val.length == "") {
      $("#form__passError").html("* Please enter your password");
      $("#form__passError").show();
      $("#form__passError").focus();
      $("#form__passError").addClass("form__error");
      $("#password").addClass("error");
      e.preventDefault();
      pass_err = false;
    } else if (pass_val.length < 8) {
      $("#form__passError").html("* Password must be of atleast 8 characters");
      $("#form__passError").show();
      $("#form__passError").focus();
      $("#form__passError").addClass("form__error");
      $("#password").addClass("error");
      e.preventDefault();
      pass_err = false;
    } else {
      $("#form__passError").hide();
      $("#form__passError").removeClass("form__error");
      $("#password").removeClass("error");
      pass_err = true;
    }
  }
  //Confirm Password Check
  function confirm_password_check() {
    var pass_val = $("#password").val();
    var confirmPass_val = $("#confirm_password").val();
    if (pass_val != confirmPass_val) {
      $("#form__confirmPassError").html("* Passwords doesnot match");
      $("#form__confirmPassError").show();
      $("#form__confirmPassError").focus();
      $("#form__confirmPassError").addClass("form__error");
      $("#confirm_password").addClass("error");
      e.preventDefault();
      confirmPass_err = false;
    } else {
      $("#form__confirmPassError").hide();
      $("#form__confirmPassError").removeClass("form__error");
      $("#confirm_password").removeClass("error");
      confirmPass_err = true;
    }
  }
  if (
    name_err == true &&
    email_err == true &&
    pass_err == true &&
    confirmPass_err == true
  ) {
    alert("Form submitted successfully");
    return true;
  } else {
    e.preventDefault();
    return false;
  }
}

var re = /(\w+)\@(\w+)\.[a-zA-Z]/g;
var email = getElementById("email");
var emailValue = email.value;
var testEmail = re.test(emailValue);
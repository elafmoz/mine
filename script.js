function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";

  var text;
  if(name.length < 4){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }

  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Than 10 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}
function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+' characters';
}
function countChars(obj){
    var maxLength = 20;
    var strLength = obj.value.length;

    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+' out of '+maxLength+' characters';
    }
}
function countChars(obj){
    var maxLength = 20;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);

    if(charRemain < 0){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">You have exceeded the limit of '+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = charRemain+' characters remaining';
    }
}

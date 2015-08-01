$(document).ready(function() {

});

var signUpBool=true;

function defaultSignIn(signUpBool,username){
    if(signUpBool==true)
    {
      alert("Thank you for signing up. Please click OK and your page will change shortly.");
    }
    else
    {
          alert("Thank you for signing in. Please click OK and your page will change shortly.");
                  
          
    }
    window.location.href = '/investments.php?username='+username;
        

}
function signUp() {
    signUpBool=true;
    var username = $("#signUpUsername").val();
    var password = $("#signUpPassword").val();
    var confirmPassword=$("#signUpConfirmPassword").val();
    var email = $("#signUpEmail").val();
    var confirmEmail = $("#signUpConfirmEmail").val();
    var phoneNumber = $("#signUpPhoneNumber").val();
    if(confirmPassword!==password)
    {
        alert("Your passwords do not match. Please try again.");
    }
    if(email!==confirmEmail)
    {
        alert("Your email addresses do not match please try again.");
    }
    if(validateEmail(email)==false)
    {
        alert("Email not valid. Please try again")
    }
    if(validatePhone(phoneNumber)==false)
    {
        alert("Your phone number is not valid. Please try again");
    }
     if(confirmPassword==password && email==confirmEmail&&validateEmail(email)==true&&validatePhone(phoneNumber)==true)
    {
        Player.createNewUser(username, password, email, phoneNumber);
        
        defaultSignIn(true,username);
    }
}

function signIn()
{
    var username = $("#loginUsername").val();
    var password = $("#loginPassword").val();
    
    if(Player.isValidUsername(username)&&Player.isValidPassword(username,password))
    {
        defaultSignIn(false,username);
    }
    else
    {
        alert("Your username or password is incorrect");
    }
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function validatePhone(fld) {
    var stripped = fld.replace(/[\(\)\.\-\ ]/g, '');    

   if (fld.value == "") {
        return false;
        fld.style.background = 'Yellow';
    } else if (isNaN(parseInt(stripped))) {
       fld.style.background = 'Yellow';
       return false;
    } else if (!(stripped.length == 11)) {
       fld.style.background = 'Yellow';
       return false;
    }
    else
    {
        return true;
    }
    
} 



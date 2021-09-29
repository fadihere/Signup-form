function validation()
{
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;

    //validation for firstname!

    if(name1 == "") //for check there should firstname should not be empty!
    {
        document.getElementById('firstname').innerHTML =" * Please fill the username field";
        return false;
    }
    if(name1.length <= 2 || name1.length > 20 ) //for check there should be length of firstname is between 3-20!
    {
        document.getElementById('firstname').innerHTML =" * Please enter name length between 3 to 20";
        return false;
    }
    if(!isNaN(name1)) //for check there should not any number input by user!
    {
        document.getElementById('firstname').innerHTML =" * only characters are allowed";
        return false;
    }

    if(name1 != "" && (name1.length > 2 || name1.length < 20) && isNaN(name1)) //for checking all condition true or not!
    {
        document.getElementById('firstname').innerHTML = "";
    }

    //validation for lastname!

    if(name2 == "") //for check there should lastname should not be empty!
    {
        document.getElementById('lastname').innerHTML =" * Please Enter the username";
        return false;
    }
    if(name2.length <= 2 || name2.length > 20 ) //for check there should be length of lastname is between 3-20!
    {
        document.getElementById('lastname').innerHTML =" * Please Enter name length between 3 to 20";
        return false;
    }
    if(!isNaN(name2)) //for check there should not any number input by user!
    {
        document.getElementById('lastname').innerHTML =" * Only characters are allowed";
        return false;
    }

    if(name2 != "" && (name2.length > 2 || name2.length < 20) && isNaN(name2)) //for checking all condition true or not!
    {
        document.getElementById('lastname').innerHTML = "";
    }
        //email validation

    if(email == ""){
            document.getElementById('emailid').innerHTML =" * Please Enter your email";
            return false;
    }
    if(email.indexOf('@') <= 0 ){
            document.getElementById('emailid').innerHTML =" * Please Enter valid email";
            return false;
    }
    if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
        document.getElementById('emailid').innerHTML =" * Please Enter valid Email";
        return false;
    }

    if ( (email != "") && (email.indexOf('@') > 0 ) )
    {
        if((email.charAt(email.length-4)=='.') || (email.charAt(email.length-3)=='.'))
        {
            document.getElementById('emailid').innerHTML = "";
        }
    }

    if(pass == "")
    {
        document.getElementById('password1').innerHTML = "* Please Enter you password"
        return false;
    }
    if(pass.length < 8 || pass.length > 20 )
    {
        document.getElementById('password1').innerHTML = " * Please Enter 8 to 20 charactor password"
        return false;
    }

    if (pass != "" && (pass.length >= 8 || pass.length <= 20) )
    {
        document.getElementById('password1').innerHTML = "";
    }

    if(conpass == "")
    {
        document.getElementById('password2').innerHTML = "* Please Enter you confirm password"
        return false;
    }

    if (pass != conpass)
    {
        document.getElementById('password2').innerHTML = "* Pasword not matching";
        return false;
    }
    if(conpass != "" && pass == conpass)
    {
        document.getElementById('password2').innerHTML = "";
        
        
    }


}
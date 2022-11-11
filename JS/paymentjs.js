var form = document.forms['payment']
var errorname = document.getElementById('error-name')
var erroremail = document.getElementById('error-email')
var errorcity = document.getElementById('error-city')
var erroraddress = document.getElementById('error-address')
var errormethod = document.getElementById('error-method')
var erroragree = document.getElementById('error-agree')

function validateForm(ev){
    var isvalid = true
    if(form['name'].value == ""){
        errorname.innerText = "*Must be filled"
        isvalid = false
        ev.preventDefault()
    }
    else if(form['name'].value.length < 2 || form['name'].value.length > 23){
        errorname.innerText = "*Name's length 2-23 Characters"
        isvalid = false
        ev.preventDefault()
    }
    function validasiemail(emailform){
        var at = emailform.indexOf("@");
        if(at < 1){
            return false;
        }
        var titik = emailform.indexOf(".");
        if(titik <= at + 2){
            return false;
        }
        if (titik == emailform.length - 1){
            return false;
        }
        return true;
    }
    if(form['email'].value == ""){
        erroremail.innerText = "*Must be filled"
        isvalid = false
        ev.preventDefault()
    }
    else if(!validasiemail(form['email'].value)){
        erroremail.innerText = "*Format = email@address.com"
        isvalid = false
        ev.preventDefault()
    }
    if(form['city'].value ==""){
        errorcity.innerText = "*Must be filled"
        isvalid = false
        ev.preventDefault()
    }
    else if(form['city'].value.length < 4 || form['city'].value.length > 22){
        errorcity.innerText = "*Name's length 4-22 Characters"
        isvalid = false
        ev.preventDefault()
    }
    var arr1 = form['address'].value.split(' ');
    if(arr1.length < 3){
        erroraddress.innerText = "*Must be at least 3 words"
        isvalid = false
        ev.preventDefault()
    }
    if(form['address'].value ==""){
        erroraddress.innerText = "*Must be filled"
        isvalid = false
        ev.preventDefault()
    }
    if(form['method'].value == "0"){
        errormethod.innerText = "*Must be choosen"
        isvalid = false
        ev.preventDefault()
    }
    if(form['agree'].checked == false){
        erroragree.innerText = "*Must be checked"
        isvalid = false
        ev.preventDefault()
    }
    if(isvalid == true){
        if(form['method'].value == "visa"){
            var cardnumber;
            cardnumber = prompt('Enter Your Card Number');
            var valid = false;
            while (!valid) {
                if(isNaN(cardnumber) || cardnumber.length < 16 || cardnumber.length > 16) {
                    alert('Needs 16 Numbers')
                    cardnumber = prompt('Enter Your Card Number');
                } else {
                 valid = true;
                }
            }
            var validaty;
            validaty = prompt("Enter Your Visa Expiration Date (MM/YY)");
            var arr = validaty.split('');
            var valid1 = false;
            while (!valid1) {
                if(arr[0]>='0' && arr[0]<='9' && arr[1]>='0' && arr[1]<='9' && arr[2]=='/' && arr[3]>='0' && arr[3]<='9' && arr[4]>='0' && arr[4]<='9'){
                    valid1 = true;
                } else {
                    alert('Format : MM/YY')
                    validaty = prompt("Enter Your Visa Expiration Date (MM/YY)");
                    var arr = validaty.split('');
                }
            }
            var cvvnumber;
            cvvnumber = prompt("Enter Your CVV Number");
            var valid2 = false;
            while (!valid2) {
                if(isNaN(cvvnumber) || cvvnumber.length < 3 || cvvnumber.length > 3) {
                    alert('Needs 3 Numbers')
                    cvvnumber = prompt("Enter Your CVV Number");
                } else {
                 valid2 = true;
                }
            }
            var txt;
            var confirmed = confirm ('Card Number : '+ cardnumber + '\n' + 'Validity : ' + validaty + '\n' + 'Cvv Number : ' + cvvnumber + '\nAre You Sure?')
            if(confirmed == true){
                alert('Thank You')
                txt = "Please Wait :)";
            }
            document.getElementById("demo").innerHTML = txt;
        }
        else if(form['method'].value == "paypal"){
            var country;
            country = prompt("Enter Your Country's Name");
            var arr3 = country.split('');
            var digi = 0;
            var valid4 = false;
            while (!valid4){
                for(var i in arr3){
                    if(arr3[i]>='0' && arr3[i]<='9'){
                        digi++;
                    }
                }
                if(digi > 0 || country.length < 4 || country.length > 56){
                    alert("Country's Length 4-56 and No Alphanumeric")
                    country = prompt("Enter Your Country's Name");
                    var arr3 = country.split('');
                    var digi = 0;
                }else{
                    valid4 = true;
                }
            }
            var txt1
            var confirmed1 = confirm ('Country : '+ country + '\nAre You Sure?')
            if(confirmed1 == true){
                alert('Thank You')
                txt1 = "Please Wait :)";
            }
            document.getElementById("demo").innerHTML = txt1;
        }
    }else{
        ev.preventDefault();
    }
}
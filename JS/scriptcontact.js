var form = document.forms['contactUs']
var errorname = document.getElementById('error-name')
var erroremail = document.getElementById('error-email')
var errormessage = document.getElementById('error-message')

function validateForm(ev){

    if(form['name'].value == ""){
        errorname.innerText = "*Must be filled"
        ev.preventDefault()
    }
    else if(form['name'].value.length < 2 || form['name'].value.length > 23){
        errorname.innerText = "*Name's length 2-23 Characters"
        ev.preventDefault()
    }

    if(form['email'].value ==""){
        erroremail.innerText = "*Must be filled"
        ev.preventDefault()
    }
    if(form['message'].value ==""){
        errormessage.innerText = "*Must be filled"
        ev.preventDefault()
    }
}

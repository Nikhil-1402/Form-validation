function validation() {
    let fn = document.getElementById('fname').value,
        ln = document.getElementById('lname').value,
        mail = document.getElementById('mail').value,
        num = document.getElementById('num').value;
    if (fn == " " || fn == '') {
        document.querySelector('.errorf').innerHTML = `Enter correct first name`;
        return false;
    } else if (fn.length < 3 || fn.length > 25) {
        document.querySelector('.errorf').innerHTML = `Length of the name unexpected`;
        return false;
    } else {
        document.querySelector('.errorf').innerHTML = ``;
    }
    if (ln == " " || ln == '') {
        document.querySelector('.errorl').innerHTML = `Enter correct last name`;
        return false;
    } else if (ln.length < 3 || ln.length > 25) {
        document.querySelector('.errorl').innerHTML = `Length of the name unexpected`;
        return false;
    } else {
        document.querySelector('.errorl').innerHTML = ``;
    }
    if (num == '' || num == ' ') {
        document.querySelector('.errort').innerHTML = 'Enter contact detail';
        return false;
    } else if (num.length < 10) {
        document.querySelector('.errort').innerHTML = 'Enter valid number';
        return false;
    } else {
        document.querySelector('.errort').innerHTML = ``;
    }
    if (mail == " " || mail == '') {
        document.querySelector('.errorm').innerHTML = `Enter correct email`;
        return false;
    } else if (mail.length < 13 || mail.length > 40) {
        document.querySelector('.errorm').innerHTML = `Length of mail inappropriate`;
        return false;
    } else {
        document.querySelector('.errorm').innerHTML = ``;
    }
}

function val() {
    let num = document.getElementById('num').value;
    if (isNaN(num)) {
        document.querySelector('.errort').innerHTML = 'Enter valid number';
        return false;
    } else if (!isNaN(num)) {
        document.querySelector('.errort').innerHTML = '';
        return true;
    }
}
// Web Storage API session storage
if (window.sessionstorage) {

    var txtUsername = document.getElementById('InputEmail1');
    var txtAnswer = document.getElementById('InputPassword1');

    txtUsername.value = sessionStorage.getItem('InputEmail1');
    txtAnswer.value = sessonStorage.getItem('InputPassword1');

    txtUsername.addEventListener('input', function() {
        localStorage.setItem('InputEmail1', txtUsername.value);
        console.log('Email')
    }, false);

    txtAnswer.addEventListener('input', function() {
            localStorage.setItem('InputPassword1', txtAnswer.value); 
            console.log('Password')
            }, false);
    }
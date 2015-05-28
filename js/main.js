// Web Storage API session storage
if (window.sessionstorage) {

    var txtUsername = document.getElementById('InputEmail1');
    var txtAnswer = document.getElementById('InputPassword1');

    txtUsername.value = sessionStorage.getItem('InputEmail1');
    txtAnswer.value = sessionStorage.getItem('InputPassword1');

    txtUsername.addEventListener('input', function() {
        sessionStorage.setItem('InputEmail1', txtUsername.value);

    }, false);
    console.log('Email')

    txtAnswer.addEventListener('input', function() {
        sessionStorage.setItem('InputPassword1', txtAnswer.value);

    }, false);
    console.log('Password')
}
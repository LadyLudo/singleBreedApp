'use strict'

function getDogImage () {
    let breed = $("input[type='text']").val();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then(response => response.json())
        .then(responseJson =>
            displayResult(responseJson))
        .catch(error => alert('Something went wrong, try again later!'));
}
function displayResult(responseJson) {
    console.log(responseJson);
    $('.images').empty();
    if (responseJson.status === 'error'){
        $('.images').append(`<p>That breed does not exist</p>`)
    } else {
        $('.images').append(`<img src="${responseJson.message}" alt="response img">`);
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}
$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});
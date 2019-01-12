function encryptMessage() {
    var inputBox = document.getElementById("inputbox");
    var outputBox = document.getElementById("outputbox");
    outputBox.value = CryptoJS.AES.encrypt(inputBox.text, "assan").toString();
}
$(document).ready(function() {
    $( "#encryptbtn" ).click(function() {
        alert( "Handler for .click() called." );
    });
});

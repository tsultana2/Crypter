var customSalt = "peaches";
$(document).ready(function () {
    var options = ["DES", "AES", "RC4Drop", "TripleDES", "Rabbit"];
    for (var i = 0; i < options.length; i++) {
        $("#selectAlgo").append(new Option(options[i], options[i]));
    }
    $("#clearbtn").click(function () {
        $('textarea#inputbox').val("");
    });
    $("#copyoutput").click(function () {
        var copyText =  $("textarea#outputbox");
        copyText.select();
        document.execCommand("copy");
    });
    $("#copyinput").click(function () {
        var copyText =  $("textarea#inputbox");
        copyText.select();
        document.execCommand("copy");
    });
    $("#encryptbtn").click(function () {
        var algoName = $('#selectAlgo').find(":selected").text();
        if ($.inArray(algoName, options) !== -1) {
            var inputBox = $('textarea#inputbox');
            var outputBox = $('textarea#outputbox');
            if (algoName === "DES") {
                outputBox.val(
                    CryptoJS.DES.encrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString()
                );
            } else if (algoName === "AES") {
                outputBox.val(
                    CryptoJS.AES.encrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }
                    ).toString()
                );
            } else if (algoName === "RC4Drop") {
                outputBox.val(
                    CryptoJS.RC4Drop.encrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }
                    ).toString()
                );
            } else if (algoName === "TripleDES") {
                outputBox.val(
                    CryptoJS.TripleDES.encrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }
                    ).toString()
                );
            } else if (algoName === "Rabbit") {
                outputBox.val(
                    CryptoJS.Rabbit.encrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }
                    ).toString()
                );
            }
        }

    });
    $("#decryptbtn").click(function () {
        var algoName = $('#selectAlgo').find(":selected").text();
        if ($.inArray(algoName, options) !== -1) {
            var inputBox = $('textarea#inputbox');
            var outputBox = $('textarea#outputbox');
            if (algoName === "DES") {
                outputBox.val(
                    CryptoJS.DES.decrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8)
                );
            } else if (algoName === "AES") {
                outputBox.val(
                    CryptoJS.AES.decrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8)
                );
            } else if (algoName === "RC4Drop") {
                outputBox.val(
                    CryptoJS.RC4Drop.decrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8)
                );
            } else if (algoName === "TripleDES") {
                outputBox.val(
                    CryptoJS.TripleDES.decrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8)
                );
            } else if (algoName === "Rabbit") {
                outputBox.val(
                    CryptoJS.Rabbit.decrypt(
                        inputBox.val(),
                        customSalt,
                        {
                            mode: CryptoJS.mode.CBC,
                            padding: CryptoJS.pad.Pkcs7
                        }).toString(CryptoJS.enc.Utf8)
                );
            }
        }

    });
});

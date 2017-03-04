const $fields = $('input[aType=emailphone], input[type=password]');

// Add 'active' to label if autocomplete
$fields.change(function () {
    const $this = $(this);
    if ($this.val().length !== 0 || $this.attr('placeholder') !== undefined) {
        $this.siblings('label').addClass('active');
    }
});

$errorMsg = $('#error_message');

// Form resettings
$(document).on('reset', function (event) {
    const formReset = $(event.target);
    if (formReset.is('form')) {
        let emailphone = formReset.find('input[aType=emailphone], input[type=password]');
        emailphone.removeClass('valid');
        emailphone.removeClass('invalid');
        emailphone.removeClass('filled');
        emailphone.each(function () {
            const $this = $(this);
            if ($this.attr('value') === '') {
                $this.siblings('label').removeClass('active');
            }
        });
    }
});

$fields.focus(function () {
    $(this).siblings('label').addClass('active');
});

$fields.on('input', function () {
    const $this = $(this);
    if ($this.val().length !== 0) {
        $this.siblings('label').addClass('active');
        $this.addClass('filled');
    }
});

$fields.blur(function () {
    const $this = $(this);
    if ($this.val().length === 0) {
        $this.siblings('label').removeClass('active');
        $this.removeClass('filled');
    } else {
        $this.addClass('filled');
    }
});

$loginButton = $('#login_btn');
$emailphone = $('#emailphone');
$password = $('#password');

$fields.keypress(function (event) {
    if (event.which == 13) {
        if (!$loginButton.attr('disabled')) {
            $loginButton.click();
        }
    }
});

const checkButton = function () {
    let disabled = false;
    disabled = disabled
        || $password.val().length < 8
        || $emailphone.val().length == 0;
    if ($emailphone.attr('disabled')) {
        disabled = true;
    }
    $loginButton.attr('disabled', disabled);
};

$fields.on('blur focus input change', function () {
    checkButton();
    $(this).removeClass('invalid').removeClass('valid');
});

$(document).keyup(function (event) {
    if (event.keyCode == 27) {
        $emailphone.select();
    }
});

const decode = function (data) {
    let result = {};
    let values = data.split('&');
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        let pair = value.split('=');
        result[pair[0]] = pair[1];
    }
    return result;
};

const handleResponse = function (response) {
    if (response.indexOf(':') < 0) {
        switch (response) {
            case "WL1001":
                $emailphone.select();
                $fields.addClass('invalid');
                $password.siblings('label').attr('data-error', "Incorrect email/phone number or password");
                break;
            case "WL1010":
                $errorMsg.html("WR1010 Login failed. " +
                    "Please call us at 1-905-806-8846.");
                break;
            case "DB3000":
                $errorMsg.html("DB3000 Cannot connect to database. " +
                    "Please call us at 1-905-806-8846");
                break;
            case "WS3000":
                $errorMsg.html("WS3000 Cannot connect to webserver. " +
                    "Please call us at 1-905-806-8846");
                break;
        }
        $inputs.prop('disabled', false);
        $loginButton.attr('disabled', false);
    } else {
        const code = response.substring(0, response.indexOf(':'));
        let values = response.substring(response.indexOf(':') + 1).split(':');
        if (code === "WL1000") {
            values = decode(values[0]);
            $hidden = $('#hidden');
            let html = "";
            for (let key in values) {
                if (values.hasOwnProperty(key) && values[key]) {
                    html += "<input type='hidden' name='" + key + "' value='" + values[key] + "'/>";
                }
            }
            $hidden.html(html);
            $hidden.submit();
        } else {
            $inputs.prop('disabled', false);
            $loginButton.attr('disabled', false);
        }
    }
};

// Add 'active' to label if the field is prepopulated
let increment = 0;
const pollID = window.setInterval(function () {
    increment++;
    let hasValue = $password.val().length >= 8;
    if (!hasValue) {
        hasValue = $('#password:-webkit-autofill').length >= 8;
    }
    if (hasValue) {
        $password.trigger('input');
        $password.siblings('label').addClass('active');
        if ($emailphone.val().length > 0 || $('#emailphone:-webkit-autofill').length > 0) {
            $loginButton.attr('disabled', false);
        }
    }
    if (increment >= 20) {
        window.clearInterval(pollID);
    }
}, 100);

// Document ready
let request;
$(function () {
    $loginButton.click(function (event) {
        $fields.removeClass('valid');
        $fields.removeClass('invalid');
        event.preventDefault();
        if (request) {
            request.abort();
        }
        const $form = $('#login_form');
        const $inputs = $form.find('#emailphone, #password');
        let data = "";
        $inputs.each(function (index, element) {
            data += element.id + '=' + element.value + '&';
        });
        $inputs.prop('disabled', true);
        $loginButton.attr('disabled', true);
        request = $.ajax({
            url: '../php/login.php',
            type: "POST",
            data: data
        });
        request.always(function () {
        });
        request.done(function (response) {
            handleResponse(response);
        });
        request.fail(function () {
            handleResponse("WS3000");
            $inputs.prop('disabled', false);
            $loginButton.attr('disabled', false);
        });
    });
    $(document).ready(function () {
        $fields.blur();
        $emailphone.focus();
        window.focus();
        let count = 0;
        $('#password, #emailphone').each(function (index, element) {
           if (element.val().length > 0) {
               element.siblings('label').addClass('active');
               count++;
           }
        });
        if (count == 2) {
            $('#login_btn').attr('disabled', false);
        }
    });
});

/*
 $('#recover').click(function (event) {
 event.preventDefault();
 $.ajax({
 url: '../php/firebase.php',
 success: function(response) {
 console.log(response);
 }
 });

 });*/
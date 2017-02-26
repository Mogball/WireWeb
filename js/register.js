// Basic client-side password verification
const validatePassword = function (field) {
    let lowercase = new RegExp("(?=.*[a-z])");
    let uppercase = new RegExp("(?=.*[A-Z])");
    let numeric = new RegExp("(?=.*[0-9])");
    let special = new RegExp("(?=.*[!@#\$%\^&\*])");
    let length = new RegExp("(?=.{10,})");
    let lengthShort = new RegExp("(?=.{8,})");
    let lengthLong = new RegExp("(?=.{12,})");
    const val = field.val();
    let strength = lowercase.test(val) + uppercase.test(val)
        + numeric.test(val) + special.test(val) + lengthShort.test(val)
        + length.test(val) + lengthLong.test(val);
    if (val.length === 0) {
        field.removeClass('weak').removeClass('invalid').removeClass('mini').removeClass('valid');
        return;
    }
    if (strength == 7) {
        field.removeClass('weak').removeClass('invalid').removeClass('mini').addClass('valid');
    } else if (strength >= 5) {
        field.removeClass('invalid').removeClass('valid').removeClass('mini').addClass('weak');
    } else if (lengthShort.test(val) && (lowercase.test(val) || uppercase.test(val)) && numeric.test(val)) {
        field.removeClass('valid').removeClass('weak').removeClass('invalid').addClass('mini');
    } else {
        let message;
        if (!lowercase.test(val) && !uppercase.test(val)) {
            message = "Password must contain a letter";
        } else if (!numeric.test(val)) {
            message = "Password must contain a number";
        } else {
            message = "Password must be at least 8 characters";
        }
        field.siblings('label').attr('data-error', message);
        field.removeClass('valid').removeClass('weak').removeClass('mini').addClass('invalid');
    }
};
// Basic client-side email validation
const validateEmail = function (field, invalidate) {
    invalidate = !!invalidate;
    let hasLength = field.attr('data-length') !== undefined;
    const lenAttr = parseInt(field.attr('data-length'));
    const len = field.val().length;
    if (field.val().length === 0 && field[0].validity.badInput === false) {
        if (field.hasClass('validate')) {
            field.removeClass('valid');
            field.removeClass('invalid');
        }
    } else {
        if (field.hasClass('validate')) {
            let re = new RegExp(/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126})+(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))]))$/i);
            if (((field.is(':valid') && hasLength && (len <= lenAttr))
                || (field.is(':valid') && !hasLength))
                && re.test(field.val())) {
                field.removeClass('invalid');
                field.addClass('valid');
            }
            else {
                if (invalidate) {
                    field.removeClass('valid');
                    field.siblings('label').attr('data-error', "Please enter a valid email address");
                    field.addClass('invalid');
                }
            }
        }
    }
};

const selector = '#email, #password, #confirm_password';
const $selected = $(selector);
$selected.focus(function () {
    $(this).removeClass('invalid').removeClass('valid');
});
$email = $('#email');
$email.blur(function () {
    validateEmail($(this), true);
});
const $registerButton = $('#register_btn');
const checkButton = function () {
    let valid = true;
    $selected.each(function (index, element) {
        const $element = $(element);
        valid = valid && ($element.hasClass('valid') || $element.hasClass('weak') || $element.hasClass('mini'));
    });
    $registerButton.attr('disabled', !valid);
};
// Basic client-side password matching
const validateConfirmPassword = function (field) {
    const val = field.val();
    if (val.length === 0) {
        field.removeClass('invalid').removeClass('valid');
        return;
    }
    if (val === $password.val()) {
        field.removeClass('invalid').addClass('valid');
    } else {
        field.siblings('label').attr('data-error', "Passwords must match");
        field.removeClass('valid').addClass('invalid');
    }
};

let $password = $('#password');
let $confirmPassword = $('#confirm_password');
$password.on('input blue focus', function () {
    validatePassword($(this));
    validateConfirmPassword($confirmPassword);
});
$confirmPassword.on('input blur focus', function () {
    validateConfirmPassword($(this));
});

$selected.on('input change blur', function () {
    checkButton();
});
$selected.on('input', function () {
    $(this).siblings('label').addClass('active');
});
$errorMessage = $('#error_message');

// Process responses from the server
const processResponse = function (response) {
    if (response.indexOf('-') < 0) {
        switch (response) {
            case "WR1001":
                $confirmPassword.siblings('label').attr('data-error', "Passwords must match");
                $confirmPassword.removeClass('valid').addClass('invalid');
                break;
            case "WR1004":
                $email.siblings('label').attr('data-error', "Please enter a valid email address");
                $email.removeClass('valid').addClass('invalid');
                break;
            case "WR1006":
                $email.siblings('label').attr('data-error', "Email is already in use");
                $email.removeClass('valid').addClass('invalid');
                $('#recover').addClass('visible');
                break;
            case "WR1010":
                $errorMessage.html("WR1010 Registration failed. Please call us at 1-905-806-8846.");
                break;
            case "DB3000":
                $errorMessage.html("DB3000 Registration failed. Please call us at 1-905-806-8846");
                break;
            case "WR1000":
                window.location.href = "../"; // TODO Redirect to WebAPP
                break;
        }
    } else {
        const code = response.substring(0, response.indexOf('-'));
        const values = response.substring(response.indexOf('-') + 1).split('-');
        const elements = [null, $email, $password, $confirmPassword];
        switch (code) {
            case "WR1002":
                for (let i = 0; i < values.length; i++) {
                    let index = parseInt(values[i]);
                    elements[index].siblings('label').attr('data-error', "Field cannot be empty");
                    elements[index].removeClass('valid').addClass('invalid');
                }
                break;
            case "WR1003":
                let message = "Password must: ";
                if (values.indexOf('1') >= 0) {
                    message += "be at least 8 characters, ";
                }
                if (values.indexOf('2') >= 0) {
                    message += "have at least one letter, ";
                }
                if (values.indexOf('3') >= 0) {
                    message += "have at least one number, ";
                }
                message = message.substring(0, message.length - 2);
                $password.siblings('label').attr('data-error', message);
        }
    }
};

let request;
$(function () {
    $registerButton.attr('disabled', true);

    $registerButton.click(function (event) {
        $('#recover').removeClass('visible');
        $errorMessage.html("");
        event.preventDefault();
        if (request) {
            request.abort();
        }
        const $form = $('#register_form');
        const $inputs = $form.find('#email, #password, #confirm_password');
        let data = "";
        $inputs.each(function (index, element) {
            data += element.id + '=' + element.value + '&';
        });
        $inputs.prop('disabled', true);
        request = $.ajax({
            url: "../php/register.php",
            type: "POST",
            data: data
        });
        request.done(function (response) {
            processResponse(response);
        });
        request.fail(function (jqXHR, textStatus, error) {

        });
        request.always(function () {
            $inputs.prop('disabled', false);
        });
    });
});
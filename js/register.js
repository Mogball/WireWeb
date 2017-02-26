// Basic client-side password verification
const validatePassword = function (field) {
    let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    let mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    const val = field.val();
    if (val.length === 0) {
        field.removeClass('weak').removeClass('invalid').removeClass('valid');
        return;
    }
    if (strongRegex.test(val)) {
        field.removeClass('weak').removeClass('invalid').addClass('valid');
    } else if (mediumRegex.test(val)) {
        field.removeClass('invalid').removeClass('valid').addClass('weak');
    } else {
        field.removeClass('valid').removeClass('weak').addClass('invalid');
    }
};
// Basic client-side email validation
const validateEmail = function (field) {
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
            let re = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            if (((field.is(':valid') && hasLength && (len <= lenAttr))
                || (field.is(':valid') && !hasLength))
                && re.test(field.val())) {
                field.removeClass('invalid');
                field.addClass('valid');
            }
            else {
                field.removeClass('valid');
                field.addClass('invalid');
            }
        }
    }
};

const selector = '#email, #password, #confirm_password';
const $selected = $(selector);
$selected.focus(function () {
    $(this).removeClass('invalid').removeClass('valid');
});
$('#email').blur(function () {
    validateEmail($(this));
});
const $registerButton = $('#register_btn');
const checkButton = function () {
    let valid = true;
    $selected.each(function (index, element) {
        const $element = $(element);
        valid = valid && ($element.hasClass('valid') || $element.hasClass('weak'));
    });
    $registerButton.attr('disabled', !valid);
};

let $password = $('#password');
let $confirmPassword = $('#confirm_password');
$password.on('input', function () {
    validatePassword($(this));
});
$password.blur(function () {
    validatePassword($(this));
});
$password.focus(function () {
    validatePassword($(this));
});
$confirmPassword.on('input', function () {
    validateConfirmPassword($(this));
});
$confirmPassword.blur(function () {
    validateConfirmPassword($(this));
});
$confirmPassword.focus(function () {
    validateConfirmPassword($(this));
});

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
        field.removeClass('valid').addClass('invalid');
    }
};

$selected.on('input', function () {
    $(this).siblings('label').addClass('active');
    checkButton();
});
$selected.change(function () {
    checkButton();
});

let request;
$(function () {
    $registerButton.attr('disabled', true);

    $registerButton.click(function (event) {
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
        request.done(function (response, textStatus, jqXHR) {
            console.log(response);
        });
        request.fail(function (jqXHR, textStatus, error) {

        });
        request.always(function () {
            $inputs.prop('disabled', false);
        });
    });
});
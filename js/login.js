const validate = function (field) {
    const value = field.val();
};


const $fields = $('input[aType=emailphone], input[type=password]');

// Add 'active' to label if autocomplete
$fields.change(function () {
    const $this = $(this);
    if ($this.val().length !== 0 || $this.attr('placeholder') !== undefined) {
        $this.siblings('label').addClass('active');
    }
    validate($this);
});

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
    validate($this);
});

// Document ready
$(function () {
    // Add 'active' to label if the field is prepopulated
    $('input[aType=emailphone], input[type=password]').each(function (index, element) {
        const $this = $(this);
        const $element = $(element);
        const $siblingsLabel = $this.siblings('label');
        if ($element.val().length > 0 || $this.attr('placeholder') !== undefined) {
            $siblingsLabel.addClass('active');
        } else {
            $siblingsLabel.removeClass('active');
        }
    });

    $('#login_btn').click(function () {
    });
});
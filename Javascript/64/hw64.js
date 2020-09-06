(function ($) {
    'use strict';

    $('button').prop('disabled', true);

    $('#confirm').change(function () {
        if ($(this).prop('checked')) {
            $('button').prop('disabled', false);
        } else {
            $('button').prop('disabled', true);
        }
    });

        $('#contactForm').submit(function (event) {
        var newDiv = document.createElement("div");
        $('body').append(newDiv);
        newDiv.innerHTML = `${$('#first').val()} ${$('#last').val()} ${$('#address').val()}`;
        event.preventDefault();
    });
}(jQuery));
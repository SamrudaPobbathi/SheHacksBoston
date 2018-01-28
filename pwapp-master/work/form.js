$(function() {
    // Get the form.
    var form = $('#form');

    // Get the messages div.
    var formfod = $('#food');
    var formclothing = $('#Clothing');
    var formwater = $('#water');
    var formmedication = $('#medication');
    var formothers = $('#fOthers');

    var formfod1 = $('#food1');
    var formclothing1 = $('#Clothing1');
    var formwater1 = $('#water1');
    var formmedication1 = $('#medication1');
    var formothers1 = $('#fOthers1');

    // TODO: The rest of the code will go here...
});
$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
});

// Serialize the form data.
var formData = $(form).serialize();

// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: 'http://10.192.204.78:8080/Uhack1/ServIt',
    data: formData
})
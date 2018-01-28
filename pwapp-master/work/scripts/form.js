$(function() {
    // Get the form.
    var form = $('#form');

    // Get the messages div.
    var formfod = $('#food').is(':checked');
    var formclothing = $('#Clothing').is(':checked');
    var formwater = $('#water').is(':checked');
    var formmedication = $('#medication').is(':checked');
    var formothers = $('#fOthers').is(':checked');

    var formfod1 = $('#food1').is(':checked').is(':checked');
    var formclothing1 = $('#Clothing1').is(':checked');
    var formwater1 = $('#water1').is(':checked');
    var formmedication1 = $('#medication1').is(':checked');
    var formothers1 = $('#fOthers1').is(':checked');

    // TODO: The rest of the code will go here...
});
$('form').submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
});

// Serialize the form data.
var formData = $('form').serialize();

// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: 'http://10.192.204.78:8080/Uhack1/ServIt',
    data: formData
})
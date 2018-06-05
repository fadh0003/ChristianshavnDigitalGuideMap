$(document).ready(function(){
    $('#infobtn').click(function(){
        $('#alertbox').show('fade');

        setTimeout(function(){
            $('#alertbox').hide('fade');
        }, 2000);
    });
});
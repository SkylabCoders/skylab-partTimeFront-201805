
$(document).ready(function(){
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',

        success: function(data) {
        
            $('.profile-image').attr('src',data.results[0].picture.medium);
            $('.registration-date').html(data.results[0].registered.date);
            $('.born-date').html(data.results[0].dob.date);
            $('.nationality').html(data.results[0].nat);
            $('.gender').html(data.results[0].gender);
            $('.address').html(data.results[0].location.street);
            $('.email').html(data.results[0].email);
            $('.phone').html(data.results[0].phone);
        },
        error: function(data) {
            console.log('error');
        }
    });
})
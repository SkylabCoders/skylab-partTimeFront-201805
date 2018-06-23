
$(document).ready(function(){

    var countries = {
        AU: "Australia",
        BR: "Brazil",
        CA: "Canada",
        CH: "Switzerland",
        DE: "Germany",
        DK: "Denmark",
        ES: "Spain",
        FI: "Finland",
        FR: "France",
        GB: "United Kingdom",
        IE: "Ireland",
        IR: "Iran",
        NL: "Netherlands",
        NZ: "New Zealand",
        TR: "Turkey",
        US: "United States of America"
    }

    // SET INTERVAL  PARA QUE LLAME UN PERFIL AUTOMÁTICAMETNE.

    setInterval(function(){


            $.ajax({
                url: 'https://randomuser.me/api/',
                success: function(data){

                    const newStreet = data.results[0].location.street;
                    const newCity = data.results[0].location.city;
                    const newState = data.results[0].location.state;

                    const newRegDate = new Date(data.results[0].registered.date);
                    const newRegMo = newRegDate.getMonth();
                    const newRegDay = newRegDate.getDate();
                    const newRegYear = newRegDate.getFullYear(); 

                    const newBornDate = new Date(data.results[0].dob.date);
                    const newBornMo = newBornDate.getMonth();
                    const newBornDay = newBornDate.getDate();
                    const newBornYear = newBornDate.getFullYear();

                    const newNat = countries[data.results[0].nat];
                    const flagClass = 'flag-icon flag-icon-'+newNat.toLowerCase();

                    
                    $('.img-circle').attr('src', data.results[0].picture.medium);
                    $('.registration-date').html(newRegDay + '/' + newRegMo + '/' + newRegYear)
                    $('.born-date').html(newBornDay + '/' + newBornMo + '/' + newBornYear)
                    $('.nationality').html(newNat);
                    $('#flag').attr('class',flagClass);
                    $('.gender').html(data.results[0].gender)
                    $('.address').html(newStreet + newCity + newState);
                    $('.email').html(data.results[0].email)
                    $('.phone').html(data.results[0].phone)

                },
                error: function(request, status, message){
                    console.log("ERROR");
                    console.log('message: ', message);
                    console.log('status: ', status);
                    console.log('request: ', request);
                }
            });
        



    }, 100);

});




/*


$('.get-profile').click(

    function getProfile(){     // ----> defino la función de Ajax
        $.ajax({
            url: 'https://randomuser.me/api/',
            success: function(data){

                const newStreet = data.results[0].location.street;
                const newCity = data.results[0].location.city;
                const newState = data.results[0].location.state;

                const newRegDate = new Date(data.results[0].registered.date);
                const newRegMo = newRegDate.getMonth();
                const newRegDay = newRegDate.getDate();
                const newRegYear = newRegDate.getFullYear(); 

                const newBornDate = new Date(data.results[0].dob.date);
                const newBornMo = newBornDate.getMonth();
                const newBornDay = newBornDate.getDate();
                const newBornYear = newBornDate.getFullYear();

                const newNat = countries[data.results[0].nat];
                const flagClass = 'flag-icon flag-icon-'+newNat.toLowerCase();

                
                $('.img-circle').attr('src', data.results[0].picture.medium);
                $('.registration-date').html(newRegDay + '/' + newRegMo + '/' + newRegYear)
                $('.born-date').html(newBornDay + '/' + newBornMo + '/' + newBornYear)
                $('.nationality').html(newNat);
                $('#flag').attr('class',flagClass);
                $('.gender').html(data.results[0].gender)
                $('.address').html(newStreet + newCity + newState);
                $('.email').html(data.results[0].email)
                $('.phone').html(data.results[0].phone)

            },
            error: function(request, status, message){
                console.log("ERROR");
                console.log('message: ', message);
                console.log('status: ', status);
                console.log('request: ', request);
            }
        });
    }
);

});

*/
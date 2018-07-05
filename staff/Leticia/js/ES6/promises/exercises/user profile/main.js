// - Si hacemos esto:

// const {
//     name,
//     picture,
//     registered,
//     dob,
//     nat,
//     gender,
//     location,
//     email,
//     phone
//     } = data.results[0];

// - Luego podemos usar 'date' solo en vez de 'data.results[0].date'
//     const registeredDate = new Date(date);

$(document).ready(function(){
    const getRandomUser = ()=>{
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
    
            success: function(data) {
                const registeredDate = new Date(data.results[0].registered.date);
                const dobDate = new Date(data.results[0].dob.date);
    
                let nationality = data.results[0].nat;
                if (countries[data.results[0].nat]){
                    nationality = countries[data.results[0].nat];
                }
                
                $('.nationality i').removeClass();
                flagClass = data.results[0].nat;
    
                $('.profile-image').attr('src',data.results[0].picture.medium);
                $('.registration-date').html(registeredDate.toLocaleDateString());
                $('.born-date').html(dobDate.toLocaleDateString());
                $('.nationality span').html(nationality);
                $('.nationality i').addClass(`flag-icon flag-icon-squared flag-icon-${flagClass.toLowerCase()}`);
                $('.gender').html(data.results[0].gender);
                $('.address').html(data.results[0].location.street);
                $('.email').html(data.results[0].email);
                $('.phone').html(data.results[0].phone);
            },
            error: function(data) {
                console.log('error');
            }
        });
    }
     
    getRandomUser();
    
    // change clicking button
    $('.get-profile').click(function(e){
        e.preventDefault();
        getRandomUser();
    });
    
    // change user every 2 seconds
    const i = setInterval(()=>{
        getRandomUser();
    },2000);

})
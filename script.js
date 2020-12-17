const app = {};

//Event listener to show the menu!
//on click of button 
    //toggle class menuShow menuHide
$('.menuToggle').click(function(){
    $('.menu')
        .toggleClass('menuShow menuHide')
})

//function to add the scrolled class to the nav bar once it starts scrolling
app.scroll = () => {
    $(document).scroll(function () {
        let nav = $(".navBarFixed");
        nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());
    });
};

//Event listener to scroll back to top
$('#scrollUp').click(function(){
    $('html, body').animate({scrollTop:0}, '300');
});

//minimal mode switch (switch between original style and minimal style)
$('.switch').click(function(){
    $('body').toggleClass('minimal');
    $('body').hasClass('minimal') ? $('.switchTxt').html('Switch to original style.') : $('.switchTxt').html('Switch to minimal style.') 
})

////FUNCTIONALITY to show individual project details
//function to show and hide the project details (mouse click event)
app.showDetails = () => { 
    $('.project')
    //show the details
    .click(function(){
        app.name = $(this).data('name');
        $(`.${app.name}Details`)
            .show()
            .addClass('animate__fadeInUp')
            .removeClass('animate__fadeOutDown');
    })
    //replicate the above via keyboard!
    $('.project').on('keypress', function(e){
        if (e.key == 'Enter'){
            app.name = $(this).data('name');
            $(`.${app.name}Details`)
                .show()
                .addClass('animate__fadeInUp')
                .removeClass('animate__fadeOutDown');
        }
    })
    app.hideDetails();
}

app.hideDetails = () => {
    $('.closeDetails').click(function(){
        $('.monsterDetails')
            console.log('click')
            .removeClass('animate__fadeInUp');
    })
}

// app.hideDetails = () => {
//     //hide the details
//     $('.closeDetails')
//         .click(function(){
//             app.name = $(this).data('name');
//             $(`.${app.name}Details`)
//             .hide()
//             .addClass('animate__fadeOutDown')
//             .removeClass('animate__fadeInUp')
//         setTimeout(function(){
//             $(`.${app.name}Details`)
//                 .removeClass('visible')
//         },  800)
//         })
//          //replicate the above via keyboard!
//         .on('keypress', function(e){
//             if (e.key == 'Enter'){
//             app.name = $(this).data('name');
//             $(`.${app.name}Details`)
//                 .addClass('animate__fadeOutDown')
//                 .removeClass('animate__fadeInUp')
//             setTimeout(function(){
//                 $(`.${app.name}Details`)
//                     .removeClass('visible')
//             },  800)
//         }
//     })
// }

app.init = () => {    
    AOS.init(); //initialize animations library
    app.showDetails();
    app.scroll();
};

$(function(){
    app.init();
});    



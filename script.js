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

//FUNCTIONALITY to change display images being shown
//hover in function
app.hoverIn = (hoverElement) => {
    $(`.${hoverElement}`)
            .removeClass('animate__fadeOut')
            .addClass('animate__fadeIn')
}

//hover out function
app.hoverOut = (hoverElement) => {
    $(`.${hoverElement}`)
        .addClass('animate__fadeOut');
    setTimeout(function(){
    $(`.${hoverElement}`)
        .removeClass('animate__fadeIn')}, 500);
}

//function to change the display image (aka, calling the above functions at the right moments)
app.showHoverImg = () => { 
    app.projects.forEach((project) => {
        const imgEl = project.img;
        const hoverEl = project.hover;
        $(`.${imgEl}`)
            .hover(
                function(){
                    app.hoverIn(hoverEl);
                },
                function(){
                    app.hoverOut(hoverEl);
                })
            .focus(
                function(){
                    app.hoverIn(hoverEl);
                })
            .focusout(
                function(){
                    app.hoverOut(hoverEl);
                })
    })
}

////FUNCTIONALITY to show individual project details
//function to show and hide the project details (mouse click event)
app.showDetails = () => { 
    $('.hover')
    //show the details
    .click(function(){
        app.name = $(this).data('name');
        $(`.${app.name}Details`)
            .addClass('visible')
            .addClass('animate__fadeInUp')
            .removeClass('animate__fadeOutDown');
    })
    //replicate the above via keyboard!
    $('.project').on('keypress', function(e){
        if (e.key == 'Enter'){
            app.name = $(this).data('name');
            $(`.${app.name}Details`)
                .addClass('visible')
                .addClass('animate__fadeInUp')
                .removeClass('animate__fadeOutDown');
        }
    })
    app.hideDetails();
}

app.hideDetails = () => {
    //hide the details
    $('.closeDetails')
        .click(function(){
            app.name = $(this).data('name');
            $(`.${app.name}Details`)
                .addClass('animate__fadeOutDown')
                .removeClass('animate__fadeInUp')
            setTimeout(function(){
                $(`.${app.name}Details`)
                    .removeClass('visible')
            },  800)
        })
         //replicate the above via keyboard!
        .on('keypress', function(e){
            if (e.key == 'Enter'){
            app.name = $(this).data('name');
            $(`.${app.name}Details`)
                .addClass('animate__fadeOutDown')
                .removeClass('animate__fadeInUp')
            setTimeout(function(){
                $(`.${app.name}Details`)
                    .removeClass('visible')
            },  800)
        }
    })
}

app.init = () => {    
    AOS.init(); //initialize animations library
    app.showHoverImg();
    app.showDetails();

    app.scroll();
};

$(function(){
    app.init();
});    

//array of all portfolio project classes
app.projects = [
    monster = {
        img1: './assets/portfolio/monster1.png',
        img2: './assets/portfolio/monster2.png',
        img: 'monsterImg',
        hover: 'monsterHover',
    },

    oblique = {
        img1: './assets/portfolio/oblique1.png',
        img2: './assets/portfolio/oblique2.png',
        img: 'monsterImg',
        img: 'obliqueImg',
        hover: 'obliqueHover',
    },
    sport = {
        img1: './assets/portfolio/sport1.png',
        img2: './assets/portfolio/sport2.png',
        img: 'monsterImg',
        img: 'sportImg',
        hover: 'sportHover',
    },
    haiku = {
        img1: './assets/portfolio/haiku1.png',
        img2: './assets/portfolio/haiku2.png',
        img: 'monsterImg',
        img: 'haikuImg',
        hover: 'haikuHover',
    },
    shoeKloset = {
        img1: './assets/portfolio/shoe1.png',
        img2: './assets/portfolio/shoe2.png',
        img: 'monsterImg',
        img: 'shoeImg',
        hover: 'shoeHover',
    },
]


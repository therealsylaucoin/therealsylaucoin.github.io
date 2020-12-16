const app = {};

//Event handler to show the menu!
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


//change display images
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

//function to change the display image (mouse hover events)
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

//Show details
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

    //attempting to ^ replicate via keyboard!
    .on('keydown', function(e){
        if (e.key == 'Enter'){
            console.log('keypress');
        }
        console.log('keypress');
    })

    //hide the details
    $('.fa-times').click(function(){
        app.name = $(this).data('name');
        $(`.${app.name}Details`)
            .addClass('animate__fadeOutDown')
            .removeClass('animate__fadeInUp')
        setTimeout(function(){
            $(`.${app.name}Details`)
                .removeClass('visible')
        }, 800)
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
        img: 'monsterImg',
        hover: 'monsterHover',
    },

    oblique = {
        img: 'obliqueImg',
        hover: 'obliqueHover',
    },
    sport = {
        img: 'sportImg',
        hover: 'sportHover',
    },
    haiku = {
        img: 'haikuImg',
        hover: 'haikuHover',
    },
    shoeKloset = {
        img: 'shoeImg',
        hover: 'shoeHover',
    },
]

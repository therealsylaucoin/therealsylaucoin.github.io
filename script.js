const app = {};

//function to change the display image
app.showHoverImg = () => { 
    app.projects.forEach((project) => {
        const img = project.img;
        const hover = project.hover;
        $(`.${img}`).hover(
            function(){
                $(`.${hover}`)
                    .removeClass('animate__fadeOut')
                    .addClass('animate__fadeIn')
                    .addClass('visible');
            },
            function(){
                $(`.${hover}`)
                    .addClass('animate__fadeOut');
                setTimeout(function(){
                $(`.${hover}`)
                    .removeClass('visible')
                    .removeClass('animate__fadeIn')}, 500);
            }
        )    
    })
}

//function to show and hide the project details
app.showDetails = () => { 
    $('.hover').click(function(){
        app.name = $(this).data('name');
        $(`.${app.name}Details`)
            .addClass('animate__fadeInUp')
            .removeClass('animate__fadeOutDown');
    })
    $('.fa-times').click(function(){
        app.name = $(this).data('name');
        $(`.${app.name}Details`)
            .addClass('animate__fadeOutDown')
    })
}

//function to get medium articles


app.init = () => {    
    AOS.init(); //initialize animations library
    app.showHoverImg();
    app.showDetails();
    
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

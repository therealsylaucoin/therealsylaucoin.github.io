const app = {};

//function to make the details appear on hover for each individual project
app.showDetails = () => { 
    app.projects.forEach((project) => {
        let img = project.img;
        let details = project.details;

        $(`.${img}`).mouseenter(
            function(){
                $(`.${details}`)
                    .removeClass('animate__fadeOut')
                    .addClass('animate__fadeIn')
                    .addClass('visible');
            }
        )    

        $(`.${img}`).mouseleave(
            function(){
                $(`.${details}`)
                    .addClass('animate__fadeOut');
                setTimeout(function(){
                $(`.${details}`)
                    .removeClass('visible')
                    .removeClass('animate__fadeIn')}, 500);
            }
        )  
    })
}



app.init = () => {    
    AOS.init(); //initialize animations library
    app.showDetails();
};

$(function(){
    app.init();
    
});

//array of all portfolio project classes
app.projects = [
    monster = {
        img: 'monsterImg',
        details: 'monsterDetails',
        name: 'Monster Mash',
        description: `A classic memory card matching game, which includes two modes (friendly and scary), three difficulty levels and a move counter.`,
        skills: ['jQuery', 'Sass', 'Html5'],
        live: 'https://themonstermash.netlify.app/',
        github: 'https://github.com/therealsylaucoin/monsterMash',
    },
    {
        img: 'obliqueImg',
        details: 'obliqueDetails'
    },
    {
        img: 'sportImg',
        details: 'sportDetails'
    },
    {
        img: 'haikuImg',
        details: 'haikuDetails'
    },
    {
        img: 'shoeImg',
        details: 'shoeDetails'
    },
]
const app = {};
app.switch = $('#modeSwitch');

//array of all portfolio project classes
app.projects = [
    {
        img: 'monsterImg',
        details: 'monsterDetails'
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

//function to make the details appear on hover for each individual project
app.showDetails = () => { 
    app.projects.forEach((project) => {
        let img = project.img;
        let details = project.details;
        console.log(img, details);

        $(`.${img}`).hover(
            function(){
                //get the class name
                $(`.${details}`).toggleClass('visible');

            }
        )    
    })
}



app.init = () => {
    //switch from light to dark
    // app.switch.on('click', function(){
    //     $('body').toggleClass('lightMode', 'darkMode');
    // })
    app.showDetails();
};

$(function(){
    app.init();
    
});
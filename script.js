const app = {};

//function to change the display image
app.showHoverImg = () => { 
    app.projects.forEach((project) => {
        let img = project.img;
        let hover = project.hover;
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



app.init = () => {    
    AOS.init(); //initialize animations library
    app.showHoverImg();
    
};

$(function(){
    app.init();
});

//array of all portfolio project classes
app.projects = [
    monster = {
        img: 'monsterImg',
        hover: 'monsterHover',
        img1: './assets/portfolio/monster1.png',
        img2: './assets/portfolio/monster2.png',
        name: 'Monster Mash',
        description: `A classic memory card matching game, which includes two modes (friendly and scary), three difficulty levels and a move counter.`,
        skills: 'jQuery, Sass, Html5',
        live: 'https://themonstermash.netlify.app/',
        github: 'https://github.com/therealsylaucoin/monsterMash',
    },

    oblique = {
        img: 'obliqueImg',
        hover: 'obliqueHover',
        img1: './assets/portfolio/oblique1.png',
        img2: './assets/portfolio/oblique2.png',
        name: 'Oblique Strategies',
        description: `My take on Brian Eno's timeless lateral thinking deck, with the addition of a Collect Strategies deck where users can contribute.`,
        skills: 'React, Rest API, Firebase ,Sass, Html5',
        live: '',
        github: '',
    },
    sport = {
        img: 'sportImg',
        hover: 'sportHover',
        img1: './assets/portfolio/sport1.png',
        img2: './assets/portfolio/sport2.png',
        name: 'Sport Spot',
        description: `Pair programing.`,
        skills: 'jQuery, Sass, Html5',
        live: '',
        github: '',
    },
    haiku = {
        img: 'haikuImg',
        hover: 'haikuHover',
        img1: './assets/portfolio/haiku1.png',
        img2: './assets/portfolio/haiku2.png',
        name: 'Haiku Ahoy',
        description: `Group project.`,
        skills: 'jQuery, Sass, Html5',
        live: '',
        github: '',
    },
    shoeKloset = {
        img: 'shoeImg',
        hover: 'shoeHover',
        img1: './assets/portfolio/shoeKloset1.png',
        img2: './assets/portfolio/shoeKloset2.png',
        name: 'Shoe Kloset',
        description: `PSD conversion`,
        skills: 'jQuery, Sass, Html5',
        live: '',
        github: '',
    },
]


// `
// <h3>${project.name}</h3>

// <p>${project.description}</p>

//             <div>
//                 <p>Made with:</p>
//                 <ul>
//                     <li>jQuery</li>
//                     <li>Sass</li>
//                     <li>Html5</li>
//                 </ul> -->
//             <!-- </div>

//             <a href="https://themonstermash.netlify.app/" target="_blank" rel="noreferrer">Live</a>
//             <a href="https://github.com/therealsylaucoin/monsterMash" target="_blank"
//                 rel="noreferrer">GitHub</a> -->
//             `       
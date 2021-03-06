const app = {};
app.textArray = [' Front-End Developer', ' Hobby Dabbler', ' People Person'];


//Function for text typing effect (in about section)
// Type Effect
app.typeEffect = () => {
    const text = document.querySelector('.type');
    let arrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < app.textArray[arrayIndex].length) {
            // start inserting the text one character at a time with a .2ms delay
            text.textContent += app.textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(backspace, 800)
        }
    }
    
    function backspace() {
        if (charIndex > 0) {
            text.textContent = app.textArray[arrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(backspace, 100);
        }
        else {
            arrayIndex++;
            if (arrayIndex >= app.textArray.length) arrayIndex = 0;
            setTimeout(type, 100 + 1100);
        }
    }
    
    setTimeout(type, 500);
};


//Event listener to show the menu!
//on click of button 
//toggle class menuShow menuHide
$('.menuToggle').click(function(){
    $('.menu')
        .toggleClass('menuShow menuHide')
})


////Function to add the scrolled class to the nav bar once it starts scrolling
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

//Event listener for Minimal mode switch (switch between original style and minimal style)
$('.switch').click(function(){
    $('body').toggleClass('minimal');
    $('body').hasClass('minimal') ? $('.switchTxt').html('Switch to original style.') : $('.switchTxt').html('Switch to minimal style.') 
})

////FUNCTIONALITY to show individual project details
//function to show and hide the project details (mouse click & keypress event)
app.showDetails = (project) => {
    app.name = project.data('name');
    $(`.${app.name}Details`)
        .toggleClass('animate__fadeOutDown animate__fadeInUp')
        setTimeout(function(){
            $(`.${app.name}Details`).toggleClass('visible');
        }, 400)
}

//Event listeners calling the showDetails function
$('.project')
    .click(function(){
        if (window.innerWidth > 525 ){
            app.showDetails($(this));
        }
    })
    //replicate the above via keyboard!
    .on('keypress', function(e){
        if (e.key == 'Enter'){
            app.showDetails($(this));
        }
    })

//function to remove fade classes on mobile and add class visible
app.mobileClass = () => {
    if (window.innerWidth < 525 ){
        $('.details')
            .addClass('visible')
            .removeClass('animate__fadeOutDown');
    }
}

app.init = () => {    
    AOS.init(); //initialize animations library
    app.scroll();
    app.typeEffect();
    app.mobileClass();
};

$(function(){
    app.init();
});    



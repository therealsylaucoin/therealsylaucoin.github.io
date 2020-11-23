const app = {};
app.switch = $('#modeSwitch');

app.init = () => {
    app.switch.on('click', function(){
        $('body').toggleClass('lightMode', 'darkMode');
    })
};

$(function(){
    app.init();
});
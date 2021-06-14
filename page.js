$(document).ready(function(){
    $(document).on('click', '.control nav a', function(event){
        history.pushState(null, null, event.target.href);
        $('article').load(event.target.href+' article>.content');
        event.preventDefault();
    })
    $(window).on('popstate', function(event){
        $('article').load(location.href+' article>.content');
    })
    var audio = new Audio('Infyuthsion - Dubcandy.mp3');
    $(document).on('click', '.control .player .play', function(event){
        audio.play();
    });
    $(document).on('click', '.control .player .stop', function(event){
        audio.pause();
    });
});
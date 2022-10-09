function loaddata() {

    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./fingerth.gif)";
    }, 1);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./boxnotopen.gif)";
    }, 2000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./boxopenbutblack.gif)";
    }, 4000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./whatisblack.gif)";
    }, 6000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./itsheart.gif)";
    }, 8000);

    setTimeout( function () {
        window.location.replace("main.html")
    }, 10000);

}

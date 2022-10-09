function loaddata() {

    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./fingerth.gif)";
    }, 1);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./boxnotopen.gif)";
    }, 1500);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./boxopenbutblack.gif)";
    }, 3000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./whatisblack.gif)";
    }, 4000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./itsheart.gif)";
    }, 5500);
    setTimeout( function () {
        window.location.replace("main.html")
    }, 7000);

}

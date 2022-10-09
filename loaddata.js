function loaddata() {

    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./fingerth.gif)";
    }, 1);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./boxnotopen.gif)";
    }, 2000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./boxopenbutblack.gif)";
    }, 4500);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./whatisblack.gif)";
    }, 7000);
    setTimeout( function () {
        document.getElementById('bg').style.backgroundImage="url(./itsheart.gif)";
    }, 9000);
    setTimeout( function () {
        window.location.replace("main.html")
    }, 12000);

}

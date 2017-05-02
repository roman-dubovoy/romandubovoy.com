var menuPosition = document.querySelector("#menu").offsetTop;

window.onscroll = function () {
    if (window.pageYOffset > menuPosition) {
        document.querySelector("#menu").style.position = 'fixed';
        document.querySelector("#menu").style.top = 0;
    }
    else{
        document.querySelector("#menu").style.position = 'static';
    }

    if (window.pageYOffset == document.querySelector("#skills").offsetTop){
        setInterval(function () {
            document.querySelector("#js").style.width = "70%";
            document.querySelector("#js").innerText = "70%";

            document.querySelector("#html").style.width = "75%";
            document.querySelector("#html").innerText = "75%";

            document.querySelector("#css").style.width = "70%";
            document.querySelector("#css").innerText = "70%";

            document.querySelector("#jquery").style.width = "50%";
            document.querySelector("#jquery").innerText = "50%";

            document.querySelector("#php").style.width = "80%";
            document.querySelector("#php").innerText = "80%";

            document.querySelector("#mysql").style.width = "80%";
            document.querySelector("#mysql").innerText = "80%";
        }, 500);
    }
}




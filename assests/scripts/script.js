// REMOVES LOADING PAGE AFTER IT IS FINISHED
function removeLoadingPage(){
    document.getElementById("loader-wrapper").style.visibility = "hidden"
}
setTimeout(removeLoadingPage, 3000)

// ADDS LIVE TIME IN BROWSER
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);
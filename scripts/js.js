function showhide() {
    var x = document.getElementByID("showhide");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
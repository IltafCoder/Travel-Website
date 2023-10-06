
function runMenuBar () {

    let menu = document.getElementsByClassName("menu-bar")
    if (menu[0].classList.contains("show-menu-now")) {
        menu[0].classList.remove("show-menu-now")
    }
    else {
        menu[0].classList.add("show-menu-now")
        
    }
}
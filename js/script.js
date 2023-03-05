function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

btnContinue.addEventListener("click", function() {
    toggle();
});
btnPopupClose.addEventListener("click", function() {
    toggle();
})

// Sign In Popup
function inToggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('sign_in_popup');
    popup.classList.toggle('active');
}

// Sign Up Popup
function upToggle() {
    var popup = document.getElementById('sign_up_popup');
    popup.classList.toggle('active');
}

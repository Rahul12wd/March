var openPopupBtn = document.getElementById('open-popup-btn');
var closePopupBtn = document.getElementById('popup-close-btn');


function openPopup(){
    var openPopupBtn = document.getElementById('open-popup-btn');
    document.body.classList.add("popup-active");
}


function closePopup(){
    var closePopupBtn = document.getElementById('popup-close-btn');
    document.body.classList.remove("popup-active");
}

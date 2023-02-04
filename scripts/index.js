const editButton = document.querySelector('.profile__edit-button_type_edit');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button')

const toggleOpenPopup = function (){
    popup.classList.toggle('popup_opened');
}

const handleEditButtonClick = function (){
    toggleOpenPopup();
}

const handleCloseButtonClick = function (){
    toggleOpenPopup();
}

const handleOverlayButtonClick = function (event){
    if (event.target === event.currentTarget){
        toggleOpenPopup();
    }
    };

editButton.addEventListener('click', handleEditButtonClick);
closeButton.addEventListener('click', handleEditButtonClick);
popup.addEventListener('click', handleOverlayButtonClick);
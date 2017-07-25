var setTextBySelector = function setTextBySelector( selector, banana ){
    var element = document.querySelector( selector );

    if( element ){
        element.textContent = banana;
    }
};

setTextBySelector( "h1", "Here it is!" );

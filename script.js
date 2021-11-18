


function hideRequest(element){
    var request = document.querySelector('.' + element)
    request.remove()
}


function changeText(element) {
    var nameChange = document.querySelector('.userName')
    nameChange.innerText = "John Doe";
}
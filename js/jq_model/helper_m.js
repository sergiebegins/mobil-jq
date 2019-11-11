let toggleDiv = function (id) {
    if($(id).hasClass('d-none')){
        $(id).removeClass('d-none')
    }else{
        $(id).addClass('d-none')
    }
}
let modalToggle =function (id) {
    $(id).modal('toggle');
}
let closeItem =function (id) {
    $(id).addClass('d-none')
}
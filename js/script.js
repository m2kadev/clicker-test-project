$(document).ready(function() {

    $('.rader-info-data').draggable({
        containment: '.rader-content-wrapper',
        stack: '.rader-info-data',
        opacity: 0.5,
        addClass: true,
        revert: true,
        revertDuration: 500,
        start: function (e, ui) {
            $(this).addClass('on-dragging')
        },
        stop: function (e, ui) {
            $(this).removeClass('on-dragging')
        }
    })

    $('.rader-sectors').droppable({
        accept: '.rader-info-data',
        drop: function(e, {draggable}) {
            let draggingItem = draggable
            draggingItem.addClass('dragged')
            draggingItem.draggable('option', 'revert', false)
            $(this).addClass('dropped')
        },
    })
})
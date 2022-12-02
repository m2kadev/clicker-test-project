$(document).ready(function() {

    var left
    
    $('.rader-info-data').draggable({
        containment: 'body',
        stack: '.rader-info-data',
        opacity: 0.5,
        addClass: true,
        revert: true,
        revertDuration: 500,
        start: function (e, ui) {
            $(this).addClass('on-dragging')
            $('.rader-circle-wrapper').css('opacity', '1')
            /* left = $(this).offset().left

            console.log(left) */
        },
        stop: function (e, ui) {
            $(this).removeClass('on-dragging')
            $('.rader-circle-wrapper').css('opacity', '0')
        }
    })

    $('.rader-sectors').droppable({
        accept: '.rader-info-data',
        drop: function(e, {draggable}) {
            let draggingItem = draggable
            draggingItem.addClass('dragged')
           /*  console.log(left)
            left = left + currentLeft
            console.log(currentLeft) */

            /* draggingItem.css('left', `${totalLeft}px`) */
            draggingItem.draggable('option', 'revert', false)
            $(this).addClass('dropped')
        },
    })
})
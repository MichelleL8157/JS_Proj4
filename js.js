$('.up,.down').click(function () {
    let item = $(this).parents('tr:first');
    if ($(this).is('.up')) {
        item.insertBefore(item.prev());
    } else {
        item.insertAfter(item.next());
    }
});
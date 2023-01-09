var upBut = document.querySelectorAll(".up");
var downBut = document.querySelectorAll(".down");
for (var i = 0; i < upBut.length; i++) {
    upBut[i].addEventListener('click', function () {
        var total = this.parentElement;
        if (total.previousElementSibling)
        total.parentNode.insertBefore(total, total.previousElementSibling);
    });
}
for (var i = 0; i < downBut.length; i++) {
    downBut[i].addEventListener('click', function () {
        var total = this.parentElement;
        if (total.nextElementSibling)
        total.parentNode.insertBefore(total.nextElementSibling, total);
    });
}
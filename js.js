let nameArr = ["Orange Juice", "Oreos", "Whipped Cream", "Cherios"];
let priceArr = ["5.50", "4.50", "4.00", "2.50"];
function addRow() {
    var newItem = document.getElementById("newItem").value;
    var newPrice = document.getElementById("newPrice").value;
    exists(newItem, newPrice);
    document.getElementById("newItem").value="";
    document.getElementById("newPrice").value="";
}
function deleteRow(num) {
    document.getElementById("row" + num + "").outerHTML="";
    nameArr.splice(num - 1, 1);
    priceArr.splice(num - 1, 1);
}
function change(direction) {
    let index = document.getElementById("switchRow").value;
    var rows = document.getElementById("table").rows,
    parent = rows[index].parentNode;
    if (direction === "up" && index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
        document.getElementById("switchRow").value = index - 1;
    }
    if (direction === "down" && index < rows.length - 1) {
        index++;
        parent.insertBefore(rows[index], rows[index - 1]);
        document.getElementById("switchRow").value = index;
    }
}
const breadImg = document.getElementById('bread');
const cheeseImg = document.getElementById('cheese');
const milkImg = document.getElementById('milk');
const greensImg = document.getElementById('greens');
const fruitsImg = document.getElementById('fruits');
const thanksImg = document.getElementById('thanksBundle');
function exists(newItem, newPrice) {
    let isNew = true;
    for (let i = 0; i < nameArr.length; i++) {
        let itemList = nameArr[i];
        if (itemList === newItem) {
            isNew = false;
            break;
        }
    }
    if (isNew) {
        nameArr.push(newItem);
        priceArr.push(newPrice);
        var table = document.getElementById("table");
        var tableLen = (table.rows.length);
        var row = table.insertRow(tableLen).outerHTML="<tr id='row" + tableLen + "'><td id='itemRow" + tableLen + "'>" + newItem + "</td><td id='priceRow" + tableLen + "'>" + newPrice + "</td><td><input type='button' value='Delete' class='delete' onclick='deleteRow(" + tableLen + ")'></td></tr>";
    } 
}
breadImg.addEventListener('click', function() {
    let newItem = "Bread";
    let newPrice = "2.50";
    exists(newItem, newPrice);
});
cheeseImg.addEventListener('click', function() {
    let newItem = "Cheese";
    let newPrice = "3.50";
    exists(newItem, newPrice);
});
milkImg.addEventListener('click', function() {
    let newItem = "Milk";
    let newPrice = "6.50";
    exists(newItem, newPrice);
});
greensImg.addEventListener('click', function() {
    let newItem = "Greens";
    let newPrice = "4.00";
    exists(newItem, newPrice);
});
fruitsImg.addEventListener('click', function() {
    let newItem = "Fruits Basket";
    let newPrice = "9.50";
    exists(newItem, newPrice);
});
thanksImg.addEventListener('click', function() {
    let newItem = "Thanksgiving Bundle";
    let newPrice = "15.00";
    exists(newItem, newPrice);
});
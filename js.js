let nameArr = ["Milk Carton", "Oreos", "Whipped Cream", "Cherios"];
let priceArr = ["6.00", "4.50", "4.00", "2.50"];
function addRow() {
    var newItem = document.getElementById("newItem").value;
    var newPrice = document.getElementById("newPrice").value;
    nameArr.push(newItem);
    priceArr.push(newPrice);
    var table = document.getElementById("table");
    var tableLen = (table.rows.length);
    var row = table.insertRow(tableLen).outerHTML="<tr id='row" + tableLen + "'><td id='itemRow" + tableLen + "'>" + newItem + "</td><td id='priceRow" + tableLen + "'>" + newPrice + "</td><td><input type='button' value='Delete' class='delete' onclick='deleteRow(" + tableLen + ")'></td></tr>";
    document.getElementById("newItem").value="";
    document.getElementById("newPrice").value="";
    //to review the new list check the console:
    console.log(nameArr);
    console.log(priceArr);
}
function deleteRow(num) {
    document.getElementById("row" + num + "").outerHTML="";
    nameArr.splice(num - 1, 1);
    priceArr.splice(num - 1, 1);
    //to review the new list check the console:
    console.log(nameArr);
    console.log(priceArr);
}
function change(direction) {
    let index = document.getElementById("switchRow").value;
    var rows = document.getElementById("table").rows,
    parent = rows[index].parentNode;
    if (direction === "up" && index > 1) {
        parent.insertBefore(rows[index], rows[index - 1]);
    }
    if (direction === "down" && index < rows.length - 1) {
        index++;
        parent.insertBefore(rows[index], rows[index - 1]);
    }
}
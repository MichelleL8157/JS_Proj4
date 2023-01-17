let nameArr = ["Milk Carton", "Oreos", "Whipped Cream", "Cherios"];
let priceArr = ["6.00", "4.50", "4.00", "2.50"];
function addRow() {
    var newItem = document.getElementById("newItem").value;
    let isNew = true;
    for (let i = 0; i < nameArr.length; i++) {
        let itemList = nameArr[i];
        if (itemList === newItem) {
            isNew = false;
            break;
        }
    }
    if (isNew) {
        var newPrice = document.getElementById("newPrice").value;
        nameArr.push(newItem);
        priceArr.push(newPrice);
        var table = document.getElementById("table");
        var tableLen = (table.rows.length);
        var row = table.insertRow(tableLen).outerHTML="<tr id='row" + tableLen + "'><td id='itemRow" + tableLen + "'>" + newItem + "</td><td id='priceRow" + tableLen + "'>" + newPrice + "</td><td><input type='button' value='Delete' class='delete' onclick='deleteRow(" + tableLen + ")'></td></tr>";
        document.getElementById("newItem").value="";
        document.getElementById("newPrice").value="";
    }
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
    }
    if (direction === "down" && index < rows.length - 1) {
        index++;
        parent.insertBefore(rows[index], rows[index - 1]);
    }
}
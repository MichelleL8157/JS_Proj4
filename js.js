var index; 
function getRow() {
    var table = document.getElementById("table");
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function()
        {
            if (typeof index !== "undefined") {
                table.rows[index].classList.toggle("selected");
            }
            index = this.rowIndex;
            this.classList.toggle("selected");
        };
    }
}
getRow();
function change(direction) {
    var rows = document.getElementById("table").rows,
    parent = rows[index].parentNode;
    if(direction === "up") {
        if (index > 1) {
            parent.insertBefore(rows[index],rows[index - 1]);
            index--;
        }
    }
    if (direction === "down") {
        if (index < rows.length -1) {
            parent.insertBefore(rows[index + 1],rows[index]);
            index++;
        }
    }
}
function editRow(num) {
    document.getElementById("editBut" + num).style.display = "none";
    document.getElementById("saveBut" + num).style.display = "block";
        
    var item = document.getElementById("itemRow" + num);
    var price = document.getElementById("priceRow" + num);
        
    var itemVal = item.innerHTML;
    var priceVal = price.innerHTML;
        
    item.innerHTML = "<input type='text' id='itemText" + num + "' value='" + itemVal + "'>";
    country.innerHTML = "<input type='text' id=priceText" + num + "' value='" + priceVal + "'>";
}
function saveRow(num) {
    var itemVal2=document.getElementById("itemText" + num).value;
    var priceVal2=document.getElementById("priceText" + num).value;

    document.getElementById("itemRow" + num).innerHTML = itemVal2;
    document.getElementById("priceRow" + num).innerHTML = priceVal2;

    document.getElementById("editBut" + num).style.display = "block";
    document.getElementById("saveBut" + num).style.display = "none";
}
function deleteRow(num) {
    document.getElementById("row" + num + "").outerHTML="";
}
function addRow() {
    var newItem=document.getElementById("newItem").value;
    var newPrice=document.getElementById("newPrice").value;
        
    var table=document.getElementById("table");
    var tableLen=(table.rows.length) - 1;
    var row = table.insertRow(tableLen).outerHTML="<tr id='row"+tableLen+"'><td id='itemRow"+tableLen+"'>"+newItem+"</td><td id='priceRow"+tableLen+"'>"+newPrice+"</td><td><input type='button' id='editBut"+tableLen+"' value='Edit' class='edit' onclick='editRow("+tableLen+")'> <input type='button' id='saveBut"+tableLen+"' value='Save' class='save' onclick='saveRow("+tableLen+")'> <input type='button' value='Delete' class='delete' onclick='deleteRow("+tableLen+")'></td></tr>";

    document.getElementById("newItem").value="";
    document.getElementById("newPrice").value="";
}
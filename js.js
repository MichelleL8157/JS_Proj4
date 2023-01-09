var index; 
function getSelectedRow()
{
    var table = document.getElementById("table");
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            if(typeof index !== "undefined"){
                table.rows[index].classList.toggle("selected");
            }
            index = this.rowIndex;
            this.classList.toggle("selected");
        };
    }
}
getSelectedRow();
function upNdown(direction)
{
    var rows = document.getElementById("table").rows,
        parent = rows[index].parentNode;
        if(direction === "up")
        {
            if(index > 1){
                parent.insertBefore(rows[index],rows[index - 1]);
                index--;
            }
        }
        if(direction === "down")
        {
            if(index < rows.length -1){
                parent.insertBefore(rows[index + 1],rows[index]);
                index++;
            }
        }
}

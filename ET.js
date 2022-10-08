document.getElementById("add_btn").onclick = action;




function action(e){
    var tr = document.createElement("tr");
    table.appendChild(tr);
    
    tr.appendChild(document.createElement('td')).innerHTML = loc_name.value;
    tr.appendChild(document.createElement('td')).innerHTML = expense_date.value;
    tr.appendChild(document.createElement('td')).innerHTML = "$"+expense_amount.value;
    var btn = tr.appendChild(document.createElement('button'));
   
    btn.innerHTML = "[X]";
    btn.onclick = deleteRow;
    
   
    loc_name.value = null;
    expense_date.value = null;
    expense_amount.value = null;
    


}

function deleteRow(e){
    var btn = e.target || e.srcElement;
    btn.parentElement.remove();
    
}



function myFunction() {
    var input, filter, table, tr, td, td2, i, txtValue;
    input = document.getElementById("table-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("phone-number-table");
    tr = table.getElementsByTagName("tr");
    for (i = 2; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td || td2) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
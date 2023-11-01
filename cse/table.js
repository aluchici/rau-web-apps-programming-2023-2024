const rows = document.getElementsByTagName("tr");
console.log(rows);

const tableData = [];
for (let i = 1; i < rows.length; i++) {
    const rowData = [];
    for (const rowElement of rows[i].childNodes) {
        for (const value of rowElement.childNodes) {
            rowData.push(value.nodeValue);
        }
    }
    tableData.push(rowData);
}
console.log(tableData);
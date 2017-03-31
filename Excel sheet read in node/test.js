var XLSX = require('xlsx');
var workbook = XLSX.readFile('Test.xlsx');
var sheet_name_list = workbook.SheetNames;
var arr = new Array();
sheet_name_list.forEach(function(y) {
    var worksheet = workbook.Sheets[y];
    var headers = {};
    var data = [];
    for (z in worksheet) {
        if (z[0] === '!') continue;
        //parse out the column, row, and value
        var col = z.substring(0, 1);
        var row = parseInt(z.substring(1));
        var value = worksheet[z].v;
        arr.push(value);

        //store header names
        if (row == 1) {
            headers[col] = value;
            continue;
        }

        if (!data[row]) data[row] = {};
        data[row][headers[col]] = value;

    }
    //drop those first two rows which are empty
    // data.shift();
    // data.shift();
    //console.log(data);
});

console.log(arr[116]);
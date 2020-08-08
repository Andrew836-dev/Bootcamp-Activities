const connection = require("./connection.js");

const orm = {
    selectWhere: function (tableInput, colToSearch, condition) {
        connection.query("SELECT * FROM ?? WHERE ?? = ?", [tableInput, colToSearch, condition], function(err, data) {
            if (err) return console.log(err);
            return console.table(data);
        });
    },
    selectCol: function (colInput, tableInput) {
        connection.query("SELECT ?? FROM ??", [colInput, tableInput], function (err, data){
            if (err) return console.log(err);
            return console.table(data);
        })
    },
    leftJoin: function (colsToSelect, leftTable, rightTable, leftCondition, rightCondition) {
        connection.query("SELECT ?? FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.?? = tTwo.??", [colsToSelect, leftTable, rightTable, leftCondition, rightCondition], function (err, data){
            if (err) return console.log(err);
            return console.table(data);
        })
    }
    // clientAndParty: function () {
    //     connection.quert("SELECT ?? FROM ")
    // }
}

module.exports = orm;
const orm = require("./config/orm.js");

orm.selectCol("party_name", "parties");
orm.selectCol("client_name", "clients");
orm.selectWhere("parties", "party_type", "grown-up");
orm.leftJoin(["party_name", "client_name"], "parties", "clients", "client_id", "id");

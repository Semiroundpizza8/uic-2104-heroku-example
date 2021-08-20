let api = require("./api");
let express = require("express");
let volleyball = require("volleyball");

let app = express();

app.use(volleyball);
app.use(api);

const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log("Server live at :", PORT);
});

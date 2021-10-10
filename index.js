const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const morgan = require("morgan")

app.use(morgan('dev'))
app.use("*", (req, res)=>{
  res.status(200).json({
    message: "app running"
  });
});
app.listen(PORT, ()=>{
  console.log(`server is running in port ${PORT}`);
});

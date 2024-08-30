require('dotenv').config();

console.log(process.env.COOKIES === "true" ? true : process.env.COOKIES === "false" ? false : undefined);
console.log(JSON.parse(process.env.JSON));
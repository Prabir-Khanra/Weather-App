const http = require("http");
const fs = require("fs");
var requests = require('requests');
// const replacedata = ()=>{
//     const location = 
//     const country = 
//     const tempmax = 
//     const tempmin = 
//     const temperature = 
//     const temp_mood = 
// }
let i = 1;
const homefile = fs.readFileSync("Home.html", "utf-8");
const replaceOp = (myfile, orgval) => {
    let temperature = myfile.replace("{%temp_loc%}", orgval.name);
    temperature = temperature.replace("{%temp_country%}", orgval.sys.country);
    temperature = temperature.replace("{%temperature%}", orgval.main.temp);
    temperature = temperature.replace("{%temp_min%}", orgval.main.temp_min);
    temperature = temperature.replace("{%temp_max%}", orgval.main.temp_max);
    temperature = temperature.replace("{%temp_mood%}", orgval.weather[0].main);
    // console.log(i);
    // console.log(temperature);
    // console.log(`loc: ${orgval.name} \n country: ${orgval.sys.country}\n Temperature: ${orgval.main.temp}\n Temp-MIN: ${orgval.main.temp_min}\n Temp-MAX: ${orgval.main.temp_max}\n Temp-MODE: ${orgval.weather[0].main}`)
    i++;
    // console.log("\n\n\nSTART HERE\n\n"+hello+"\n\nFINISH HERE\n\n\n")
    return temperature;
};
const server = http.createServer((req, res) => {

    if (req.url == "/") {
        console.log("Success");
        requests("http://api.openweathermap.org/data/2.5/weather?q=tamluk&appid=4763cc2f333a0ba31a5c136f47830411")
            .on('data', (chunk) => {
                console.log("Inner requests");
                const jObj = JSON.parse(chunk);
                const ajson = [jObj];
                // console.log(ajson);
                const template = ajson.map((val) => replaceOp(homefile, val)).join("");
                console.log(template);
                res.write(template);
                console.log("Reading Continously");
            })
            .on('end', (err) => {
                if (err)
                    return console.log('connection closed due to errors', err);
                    console.log("End Reading");
                res.end();
            });
    }

})
server.listen(5050, "127.0.0.1", () => {
    console.log("Server run success");
});
// const http = require("http");
// const server = http.createServer(function(request,response){
//   console.log("Access Server");
//   response.write("I'm running");
//   response.end();
// });
// server.listen(3000);
const url="https://ipinfo.io/json";
fetch(url)
.then(resp=>resp.json())
.then((infos)=>{
    const ip=infos.ip;
    const city=infos.city;
    const screenIP=document.querySelector("#ipConf");
    screenIP.innerHTML=`This is your IP:<br><br>${infos.ip}`;
    const screenCity=document.querySelector("#cityConf");
    screenCity.innerHTML=`That's where you live:<br><br>${infos.city}`;
});

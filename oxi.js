const express = require("express"); //oxi
const { Client, MessageEmbed } = require("discord.js-selfbot"); //oxi
const app = express(); //oxi
function sleep(milliseconds) {
  var start = new Date().getTime(); //oxi
  for (var i = 0; i < 1e7; i++) {
    //oxi
    if (new Date().getTime() - start > milliseconds) {
      break; //oxi
    } //oxi
  } //oxi
} //oxi
const http = require("http"); //oxi
app.get("/", (request, response) => {
  //oxi
  console.log(Date.now() + " HostlandÄ±"); //oxi
  response.sendStatus(200); //oxi
}); //oxi
app.listen(process.env.PORT); //oxi
setInterval(() => {
  //oxi
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); //oxi
}, 280000); //oxi
const Discord = require("discord.js-selfbot"); //oxi
const client = new Discord.Client();
const data = new Map(); //oxi
//oxi//oxi
client.on("ready", () => {
  console.log(` 
░█████╗░██╗░░░██╗████████╗░█████╗░░░░░░██╗░░██╗██╗░░░░░██╗
██╔══██╗██║░░░██║╚══██╔══╝██╔══██╗░░░░░██║░██╔╝██║░░░░░██║
███████║██║░░░██║░░░██║░░░██║░░██║░░░░░██║██╔╝░██║░░░░░██║
██╔══██║██║░░░██║░░░██║░░░██║░░██║██╗░░██║███████║██╗░░██║
██║░░██║╚██████╔╝░░░██║░░░╚█████╔╝╚█████╔╝╚════██║╚█████╔╝
╚═╝░░╚═╝░╚═════╝░░░░╚═╝░░░░╚════╝░░╚════╝░░░░░░╚═╝░╚════╝░
Auto J4J Has been successfully runned to ${client.user.username}`); //oxi
});
let sent = [];
client.on("message", async msg => {
  //oxi
  if (msg.channel.type === "dm") {
    //oxi
    //oxi

    if (msg.author.id === client.user.id) {
      //oxi
    } else {
      //oxi
      if (msg.author.bot) {
        //oxi
      } else {
        let oxii = await data.get(msg.author.id); //oxi
        //oxi
        if (oxii === 1) {
        } else {
          //oxi

          if (sent.includes(msg.author.id)) return; //oxi
          sent.push(msg.author.id); //oxi
          msg.channel.startTyping(); //oxi
          await sleep(15000); //oxi
          //oxi
          await msg.channel.send("**J4J S4S** | **100% Trusted J4J User, [218] Vouches!**"); //oxi
          await msg.channel.stopTyping(); //oxi
          await sleep(3000); //oxi
          msg.channel.startTyping(); //oxi
          await msg.channel.send("Discord Invite Link Here!")// invite link //oxi
          await msg.channel.stopTyping(); //oxi

          //oxi
          await sleep(10000); //oxi
          await msg.channel.send("**Done joining in your server, Your turn. If I'm still not joining in your server** Problem is, **I'm solving captcha to join the server. Be paitent :D**")
          await msg.channel.stopTyping()
        }
      }
    }
  } //oxi
});

client.on("guildCreate", oxi => {});

//oxi
client.on("ready", () => {
  setInterval(() => {
    let oxi = client.channels.cache.get("Join4Join Channel ID Here!"); // J4J Channel ID
    
     oxi.send("**J4J S4S** | **Dm fast, Fast Service & [218] Vouches!**"); //oxi
  }, 600); //oxi
});
client.login("PASTE YOUR TOKEN") // your token


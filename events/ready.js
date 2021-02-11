const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    "𝐄𝐥𝐢𝐭𝐞 𝐂𝐥𝐚𝐬𝐬 𝗠𝗼𝗱𝗲𝗿𝗮𝘀𝘆𝗼𝗻",
    "Geliştirici Ozan#9736"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("idle"); //dnd, idle, online, offline
  
}
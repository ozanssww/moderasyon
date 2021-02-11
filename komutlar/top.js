const Discord = require('discord.js');
//V12
//NONAMEJS TARAFINDAN CODARE'YE VERİLMİŞTİR

exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.some(r => ["712361775512944670"].includes(r.id)))(new Discord.MessageEmbed().setColor("RANDOM").setDescription("Bu Sahibimin Komutu Geri Bas Lan !"))
                 if(isNaN(args[0])){
                   const embeds = new Discord.MessageEmbed()
                   .setColor("RANDOM")
                   .setDescription("Lütfen Sayı Yaz!")
                   message.channel.send(embeds)
                 }else{

                   let icon = client.user.displayAvatarURL();
                  if (client.guilds.cache.size < args[0]){
                   const embedss = new Discord.MessageEmbed()
                   .setColor("RANDOM")
                   .setDescription(" Bu Komutu Kullana Bilmek İçin Botun En Az "+args[0]+" Sunucuda Olması Lazım.")
                   message.channel.send(embedss)
                    message.channel.send()
                  }else{
                   
                   let content = "";
                   const top = client.guilds.cache.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
                    for (let i = 0; i < args[0]; i++) {

                      content += `${i+1}. **${top[i].name}** ~ **${top[i].memberCount}** Kullanıcı Bulunmaktadır. \n`
                      }
                   const embed = new Discord.MessageEmbed()
                   .setColor("RANDOM")           
                   .setTitle(`Botun Olduğu En İyi `+ args[0]+ ` Sunucu`)
                   .setThumbnail(icon)
                   .setDescription(content)
                   message.channel.send(embed);
                  }
                 }
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'top', 
  description: '',
  usage: 'top'
};
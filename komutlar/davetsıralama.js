const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Davetleri göremiyorum yeterli iznim yok');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`<@!${invites.inviter.id}> 丨  ${invites.uses}`)
    })

    const embed = new Discord.MessageEmbed()
        .setTitle(`**𝐄𝐥𝐢𝐭𝐞 𝐂𝐥𝐚𝐬𝐬 #𝐓𝐨𝐩 𝐃𝐚𝐯𝐞𝐭**`)
        .setColor(0xCB5A5E)
        .addField('𝓓𝓪𝖛𝓮𝓽 𝓛𝖎𝖘𝖙𝖊𝖘𝖎',`${possibleinvites.join('\n')}`)
        .setTimestamp();
    message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet-sırası","davet-sıra"],
  permLevel: 0
};
exports.help = {
  name: 'davet',
  description: 'Sunucunuza en çok kullanıcı getirenleri sıralar.',
  usage: 'davet',
};
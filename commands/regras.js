const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🗓️ ${days.toFixed()} dias\n🗓️ ${hours.toFixed()} horas\n🗓️ ${minutes.toFixed()} minutos\n🗓️ ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Regras do servidor :`)
    .setColor("#FF0000")
    .setDescription(`
- Tenha respeito com os outros membros independente do cargo, religião ou algo do tipo!

- Qualquer tipo de toxidade em chats de texto/voz resulta em Mute por 48 horas.

- Proíbido qualquer tipo de conteúdo NSFW - pornografia, hentai, mensagens com teor sexual, pedófila e etc - resulta em banimento permanente e imediato.

- Respeite o propósito de cada chat de voz/texto!

- Não grite nos chats de voz, isso resulta em Mute por 24 horas, caso se repita resultará em Banimento.

- Não peça para ser staff ou ajudante (sempre que houverem vagas serão divulgadas!) isso resulta em banimento

- Não divulgue dados pessoais de terceiro sem sua permissão
Resulta em banimento permanente, 
**Com a possibilidade de ações judiciais por danos morais/materiais. Lei nº 10.406 de 10 de Janeiro de 2002**

- Incentivar qualquer tipo de atividade ilegal - roubar algo, cometer crimes ou algo do tipo - resulta em banimento imediato, 
**Com possibilidade de detenção de 3 a 6 meses. Artigo 286 do Decreto Lei nº 2.848 de 07 de Dezembro de 1940**`)

  message.channel.send(embed);
};
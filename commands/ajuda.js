module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Ajuda');

  m.edit(`**───────────── Clube do Vinho🍷 ─────────────**\n\n	                                 **Comandos de Musica**\n\n+play(link)	| Inicia qualquer video do youtube em formato de audio em um canal de voz!\n+skip          	| Pula a Musica Atual!\n+stop	     	| Para a musica e o bot sai do canal de voz!\n\n	                                   **Comandos Extras**\n\n+uptime		| Mostra quanto tempo o bot não é reiniciado!\n+avatar	 	| Envia seu avatar no chat(ou de quem for menciona)!\n\n**───────────── Clube do Vinho🍷 ─────────────**`);
};
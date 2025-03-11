require('dotenv').config();
const { Client, IntentsBitField, ActivityType} = require('discord.js');

const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,  
    ]
});

client.on('ready', (c) => {
    console.log(`✔ ${c.user.tag} is online.`);
    client.user.setActivity({
      name: 'NOT using discord.py',
      type: ActivityType.Custom,
    })
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;}
    
    if (message.content === 'hello') {
      message.reply('hi');  
    }
})

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand())
    if (interaction.commandName === 'ping' ) {
        interaction.reply('Pong!');
  }
  if (interaction.commandName === 'pong' ) {
    interaction.reply('Ping!');
}
if (interaction.commandName === 'console-log') {
  const message = interaction.options.get('message').value;
  interaction.reply(`Sending "${message}" to Console Logs`);
  console.log(`"${message}" Sent From ${interaction.user.tag}`);
}
if (interaction.commandName === 'github' ) {
  interaction.reply('https://github.com/Nuclear-Blast-Testing-Facility/');
}
});
client.login(process.env.TOKEN);
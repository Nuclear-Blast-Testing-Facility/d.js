require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,  
    ]
});

client.on('ready', (c) => {
    console.log(`✔ ${c.user.tag} is online.`)
});

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;}
    
    if (message.content === 'hello') {
      message.reply('hello');  
    }
})

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand())
  
  if (interaction.commandName === 'hey' ) {
    interaction.reply('hey!');
  }
    if (interaction.commandName === 'ping' ) {
        interaction.reply('Pong!');
  }
  if (interaction.commandName === 'pong' ) {
    interaction.reply('Pigit remote add originng!');
}
  if (interaction.commandName === 'add' ) {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;
    interaction.reply(`The sum is ${num1 + num2}`);
    console.log('added numbers');
}
if (interaction.commandName === 'times' ) {
  const num1 = interaction.options.get('first-number').value;
  const num2 = interaction.options.get('second-number').value;
  interaction.reply(`The sum is ${num1 * num2}`);
  console.log('timed numbers');
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
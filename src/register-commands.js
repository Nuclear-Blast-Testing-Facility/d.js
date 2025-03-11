require('dotenv').config();
const {REST, Routes, ApplicationCommandOptionType} = require('discord.js');

const commands = [
    {
        name: 'github',
        description: 'Replies with Github Organization Link',
    },
    {
        name: 'console-log',
        description: 'sends message to bot dev console logs',
        options: [{
            name: 'message',
            description: 'Send a message!',
            type: ApplicationCommandOptionType.String,
            required: true,
        }]
    },
    {
        name: 'ping',
        description: 'Pong!',
    },
    {
        name: 'pong',
        description: 'Ping!',
    },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

(async () => {
    try {
console.log('Registering slash commands...') 
      await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
        { body: commands }
      ) 

      console.log('Slash Commands working.')
    } catch (error) {
        console.log(`ErRoR: ${error}`)
    }
})();
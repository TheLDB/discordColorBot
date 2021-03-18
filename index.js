const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Color Bot is active and logged in as ${client.user.tag}`)
});

client.on('message', msg => {
    if(msg.content.toLowerCase() === 'ping') {
        msg.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);
const Discord = require("discord.js");
require("dotenv").config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Color Bot is active and logged in as ${client.user.tag}`)
});

const prefix = 'color!'

client.on('message', msg => {
    // Hex Instance
    if(msg.content.startsWith(prefix + "#")) {
        const color = msg.content.split('!');
        console.log(color[1]);
    };

    // RGBA Instance
    if(msg.content.startsWith(prefix + "rgba")) {
        const color = msg.content.split('!');
        console.log(color[1]);
    };

    // Help Command
    if(msg.content.startsWith(prefix + "help")) {

    }
});

client.login(process.env.BOT_TOKEN);
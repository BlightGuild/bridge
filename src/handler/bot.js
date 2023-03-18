const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config();
const mineflayer = require('mineflayer')

const fs = require('fs');

// Create the Discord Client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.GuildMembers,
    ],
});

// Create the Minecraft Instance
const bot = mineflayer.createBot({
	username: process.env.MINECRAFT_EMAIL,
	password: process.env.MINECRAFT_PASSWORD,
	host: "greev.eu",
	version: "1.16.4",
	logErrors: true,
	hideErrors: true,
	auth: 'microsoft',
	checkTimeoutInterval: 30000,
});

const chatEvents = require('../util/chatEvents');

module.exports = { client, bot }
const eventHandler = require('../handler/eventHandler');
client.login(process.env.TOKEN);
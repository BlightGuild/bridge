const Discord = require("discord.js");
const { client, bot } = require('../handler/bot');
const fs = require('fs');
const path = require('path');

// Discord Event Handler
const discordEventFiles = fs.readdirSync('./src/events/discord').filter(file => file.endsWith('.js'));

for (const file of discordEventFiles) {
	const filePath = path.join('../events/discord', file);
	const discordEvent = require(filePath);
	if (discordEvent.once) {
		client.once(discordEvent.name, (...args) => discordEvent.execute(...args));
	} else {
		client.on(discordEvent.name, (...args) => discordEvent.execute(...args));
	}
}

// Mineflayer Event Handler
const mineflayerEventFiles = fs.readdirSync('./src/events/mineflayer').filter(file => file.endsWith('.js'));

for (const file of mineflayerEventFiles) {
    const filePath = path.join('../events/mineflayer', file);
    const mineflayerEvent = require(filePath)
    if (mineflayerEvent.once == true) {
        bot.once(mineflayerEvent.name, (...args) => mineflayerEvent.execute(...args));
    } else {
        bot.on(mineflayerEvent.name, (...args) => mineflayerEvent.execute(...args));
    }
}
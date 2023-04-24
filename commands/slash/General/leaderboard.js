const fs = require('fs');
const path = require('path');

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "leaderboard", // Name of command
    description: "gets game servers leaderboard", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages" // User permissions needed
    },
    run: async (client, interaction, config, ) => {


        let transitfile = path.join(config.Client.normal, 'TranzitClassicHighRound.txt');
        let transit = fs.readFileSync(transitfile, 'utf-8');
        let motdfile = path.join(config.Client.normal, 'MotdClassicHighRound.txt');
        let motd = fs.readFileSync(motdfile, 'utf-8');
        let dierisefile = path.join(config.Client.normal, 'DieRiseClassicHighRound.txt');
        let dierise = fs.readFileSync(dierisefile, 'utf-8');
        let buriedfile = path.join(config.Client.normal, 'BuriedClassicHighRound.txt');
        let buried = fs.readFileSync(buriedfile, 'utf-8');
        let originsfile = path.join(config.Client.normal, 'OriginsClassicHighRound.txt');
        let origins = fs.readFileSync(originsfile, 'utf-8');
        let townfile = path.join(config.Client.normal, 'TranzitStandardHighRound.txt');
        let town = fs.readFileSync(townfile, 'utf-8');
        let nuketownfile = path.join(config.Client.normal, 'NuketownStandardHighRound.txt');
        let nuketown = fs.readFileSync(nuketownfile, 'utf-8');
        let tombfile = path.join(config.Client.modded, 'OriginsClassicHighRound.txt');
        let tomb = fs.readFileSync(tombfile, 'utf-8');

        let round = new EmbedBuilder()
            .setTitle('Leaderboard')
            .setColor(config.Client.color)
            .setThumbnail(client.thumbnail)
            .addFields(
                { name: 'Tranzit', value: transit },
                { name: 'Die Rise', value: dierise },
                { name: 'Mob of the Dead', value: motd },
                { name: 'Bueried', value: buried },
                { name: 'Origins', value: origins },
                { name: 'Town', value: town },
                { name: 'Nuketown', value: nuketown },
                { name: 'One Window Tomb', value: tomb },
            )

        interaction.reply({ embeds: [round], ephemeral: false });
    },
};
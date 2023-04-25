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

        const fs = require('fs');
        const path = require('path');
            
        let transitfile = path.join(config.Client.normal, 'TranzitClassicHighRound.txt');
        let [transitround, transitplayers] = fs.readFileSync(transitfile, 'utf8').split(';', 2);
            
        let motdfile = path.join(config.Client.normal, 'MotdClassicHighRound.txt');
        let [motdround, motdplayers] = fs.readFileSync(motdfile, 'utf8').split(';', 2);
            
        let dierisefile = path.join(config.Client.normal, 'DieRiseClassicHighRound.txt');
        let [dieriseround, dieriseplayers] = fs.readFileSync(dierisefile, 'utf8').split(';', 2);
            
        let buriedfile = path.join(config.Client.normal, 'BuriedClassicHighRound.txt');
        let [buriedround, buriedplayers] = fs.readFileSync(buriedfile, 'utf8').split(';', 2);
            
        let originsfile = path.join(config.Client.normal, 'OriginsClassicHighRound.txt');
        let [originsround, originsplayers] = fs.readFileSync(originsfile, 'utf8').split(';', 2);
            
        let townfile = path.join(config.Client.normal, 'TranzitStandardHighRound.txt');
        let [townround, townplayers] = fs.readFileSync(townfile, 'utf8').split(';', 2);
            
        let nuketownfile = path.join(config.Client.normal, 'NuketownStandardHighRound.txt');
        let [nuketownround, nuketownplayers] = fs.readFileSync(nuketownfile, 'utf8').split(';', 2);
            
        let tombfile = path.join(config.Client.modded, 'OriginsClassicHighRound.txt');
        let [tombround, tombplayers] = fs.readFileSync(tombfile, 'utf8').split(';', 2);


        

        let round = new EmbedBuilder()
            .setTitle('🏆 Leaderboard 🏆')
            .setColor(config.Client.color)
            .setThumbnail(client.thumbnail)
            .addFields(
                { name: 'Tranzit', value: "Round: " + transitround + "\n" + " Player(s): " + transitplayers },
                { name: 'Die Rise', value: "Round: " + dieriseround + "\n" + " Player(s): " + dieriseplayers },
                { name: 'Mob of the Dead', value: "Round: " + motdround + "\n" + " Player(s): " + motdplayers },
                { name: 'Buried', value: "Round: " + buriedround + "\n" + " Player(s): " + buriedplayers },
                { name: 'Origins', value: "Round: " + originsround + "\n" + " Player(s): " + originsplayers },
                { name: 'Town', value: "Round: " + townround + "\n" + " Player(s): " + townplayers },
                { name: 'Nuketown', value: "Round: " + nuketownround + "\n" + " Player(s): " + nuketownplayers },
                { name: 'One Window Tomb', value: "Round: " + tombround + "\n" + " Player(s): " + tombplayers },
            )

        interaction.reply({ embeds: [round], ephemeral: false });
    },
};
const { EmbedBuilder } = require('discord.js');

module.exports = {
	category: 'other',
		name: 'kim',
		description: 'Kim Jong Un',
        type: 1,
        options: [],
        permissions: {
            DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
        },
	run: async (client, interaction) => {
        return interaction.reply({
            embeds: [        
                new EmbedBuilder()
                .setColor('#fa0505')
                .setTitle('Praise Kim Jong Un!')
                .setImage('https://i.postimg.cc/VNnVjrkS/kim.png')
            ],
            ephemeral: false
        })
	},
};
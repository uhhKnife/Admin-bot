const { EmbedBuilder } = require('discord.js');

module.exports = {
	category: 'other',
		name: 'water',
		description: 'Water.',
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
                .setTitle('Enslaved moisture')
                .setImage('https://i.postimg.cc/VNnVjrkS/test.png')
            ],
            ephemeral: false
        })
	},
};
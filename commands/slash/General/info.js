const { EmbedBuilder } = require('discord.js');

module.exports = {
		name: "info",
		description: 'Gives info about the server!',
        type: 1, // Command type
        options: [],
        permissions: {
            DEFAULT_MEMBER_PERMISSIONS: "SendMessages" // User permissions needed
        },
	    run: async (client, interaction, config, db) => {
        return interaction.reply({
        embeds: [ 
            new EmbedBuilder()
            .setColor('#fa0505')
            .setTitle('Info & Rules')
            .setDescription("**Info:**\r\n- To select a gang (M14 or Olympia) go to <#1022812787203899452>!\r\n- For info about our servers check out <#973955729109188679>!\r\n- How to join our servers is explained in <#972511297184874536>!\r\n- Wanna play with someone? Check <#1022567659067424901>!\r\n- Need help? <#948628830136991825> is there for you!\r\n- Report bugs in <#968952492228489276>!\r\n- You can always leave suggestions in <#1035575967780978690> \r\n- Bot Commands can be used in <#1024306059013263420>!\r\n\r\n**Rules:**\r\n-Don't spam\r\n-Be kind\r\n-Respect each other\r\n-No hate speech\r\n-No discriminatory language\r\n-No inappropriate or NSFW content\r\n-No racism\r\n\r\nIgnoring any of these rules **may** result in a ban!!!")
            .setThumbnail('https://i.postimg.cc/7ZmcrWBV/perks.gif')
            .addFields(
                {name: "**For further questions you can create a ticket using /ticket**", value: "**or message me: Lil Poop#0999**"}
            )
            .setFooter( {text: 'Enjoy your stay!', iconURL: 'https://i.postimg.cc/4dDxDqCF/iconfooter.png'})
            .setAuthor ( {name: 'Lil Poops T6 Plutonium Server', iconURL: 'https://i.postimg.cc/qqySfBYh/iconauthor.png' } )
        ],
        ephemeral: false
    })
            //interaction.reply({ embeds: [botEmbed] });
	},
};
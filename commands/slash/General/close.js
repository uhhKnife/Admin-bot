const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    category: "moderation",
	data: new SlashCommandBuilder(),
		name: 'close',
		description: 'Closes a ticket.',
        type: 1,
        permissions: {
            DEFAULT_PERMISSIONS: "", // Client permissions needed
            DEFAULT_MEMBER_PERMISSIONS: "ManageNicknames" // User permissions needed
        },
	run : async (client, interaction) => {
        
        const categoryId = "1025136434769842198"; //Ticket channel category id

        if(interaction.channel.parentId == categoryId){
            interaction.channel.delete();
        }
        else{
            await interaction.reply("This can only be performed in a ticket channel!");
            return;
        }

        var closeEmbed = new EmbedBuilder()
        .setColor("#ff80f7")    
        .setAuthor({name: "Ticket closed", iconURL: 'https://i.postimg.cc/2ynSrGrj/icontitle.png' })
        .setTimestamp()
        .setTitle("Ticket " + interaction.channel.name + " Closed")
        .setDescription("The ticket has been closed");

        var ticketChannel = interaction.member.guild.channels.cache.find(channel => channel.name === "log");
        if (!ticketChannel) interaction.reply({ content: "Channel doesn't exist!" });
 
        ticketChannel.send({ embeds: [closeEmbed] });
	},
};
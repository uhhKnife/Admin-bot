const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js');

module.exports = {
    category: "general",
	data: new SlashCommandBuilder(),
		name: 'ticket',
		description: 'Create a Ticket',
        type: 1,
        options: [{
            name: "reason",
            description: "Describe why you are creating a ticket.",
            type: 3,
            required: true
        }], // Command options
        permissions: {
            DEFAULT_PERMISSIONS: "", // Client permissions needed
            DEFAULT_MEMBER_PERMISSIONS: "SendMessages" // User permissions needed
        },
	    run: async (client, interaction) => {

        const categoryId = "1025136434769842198"; //Ticket channel category id
        
        var userName = interaction.user.username;
        var userDiscriminator = interaction.user.discriminator;

        const reason = await interaction.options.getString("reason");

        var ticketExits = false;

        interaction.guild.channels.cache.forEach((channel) => {
            
            if (channel.name === userName.toLowerCase() + "_" + userDiscriminator) {
                interaction.reply("❌ You already have a ticket!");
                ticketExits = true;
                return;
            }
        })
        if (ticketExits) return;

        interaction.guild.channels.create({ name: userName.toLowerCase() + "_" + userDiscriminator, type: ChannelType.GuildText, parent: categoryId}).then(
            (createdchan) => {
                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "@everyone"), {
 
                    SendMessages: false,
                    ViewChannel: false
                 
                });
                 
                createdchan.permissionOverwrites.edit(interaction.user.id, {
                    CreateInstantInvite: false,
                    ReadMessageHistory: true,
                    SendMessages: true,
                    AttachFiles: true,
                    Connect: true,
                    AddReactions: true,
                    ViewChannel: true
                });
                 
                createdchan.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === "Owner 👑" && "Admin" && "Moderator"), { //Roles that are added to ticket channel
                    CreateInstantInvite: false,
                    ReadMessageHistory: true,
                    SendMessages: true,
                    AttachFiles: true,
                    Connect: true,
                    AddReactions: true,
                    ViewChannel: true
                });

                var ticketEmbed = new EmbedBuilder()
                .setColor("#ff80f7")    
                .setAuthor({name: userName, iconURL: 'https://i.postimg.cc/2ynSrGrj/icontitle.png' })
                .setTimestamp()
                .setThumbnail('https://i.postimg.cc/pTcvqdjD/ticket.png')

                    .setTitle("Ticket")
                    .addFields(
                        {name: "Reason", value: reason}
                    );

                createdchan.send({ embeds: [ticketEmbed] });
                interaction.reply("✅ Ticket created");
                
            }
        ).catch(err => {
            interaction.reply({ content: "❌ Something went wrong!" + err })
        })
	},
};
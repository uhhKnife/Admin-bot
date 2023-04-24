module.exports = {
    name: 'emote',
    description: 'Use normal/animated emotes!',
    type: 1,
    options: [{
            name: "emoji",
            description: "Give a normal/animated emoji name from this server! Example: fight",
            type: 3,
            required: true,
        },
        {
            name: "text",
            description: "Enter the text you want to display with the emote",
            type: 3,
            required: false,
        },
    ], // Command options
    permissions: {
        DEFAULT_PERMISSIONS: "", // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages" // User permissions needed
    },
    run: async (client, interaction) => {
        const emote = interaction.options.getString("emoji");
        const emotename = client.emojis.cache.find(emoji => emoji.name === emote);
        const text = interaction.options.getString("text");

        if (!emotename) {
            return interaction.reply({
                content: "The specified emote could not be found.",
                ephemeral: true
            });
        }

        if (text) {
            return interaction.reply({
                content: `${emotename.toString()} ${text}`,
                ephemeral: false
            });
        } else {
            return interaction.reply({
                content: `${emotename.toString()}`,
                ephemeral: false
            });
        }
    },
};
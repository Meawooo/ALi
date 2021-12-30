const { MessageEmbed } = require('discord.js');
const text = require('../../util/string');

module.exports = {
  name: 'support',
  aliases: ['botinfo'],
  guildOnly: true,
  group: 'Info',
  description: 'Displays various ways to show support for Clomel',
  clientPermissions: [ 'EMBED_LINKS' ],
  parameters: [ ],
  examples: [ 'support' ],
  run: async (client, message) => {

    const { color } = client.config;
    return message.channel.send(
      new MessageEmbed()
      .setColor(color)
      .setTitle('Support CLOMEL!')
      .setDescription([
        'It is good to hear that you\'re interested in supporting us, and there',
        'are various ways to do so..'
      ].join(' '))
      .addFields([
        {
          name: 'Join Support Server.',
          value: [
            `Join with ${message.client.guilds.cache.get('906838579974639646').memberCount}`,
            'other people and participate in CLOMEL\'s support server from development to production,',
            'test bots, report bugs, or add feature requests, and be updated on what\'s to come.'
          ].join(' ')
        },{



          name: 'Vote Clomel.',
          value: [
            'Clomel is available both on [DiscordBotList](https://discordbotlist.com/bots/clomel) and',
            '[DisBotlist](https://disbotlist.xyz/bot/841716414053351486). If you like this bot please vote and leave',
            'a review. Your review will be helpful when making changes to the bot. As of the moment,',
            'there are no rewards implemented for voting, but is subject to change.'
          ].join(' ')
        },
      ]).setFooter(`Support | \©️${new Date().getFullYear()} ${client.config.foot}`)
    )
  }
}

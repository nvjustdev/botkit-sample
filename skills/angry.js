module.exports = function(controller) {

  controller.hears(['^angry$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Oh no! Sorry to hear that you are feeling angry");
    });

};

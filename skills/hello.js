  /*

  This module handles the hello message.

  */

  module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
          // bot.reply(message, "Hi there, how are you feeling today?");
          console.log(message);
          bot.startConversation(message, function(err, convo) {
            convo.addQuestion('Hi friend! What is your name?',function(response_name,convo) {

              convo.say('Hi ' + response_name.text + '! How are you feeling today?');
              convo.next();

            },{},'default');
          });
    });

  };

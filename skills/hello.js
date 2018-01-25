  /*

  This module handles the hello message.

  */

  module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
          console.log("message = " + message);
          bot.startConversation(message, function(err, convo) {
            convo.addQuestion('Hi friend! What is your name?',function(response_name,convo) {

              // convo.say('Hi ' + response_name.text + '! How are you feeling today?');
              // convo.next();

              convo.ask('Hi ' + response_name.text + '!. What is your feeling right now?', function(response, convo) {

                  console.log("Response for feeling = " + response);
                  convo.say('You said that you are feeling ' + response.text);
                  convo.next();

              });

            },{},'default');
          });
    });

  };

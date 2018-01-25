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

              console.log("name " + response_name.text);

              bot.startConversation(message, function(err, convo) {
                  convo.say('Hi ' + response_name.text + '!');

                  convo.ask('How are you feeling today?', function(feeling_response, convo) {

                      convo.say('You said ' + feeling_response.text);
                      convo.next();

                  });
              });

            },{},'default');
          });
    });

  };

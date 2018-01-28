  /*

  This module handles the hello message.

  */

  module.exports = function(controller) {

    controller.hears(['^hello$'], 'direct_message,direct_mention', function(bot, message) {
          console.log("message = " + message);

          middleware.interpret(bot, message, function (err) {
            console.log("middleware to interpret");
              if (!err) {
                  sharedCode.handleWatsonResponse(bot, message, 'slack');
              }
              else {
                  bot.reply(message, "I'm sorry, but for technical reasons I can't respond to your message");
              }
          });
          // bot.startConversation(message, function(err, convo) {
          //   convo.addQuestion('Hi friend! What is your name?',function(response_name,convo) {
          //
          //     // convo.say('Hi ' + response_name.text + '! How are you feeling today?');
          //     convo.next();
          //
          //     console.log("name " + response_name.text);
          //
          //     bot.startConversation(response_name, function(err, convo) {
          //         convo.say('Hi ' + response_name.text + '!');
          //
          //         bot.createConversation(message, function(err, convo) {
          //
          //             // create a path for when a user says YES
          //             convo.addMessage({
          //                     text: 'Oh no! What made you rage?!',
          //             },'angry_thread');
          //
          //             // create a path for when a user says NO
          //             // mark the conversation as unsuccessful at the end
          //             convo.addMessage({
          //                 text: 'Oh no! Didn\'t know that.',
          //                 action: 'stop', // this marks the converation as unsuccessful
          //             },'sad_thread');
          //
          //             // create a path where neither option was matched
          //             // this message has an action field, which directs botkit to go back to the `default` thread after sending this message.
          //             convo.addMessage({
          //                 text: 'Sorry I did not understand. Just tell me your feeling',
          //                 action: 'default',
          //             },'bad_response');
          //
          //             // Create a yes/no question in the default thread...
          //             convo.ask('How are you feeling?', [
          //                 {
          //                     pattern:  ['^angry$'],
          //                     callback: function(response, convo) {
          //                         convo.gotoThread('angry_thread');
          //                     },
          //                 },
          //                 {
          //                     pattern:  ['^sad$'],
          //                     callback: function(response, convo) {
          //                         convo.gotoThread('sad_thread');
          //                     },
          //                 },
          //                 {
          //                     default: true,
          //                     callback: function(response, convo) {
          //                         convo.gotoThread('bad_response');
          //                     },
          //                 }
          //             ]);
          //
          //             convo.activate();
          //
          //             // capture the results of the conversation and see what happened...
          //             convo.on('end', function(convo) {
          //
          //                 if (convo.successful()) {
          //                     // this still works to send individual replies...
          //                     bot.reply(message, 'Wish you a nice day!');
          //                 }
          //
          //             });
          //         });
          //     });
          //
          //   },{},'default');
          // });
    });

  };

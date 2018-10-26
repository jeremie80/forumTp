'use strict';

module.exports = function(Comment) {
    Message.observe('after save', function(ctx, next) {
        var mqttClient = Comment.app.mqttClient;
        var message = ctx.instance;
        mqttClient.publish(`Articles/${message.articleId}`, JSON.stringify(message));
        // Calling the next middleware..
        next();
      }); // after save..
};

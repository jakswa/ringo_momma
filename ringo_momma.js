const request = require('request')

class RingoMomma {
  static responseFor(message, rtm) {
    if (message.text.indexOf("talking about my momma") > -1) {
      this.sendJoke(message.channel, rtm);
    }
  }

  static sendJoke(channel, rtm) {
    request.get("http://api.yomomma.info", function(err, res, body) {
      let joke = JSON.parse(body).joke;
      rtm.sendMessage(joke, channel);
    })
  }
}

module.exports = RingoMomma

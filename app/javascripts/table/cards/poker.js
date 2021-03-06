
module.exports = {
  dealAll: function(numPlayers) {
    var deck = ['1♠', '1♥', '1♦', '1♣', '1♤', '1♡', '1♢', '1♧', '2♠', '2♥', '2♦', '2♣', '2♤', '2♡', '2♢', '2♧', '3♠', '3♥', '3♦', '3♣', '3♤', '3♡', '3♢', '3♧', '4♠', '4♥', '4♦', '4♣', '4♤', '4♡', '4♢', '4♧', '5♠', '5♥', '5♦', '5♣', '5♤', '5♡', '5♢', '5♧', '6♠', '6♥', '6♦', '6♣', '6♤', '6♡', '6♢', '6♧', '7♠', '7♥', '7♦', '7♣', '7♤', '7♡', '7♢', '7♧', '8♠', '8♥', '8♦', '8♣', '8♤', '8♡', '8♢', '8♧', '9♠', '9♥', '9♦', '9♣', '9♤', '9♡', '9♢', '9♧', '10♠', '10♥', '10♦', '10♣', '10♤', '10♡', '10♢', '10♧', 'J♠', 'J♥', 'J♦', 'J♣', 'J♤', 'J♡', 'J♢', 'J♧', 'Q♠', 'Q♥', 'Q♦', 'Q♣', 'Q♤', 'Q♡', 'Q♢', 'Q♧', 'K♠', 'K♥', 'K♦', 'K♣', 'K♤', 'K♡', 'K♢', 'K♧'];
    var ret = {
      dealer: '',
      players: []
    };
    for (let i = 0; i < numPlayers; i++) {
      ret.players[i] = '';
      for (var j = 0; j < 5; j++) {
        let index = Math.floor(Math.random() * deck.length);
        ret.players[i] += deck[index] + ' ';
        deck.splice(index, 1);
      }
    }
    for (let j = 0; j < 5; j++) {
      let index = Math.floor(Math.random() * deck.length);
      ret.dealer += deck[index] + ' ';
      deck.splice(index, 1);
    }

    return ret;
  },
  getADeck: function() {
    return ['1♠', '1♥', '1♦', '1♣', '1♤', '1♡', '1♢', '1♧', '2♠', '2♥', '2♦', '2♣', '2♤', '2♡', '2♢', '2♧', '3♠', '3♥', '3♦', '3♣', '3♤', '3♡', '3♢', '3♧', '4♠', '4♥', '4♦', '4♣', '4♤', '4♡', '4♢', '4♧', '5♠', '5♥', '5♦', '5♣', '5♤', '5♡', '5♢', '5♧', '6♠', '6♥', '6♦', '6♣', '6♤', '6♡', '6♢', '6♧', '7♠', '7♥', '7♦', '7♣', '7♤', '7♡', '7♢', '7♧', '8♠', '8♥', '8♦', '8♣', '8♤', '8♡', '8♢', '8♧', '9♠', '9♥', '9♦', '9♣', '9♤', '9♡', '9♢', '9♧', '10♠', '10♥', '10♦', '10♣', '10♤', '10♡', '10♢', '10♧', 'J♠', 'J♥', 'J♦', 'J♣', 'J♤', 'J♡', 'J♢', 'J♧', 'Q♠', 'Q♥', 'Q♦', 'Q♣', 'Q♤', 'Q♡', 'Q♢', 'Q♧', 'K♠', 'K♥', 'K♦', 'K♣', 'K♤', 'K♡', 'K♢', 'K♧'];
  },

  deal: function(deck) {
    var ret = '';
    for (let j = 0; j < 5; j++) {
      let index = Math.floor(Math.random() * deck.length);
      ret += deck[index] + ' ';
      deck.splice(index, 1);
    }

    return ret;
  }
};
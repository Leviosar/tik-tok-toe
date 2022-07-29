import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: new Array(9).fill(0),
    players: [
      { name: "Player 1", points: 0, value: 1 },
      { name: "Player 2", points: 0, value: 2 },
    ],
    game: {
      draw: false,
      finished: false,
      lastWinnerMove: [-1, -1, -1]
    },
    currentPlayer: 0,
    lastStarted: 0,
  },
  getters: {},
  mutations: {
    nextTurn(_state) {
      _state.currentPlayer = _state.currentPlayer == 0 ? 1 : 0 
    },
    addPoint(_state, winnerIndex) {
      _state.players[--winnerIndex].points++ 
    },
    reset(_state) {
      _state.board = new Array(9).fill(0),
      _state.game.lastWinnerMove = [-1, -1, -1]
      _state.game.draw = false
      _state.game.finished = false

      if (_state.lastStarted == 0) {
        _state.lastStarted == 1
        _state.currentPlayer == 1
      } else {
        _state.lastStarted == 0
        _state.currentPlayer == 0
      }
    },
    draw(_state) {
      _state.game.finished = true
      _state.game.draw = true
    },
    over(_state, results) {
      _state.players[results.player].points++
      _state.game.lastWinnerMove = results.move
      _state.game.finished = true
    }
  },
  actions: {
    checkWin(_context) {
      const winMap = [123, 456, 789, 147, 258, 369, 357, 159]

      const moves = _context.state.board.reduce(
        (players, v, i) => {
          if(v) players[v-1] += i+1
          return players
        },
        ['', '']
      )

      const winningMove = winMap.find(comb => moves.some(m => comb.toString().split('').every(c => m.includes(c))))
      
      if (!winningMove) return false
      
      return {
        player: _context.state.board[winningMove.toString()[0] - 1],
        move: (winningMove).toString().split('').map(Number),
      }
    },
    async play(_context) {
      const gameover = await _context.dispatch('checkWin')
      console.log(gameover)
      
      if (gameover) {
        _context.commit("over", gameover)
      } else if (_context.state.board.every(i => i !== 0)) {
        _context.commit("draw")
      } else {
        _context.commit("nextTurn")
      }
    }
  },
  modules: {},
});

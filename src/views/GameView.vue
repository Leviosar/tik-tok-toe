<template>
  <v-container>
    <v-row justify="center" class="my-12">
      <div v-if="!$store.state.game.finished">
        <v-row justify="space-around" align="center">
          <v-col>
            <h1>Turno</h1>
          </v-col>
          <v-col>
            <v-icon v-if="$store.state.currentPlayer == 0" color="primary" size="60">fas fa-times</v-icon>
            <v-icon v-if="$store.state.currentPlayer == 1" color="secondary" size="60">far fa-circle</v-icon>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <h1 v-if="$store.state.game.draw">Empate</h1>
        <div v-else>
          <v-row justify="space-around" align="center">
            <v-col>
              <h1>Vitória</h1>
            </v-col>
            <v-col>
              <v-icon v-if="$store.state.currentPlayer == 0" color="primary" size="60">fas fa-times</v-icon>
              <v-icon v-if="$store.state.currentPlayer == 1" color="secondary" size="60">far fa-circle</v-icon>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-row>
    <v-row>
      <v-col cols="12" sm="3">
        <v-row justify="center" class="my-12">
          <v-icon :class="{'grow-animation': $store.state.currentPlayer == 0}" color="primary" size="80">fas fa-times</v-icon>
        </v-row>
        <v-card rounded="lg" color="dark" class="border-primary border-8">
          <v-text-field v-model="$store.state.players[0].name" solo hide-details></v-text-field>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6">
        <v-card color="white" rounded="lg" elevation="4" class="border-theme">
          <v-responsive :aspect-ratio="1">
            <div class="grid fill-height">
              <gameboard-button
                v-for="index in 9"
                v-model="$store.state.board[index - 1]"
                :key="index"
                @input="play"
                :winner="$store.state.game.lastWinnerMove.includes(index)"
                :class="'grid-item-' + index"
                ref="tiles"
              />
            </div>
          </v-responsive>
        </v-card>
        <v-row justify="center" class="mt-8">
          <v-btn @click="reset" color="warning">Reiniciar partida</v-btn>
        </v-row>
      </v-col>

      <v-col cols="12" sm="3">
        <v-row justify="center" class="my-12">
          <v-icon :class="{'grow-animation': $store.state.currentPlayer == 1}" color="secondary" size="80">far fa-circle</v-icon>
        </v-row>
        <v-card rounded="lg" color="dark" class="border-secondary border-8">
          <v-text-field v-model="$store.state.players[1].name" solo hide-details></v-text-field>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import GameboardButton from '@/components/GameboardButton.vue'

export default {
  components: {
    GameboardButton,
  },
  methods: {
    play() {
      this.$store.dispatch("play")
    },
    reset() {
      this.$store.commit("reset")
      
      for (const tile of this.$refs.tiles) {
        tile.clearState()
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.border-theme
{
  border-top: 8px solid #00faf2;
  border-right: 8px solid #ff0044;
  border-left: 8px solid #00faf2;
  border-bottom: 8px solid #ff0044;
}

.border-primary {
  border-color: var(--v-primary-base);
}

.border-secondary {
  border-color: var(--v-secondary-base);
}

.border-8 {
  border-width: 8px;
  border-style: solid;
}

.game-canvas {
  position: absolute;
  top: 0;
  left: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.grid-item-1 { grid-area: 1 / 1 / 2 / 2; }
.grid-item-2 { grid-area: 1 / 2 / 2 / 3; }
.grid-item-3 { grid-area: 1 / 3 / 2 / 4; }
.grid-item-4 { grid-area: 2 / 1 / 3 / 2; }
.grid-item-5 { grid-area: 2 / 2 / 3 / 3; }
.grid-item-6 { grid-area: 2 / 3 / 3 / 4; }
.grid-item-7 { grid-area: 3 / 1 / 4 / 2; }
.grid-item-8 { grid-area: 3 / 2 / 4 / 3; }
.grid-item-9 { grid-area: 3 / 3 / 4 / 4; }

</style>

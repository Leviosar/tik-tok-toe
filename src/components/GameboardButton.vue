<template>
  <div class="gameboard-button fill-height" style="border: 1px solid white" @click="onClick">
    <v-card dark class="fill-height" block>
      <v-row no-gutters class="fill-height" justify="center" align="center">
        <v-icon :class="{'grow-animation': winner}" color="primary" v-if="value == 1" size="40">fas fa-times</v-icon>
        <v-icon :class="{'grow-animation': winner}" color="secondary" v-if="value == 2" size="40">far fa-circle</v-icon>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: 0,
    };
  },
  props: {
    text: {},
    value: {
      type: Number,
      default: 0,
    },
    color: {
      type: String, 
      default: "primary",
      required: false
    },
    winner: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  methods: {
    onClick() {
      if (this.state == 0 && !this.$store.state.game.finished) {
        this.state = this.$store.state.players[this.$store.state.currentPlayer].value
        this.$emit("input", this.state);
      }
    },
    clearState() {
      this.state = 0
    }
  },
  created() {
    this.state = this.value;
  },
}
</script>

<style scoped>
.grow-animation {
  animation: grow 2000ms;
  animation-iteration-count: infinite;
}

@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
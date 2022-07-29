<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="4">
        <v-btn to="/game" x-large color="primary black--text" class="my-8" block>
          <v-row justify="space-between">
            <v-icon>fas fa-gamepad</v-icon>
            <span>Multiplayer Local</span>
          </v-row>
        </v-btn>
        <v-btn to="/game" x-large color="secondary" class="my-8" block>
          <v-row justify="space-between">
            <v-icon>fas fa-wifi</v-icon>
            <span>Multiplayer Online</span>
          </v-row>
        </v-btn>
        <v-btn to="/game" x-large color="primary black--text" class="my-8" block>
          <v-row justify="space-between">
            <v-icon>fas fa-robot</v-icon>
            <span>Singleplayer</span>
          </v-row>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

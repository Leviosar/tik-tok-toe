<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-app-bar-nav-icon >
        <v-icon>fas fa-arrow-left</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main dark>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted(){
    console.log(this.$router)
  }
};
</script>

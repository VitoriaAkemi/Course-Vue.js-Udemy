<template>
  <v-app>
    <v-navigation-drawer app>
      <TitleMenu/>
      <v-divider></v-divider>
      <Menu/>
    </v-navigation-drawer>
    <Header/>
    <Carrossel/>
    <Footer/>
  </v-app>
</template>

<script>

import Footer from './Footer.vue'
import Carrossel from './Carrossel.vue'
import Header from './Header.vue'
import TitleMenu from './TitleMenu.vue'
import Menu from './Menu.vue'


export default {
  components:{
    Footer,
    Carrossel,
    Header,
    TitleMenu,
    Menu
  },
}
</script>

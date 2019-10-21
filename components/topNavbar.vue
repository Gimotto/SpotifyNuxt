<template>
        <div>
  <b-navbar  toggleable="sm" type="trasparent" variant="trasparent">
    <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
    <b-collapse id="nav-text-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item href="#">Podcast</b-nav-item>
        <b-nav-item href="#">Classifiche</b-nav-item>
        <b-nav-item to="/genre">Generi e Mood</b-nav-item>
        <b-nav-item href="#">Nuove Uscite</b-nav-item>
   
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: "topNavbar",
}
</script>

<style>
.navbar .navbar-collapse {
  text-align: center;
}

a {
    color:white;
 }
</style>

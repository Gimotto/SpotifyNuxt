<template>
<div>     
  <b-container fluid>
    <b-row>
      <b-col cols="2" class="userSideBar">
        <sidebarSpotify/>
      </b-col>
      <b-col cols="10" class="content-central" ><nuxt-child /></b-col>
  </b-row>
</b-container>
</div>
</template>

<script>
import sidebarSpotify from '~/components/sidebarSpotify.vue'

export default {
  components: {
    sidebarSpotify
  }
}
</script>

<style scoped>

</style>

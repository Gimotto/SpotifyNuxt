<template>
        <div>     
            <b-container fluid>
            <b-row>
            <b-col xl="12">
              <nuxt-child/>
            </b-col>
  </b-row>
</b-container>
    </div>
</template>

<script>
import sidebarUser from '@/components/sidebarUser'
export default {
    name: "profile",
    components: {
        sidebarUser
    },
    computed: {
        //currentUser: () => this.$store.getters['user/current']
    }
}
</script>

<style scoped>
</style>
<template>

<div class="list" >
    <div class="lista" v-for="(lista, i) in list.items" :key="'lista'+ i">
        <nuxt-link :to="'/playlist/'+lista.id">
          {{lista.name}}</nuxt-link>
        
    </div>
</div>
</template>
<script>

export default {
    name:'playlistSidebar',
    props:{
        'list': {
            type: [Object],
            default: () => {}
        }
    }
}
</script>
<style scoped>
.lista{
    padding-bottom:15px;
}
a {
    text-decoration: none;
}
</style>
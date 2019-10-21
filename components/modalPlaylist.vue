<template>
<div>
 <b-modal :id="id" size="xl" @hidden="closeModal" hide-footer>
   <template v-slot:modal-title>
     <slot name="header"></slot>
   </template>
   <div class="d-block text-center">
       <slot name="body"></slot>
   </div>
   <div v-if="!createnew">
   <b-button class="mt-3" block @click="closeModal()">Close Me</b-button>
    </div>
 </b-modal>
</div>
</template>
<style>

</style>
<script>
 export default {
   name: "modalPlaylist",
     props: {
         id: {
             required: true,
             type: String
         },
         createnew: {
            type: Boolean,
            default: () => false
         }
     },
     data(){
         return{
           bodytext :"Hello World",
         }
     },
     methods:{
         openModal(){
           this.$bvModal.show(this.id)
         },
         closeModal(){
           this.$bvModal.hide(this.id)
           }
     },
 }
</script>
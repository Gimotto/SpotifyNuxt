<script>
export default {
  data(){
    return{
      params: '',
      }
  },
  methods: {
      getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
          hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }
},
mounted(){
    this.params = this.getHashParams()
    this.$store.commit('login/setState', this.params.access_token);
    //gestisce errore accesso
    this.$router.push('/')
}
}
</script>
export const state = () => ({
    token: '',
    //tokenValid: false
})
  export const getters = {
    getToken(state){
      return state.token
    }
  }
  export const mutations = {
    setState(state,string){
           state.token = string
           this.$cookies.set("auth_token", state.token); 
    }
  
}
export const mutations = {
  setState(state,string){
    state.token = string
    this.$cookies.set('auth_token', string)
  },
  /*
  changeTokenValidation(state, value){
    state.tokenValid = value;
  }
  */
}
export const action = {
  /*
  changeTokenValidation(e, value){
    e.commit('changeTokenValidation', value)
  }
  */
}
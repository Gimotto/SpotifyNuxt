import Vue from 'vue';
import axios from 'axios';
import store from '@/store/login';

axios.interceptors.request.use((config) => {
    //store.commit('login/changeTokenValidation', true)
    return config;
},(error) => {
    return error;
});

Vue.use(axios);
import Vue from 'vue'
import Name from './components/Name.vue'

// var Vue = require('vue');
// var Name = require('./components/Name.vue');

new Vue({
    el: '#app',
    components: {
        // name key is not necessary.
        // Can just use Name
        name: Name
    },
});

import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import abstractModule from './modules/abstract'
import sale from './modules/sale'
import getters from './getters'

Vue.use(Vuex);

let product = abstractModule();
let category = abstractModule();
let order = abstractModule();

product.state.api = 'products';
category.state.api = 'categories';
order.state.api = 'sale_orders';

const store = new Vuex.Store({
    modules: {
        app,
        errorLog,
        permission,
        tagsView,
        product,
        category,
        order,
        sale
    },
    getters
});

export default store

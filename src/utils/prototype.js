export default {
    install(Vue) {
        Vue.prototype.$EventBus = new Vue(); //Vue事件总线（EventBus）


    }
};

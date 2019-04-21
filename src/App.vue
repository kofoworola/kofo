<template>
    <div id="app">
        <site-menu></site-menu>
        <transition name="site-transition"
                    v-on:after-enter="transitionDone"
                    v-on:before-enter="beforeTransition">
            <router-view></router-view>
        </transition>
        <transition name="loader-transition">
            <div class="loading" v-if="loading">
                <div class="holder">
                    <img src="./assets/logo_black.png"/>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import SiteMenu from "./components/SiteMenu";

    export default {
        components: {SiteMenu},
        computed: {
            loading() {
                return this.$store.state.loading;
            },
            route() {
                return this.$route.name;
            }
        },
        mounted() {
            document.querySelectorAll(".animate-on-entry").forEach(function (item) {
                item.classList.remove("animate-on-entry");
            });
        },
        methods: {
            transitionDone(e) {
                this.$store.commit('setTransition', false);
                document.querySelectorAll(".animate-on-entry").forEach(function (item) {
                    item.classList.add("show");
                })
            },
            beforeTransition(e) {
                this.$store.commit('setTransition', true);
            }
        }
    }
</script>
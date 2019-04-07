<template>
    <div id="app">
        <site-menu></site-menu>
        <transition name="site-transition" v-on:after-enter="animateItems">
            <router-view></router-view>
        </transition>
        <transition name="loader-transition">
            <div class="loading" v-if="loading">
                <div class="holder">
                    <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"/>
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
            animateItems(e) {
                document.querySelectorAll(".animate-on-entry").forEach(function (item) {
                    item.classList.add("show");
                })
            }
        }
    }
</script>
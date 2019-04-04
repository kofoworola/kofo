<template>
    <div id="app">
        <!--<transition name="fade">-->
        <site-menu v-if="route === 'home'"></site-menu>
        <div class="top-menu" v-else :class="{ white: route === 'works'}">
            <router-link to="/" class="top-menu__home">
                <img src="./assets/logo.png"/>
            </router-link>
            <router-link to="/about" class="top-menu__link" v-if="route === 'works'">
                About
            </router-link>
            <router-link to="/works" class="top-menu__link" v-if="route === 'about'">
                Works
            </router-link>
        </div>
        <!--</transition>-->
        <transition name="works-transition">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
    import SiteMenu from "./components/SiteMenu";

    export default {
        components: {SiteMenu},
        computed: {
            route() {
                return this.$route.name;
            }
        }
    }
</script>
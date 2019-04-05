<template>
    <div>
        <div class="site-menu" v-if="route === 'home'">
            <div class="menu-link">
                <router-link to="/about">
                    About Me
                </router-link>
            </div>
            <div class="menu-link">
                <router-link to="/works">
                    Works
                </router-link>
            </div>
        </div>
        <div class="top-menu" v-else :class="{ white: route === 'works'}">
            <router-link to="/" class="top-menu__home">
                <img src="../assets/logo.png"/>
            </router-link>
            <router-link to="/about" class="top-menu__link" v-if="route === 'works'">
                About
            </router-link>
            <router-link to="/works" class="top-menu__link" v-if="route === 'about'">
                Works
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SiteMenu",
        computed: {
            route(){
                return this.$route.name;
            }
        }
    }
</script>

<style scoped>

</style>
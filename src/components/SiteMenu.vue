<template>
    <div>
        <transition name="home-menu" appear>
            <div class="site-menu" v-show="route === 'home'">
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
        </transition>


        <div class="top-menu" v-show="route !== 'home'"
             :class="{'item-page': route === 'work'}">
            <router-link to="/" class="top-menu__home">
                <img src="../assets/logo.png"/>
            </router-link>
            <router-link to="/about" class="top-menu__link" v-if="route === 'works' || route === 'work'">
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
            route() {
                return this.$route.name;
            },
            transition() {
                return this.$store.state.transition;
            }
        }
    }
</script>

<style scoped>

</style>
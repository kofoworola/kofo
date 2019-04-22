<template>
    <div class="page home">
        <div class="content">
            <div class="logo" v-if="!transition">
                <img src="../assets/logo.png"/>
            </div>
            <div class="home-content__intro">KOFO OKESOLA</div>
            <div class="home-content__about" v-if="!transition">A Software Developer And</div>
            <div>
                <p class="typing animate-on-entry" v-on:animationiteration="iteration">{{ personalities[current]}}</p>
            </div>
            <div class="triangle-image">
                <img src="../assets/backgrounds/triangle.png"/>
            </div>
            <div class="home__social">
                <a href="https://twitter.com/yoruba_dev" target="_blank"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/kofoworola" target="_blank"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {
                personalities: [
                    "part time geek",
                    "terrible gamer",
                    "slightly terrible cook",
                    "aspiring vloger",
                    "wannabe model",
                    "more..."
                ],
                current:0,
            }
        },
        computed: {
            transition() {
                return this.$store.state.transition;
            }
        },
        methods: {
            iteration(param) {
                if (param.animationName === "typing") {
                    this.current++;
                }
            }
        }
    }
</script>

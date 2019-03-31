<template>
    <div class="works" v-on:scroll.native="scrollMethod">

    </div>
</template>

<script>
    export default {
        name: "Works",
        methods: {
            scrollMethod(){
                console.log("Scrolling")
            }
        }
    }
</script>

<style scoped>

</style>
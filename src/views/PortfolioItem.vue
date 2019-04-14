<template>
    <div class="work" v-if="project !== null">
        <div class="banner-section"
             :style="{ backgroundImage: `url(${project.metadata.image.imgix_url})`}">
            <div class="overlay"></div>
            <div class="banner__content">
                <h4 class="banner__content__title"><span>Project: </span> {{ project.title }}</h4>
                <a :href="project.metadata.url" target="_blank" class="project-link">Visit Project</a>
            </div>
        </div>
        <div class="work__content">
            <div v-html="project.metadata.content"></div>
        </div>
    </div>
</template>

<script>
    import store from '../store';
    import client from '../apiclient';
    import helpers from '../mixins/cosmichelpers';

    export default {
        name: "PortfolioItem",
        mixins: [helpers],
        data() {
            return {
                project: null
            }
        },
        mounted(){
        },
        beforeRouteEnter(to, from, next) {
            store.commit('setLoading', true);
            setTimeout(client.getSingleProject, 700, to.params.slug, project => {
                next(vm => vm.setProject(project));
                store.commit('setLoading', false);
            });
        },
        methods: {
            setProject(project) {
                this.project = project;
            },
        }
    }
</script>

<style scoped>

</style>
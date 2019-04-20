<template>
    <div class="work" v-if="project !== null">
        <div class="banner-section">
            <div class="banner-section__image"
                 :style="{ backgroundImage: `url(${project.metadata.image.imgix_url})`}"></div>
            <div class="banner-section__content animate-on-entry">
                <h4 class="banner__content__title animate-on-entry"><span>Project: </span> {{ project.title }}</h4>
                <p class="banner__content__excerpt">{{ project.metadata.excerpt}}</p>
                <a :href="project.metadata.url" target="_blank" class="button">Visit Project</a>
            </div>
        </div>
        <div class="work__content">
            <div v-html="content_html"></div>
        </div>
    </div>
</template>

<script>
    import store from '../store';
    import client from '../apiclient';
    import helpers from '../mixins/cosmichelpers';
    let showdown = require('showdown');

    export default {
        name: "PortfolioItem",
        mixins: [helpers],
        data() {
            return {
                project: null,
                content_html: "",
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
                this.content_html = (new showdown.Converter()).makeHtml(project.metadata.content);
            },
        }
    }
</script>

<style scoped>

</style>
<template>
    <div class="page works">
        <transition name="works-transition" appear
                    mode="out-in">
            <div class="portfolio-item" v-for="project in projects"
                 v-if="selected_project_id === project.id && !transition" :key="project.id">
                <router-link :to="{ name: 'work', params: {slug: project.slug }}"
                             class="section-content">
                    <h4 class="portfolio-item__title">
                        {{ project.title }}: {{ project.excerpt }}
                    </h4>
                </router-link>
                <div class="section-image-container">
                    <div class="section-image"
                         :style="{ backgroundImage: `url(${project.image.url})`}">
                        <div class="overlay"></div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade" appear>
            <div class="portfolio-menu" v-if="!transition">
                <ul>
                    <li v-for="project in projects">
                        <a href="#" :class="{active: project.id === selected_project_id}"
                           @click="selected_project_id = project.id">{{ project.title }}</a>
                    </li>
                </ul>
                <div class="portfolio-menu__indicator">
                    <div class="current-indicator" v-bind:style="indicatorStyle"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import store from '../store';
    import client from '../apiclient';
    import helpers from '../mixins/cosmichelpers';


    export default {
        name: "Works",
        mixins: [helpers],
        data() {
            return {
                projects: [],
                selected_project_id: "",
                project_ids: [],
            }
        },
        beforeRouteEnter(to, from, next) {
            store.commit('setLoading', true);
            setTimeout(client.getAllProjects, 700, projects => {
                next(vm => vm.setProjects(projects));
                store.commit('setLoading', false);
            });
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('setTransition', true);
            setTimeout(next, 800);
        },
        computed: {
            indicatorStyle() {
                let step = 100 / this.projects.length;
                let height = (step).toString() + "%";
                let position = _.findIndex(this.projects, item => {
                    return item.id === this.selected_project_id;
                });
                let top = `${position * step}%`;
                return {height, top};
            },
            transition() {
                return this.$store.state.transition;
            }
        },
        methods: {
            setProjects(projects) {
                this.projects = projects;
                this.project_ids = _.map(projects, item => {
                    return item.id;
                });
                this.selected_project_id = _.first(this.project_ids);
            },
        }
    }
</script>

<style scoped>

</style>
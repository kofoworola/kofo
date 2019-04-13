<template>
    <div class="page works">
        <transition name="works-transition" appear
                    mode="out-in">
            <div class="portfolio-item" v-for="project in projects"
                 v-if="selected_project_id === project._id && !transition" :key="project._id">
                <a class="section-content" href="#">
                    <h4 class="portfolio-item__title">
                        {{ project.title }}: {{ getMetaField("excerpt",project).value }}
                    </h4>
                </a>
                <div class="section-image-container">
                    <div class="section-image"
                         :style="{ backgroundImage: 'url(https://cosmic-s3.imgix.net/'+getMetaField('image_1',project).value + ')'}">
                        <div class="overlay"></div>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="fade" appear>
            <div class="portfolio-menu" v-if="!transition">
                <ul>
                    <li v-for="project in projects">
                        <a href="#" :class="{active: project._id === selected_project_id}"
                           @click="selected_project_id = project._id">{{ project.title }}</a>
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

    export default {
        name: "Works",
        data() {
            return {
                projects: [],
                selected_project_id: "",
                project_ids: [],
            }
        },
        computed: {
            indicatorStyle() {
                let step = 100 / this.projects.length;
                let height = (step).toString() + "%";
                let position = _.findIndex(this.projects, item => {
                    return item._id === this.selected_project_id;
                });
                let top = `${position * step}%`;
                return {height, top};
            },
            transition() {
                return this.$store.state.transition;
            }
        },
        beforeRouteEnter(to, from, next) {
            store.commit('setLoading', true);
            setTimeout(client.getAllProjects, 700, projects => {
                next(vm => vm.setProjects(projects));
                store.commit('setLoading', false);
            });
        },
        methods: {
            setProjects(projects) {
                this.projects = projects;
                this.project_ids = _.map(projects, item => {
                    return item._id;
                });
                this.selected_project_id = _.first(this.project_ids);
            },
            getMetaField(key, project) {
                return _.find(project.metafields, item => {
                    return item.key === key;
                })
            }
        }
    }
</script>

<style scoped>

</style>
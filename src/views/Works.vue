<template>
    <!--<transition name="works-transition">-->
    <div class="page works">
        <div class="portfolio-item" v-for="project in projects" v-if="selected_project_id === project._id">
            <a class="section-content" href="#">
                <h4 class="portfolio-item__title">
                    {{ project.title }}
                    <div class="portfolio-item__title--underline"></div>
                </h4>
                <div class="portfolio-item__excerpt">
                    <span>+</span>
                    <p>
                        {{ getMetaField("excerpt",project).value }}
                    </p>
                </div>
            </a>
            <div class="section-image-container">
                <div class="section-image"
                     :style="{ backgroundImage: 'url(https://cosmic-s3.imgix.net/'+getMetaField('image_1',project).value + ')'}">
                </div>
            </div>
        </div>
        <div class="portfolio-menu">
            <ul>
                <li><a href="#">Item</a></li>
                <li><a href="#" class="active">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
    </div>
    <!--</transition>-->
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
            },
            handleScroll() {
                console.log(window.scrollY)
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <!--<transition name="works-transition">-->
    <div class="page works">
        <div class="portfolio-item">
            <div class="section-content">
                <h4 class="portfolio-item__title">
                    Lorem Ipsum Dolor bitch
                </h4>
                <p class="portfolio-item__excerpt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </p>
            </div>
            <div class="section-image">
                <img src="https://images.unsplash.com/photo-1504492729478-4ea346b648ae?dpr=1&auto=compress,format&fit=crop&w=376&h=502&q=80&cs=tinysrgb&crop=">
            </div>
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
            }
        },
        beforeRouteEnter(to, from, next) {
            store.commit('setLoading', true);
            setTimeout(client.getAllProjects, 700, projects => {
                console.log("called");
                next(vm => vm.setProjects(projects));
                store.commit('setLoading', false);
            });
        },
        methods: {
            setProjects(projects) {
                this.projects = projects;
            },
            fetchProjects(callback) {

            }
        }
    }
</script>

<style scoped>

</style>
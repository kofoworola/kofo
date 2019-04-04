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
    export default {
        name: "Works",
        data() {
            return {
                projects: [],
            }
        },
        mounted() {
            // this.fetchProjects();
        },
        methods: {
            fetchProjects() {
                let query = `{
                    objectsByType(bucket_slug: "kofo-site", type_slug: "projects") {
                        title
                        metafields {
                            key
                            value
                        }
                        type_slug
                    }
                    }`;
                fetch('https://graphql.cosmicjs.com/v1\n', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        query
                    }),
                })
                    .then(res => res.json())
                    .then(res => {
                        this.projects = res.data.objectsByType
                    }).catch(() => {
                    alert("An error occurred");
                });
            }
        }
    }
</script>

<style scoped>

</style>
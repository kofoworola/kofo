export default {
    methods: {
        getMetaField(key, project) {
            return _.find(project.metafields, item => {
                return item.key === key;
            })
        },
        imageUrl(url){
            return `https://cosmic-s3.imgix.net/${url}`;
        }
    }
}
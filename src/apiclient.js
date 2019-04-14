let client = {
    getAllProjects(callback) {
        let query = `{
                    objectsByType(bucket_slug: "kofo-site", type_slug: "projects") {
                        _id
                        title
                        slug
                        metafields {
                            key
                            value
                        }
                        type_slug
                    }
                    }`;
        fetch('https://graphql.cosmicjs.com/v1', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query
            }),
        })
            .then(res => res.json())
            .then(res => {
                typeof callback == "function" && callback(res.data.objectsByType);
            }).catch(() => {
            alert("An error occurred");
        });
    },
    getSingleProject(slug, callback) {
        let query = `{
            object(bucket_slug: "kofo-site", slug: "${slug}") {
                title
                content
                metadata
            }
         }   `;
        fetch('https://graphql.cosmicjs.com/v1', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                query
            }),
        })
            .then(res => res.json())
            .then(res => {
                typeof callback == "function" && callback(res.data.object);
            }).catch(() => {
            alert("An error occurred");
        });
    },
};

export default client;
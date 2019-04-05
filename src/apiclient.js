let client = {
    getAllProjects(callback){
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
                typeof callback == "function" && callback(res.data.objectsByType);
            }).catch(() => {
            alert("An error occurred");
        });
    }
};

export default client;
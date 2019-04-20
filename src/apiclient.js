let client = {
    getAllProjects(callback) {
        let query = `{
                    allProjects {
                        id
                        title
                        slug
                        excerpt
                        image{
                        url
                        }
                    }
                    }`;
        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer 229422e096f5c28920674daaab0342`,
            },
            body: JSON.stringify({
                query
            }),
        })
            .then(res => res.json())
            .then(res => {
                typeof callback == "function" && callback(res.data.allProjects);
            }).catch(() => {
            alert("An error occurred");
        });
    },
    getSingleProject(slug, callback) {
        let query = `{
        project(filter: {slug: {eq: "${slug}"}}) {
        id
          title
          content
          excerpt
          content
          image {
            url
          }
         }
         }   `;
        fetch('https://graphql.datocms.com/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer 229422e096f5c28920674daaab0342`,
            },
            body: JSON.stringify({
                query
            }),
        })
            .then(res => res.json())
            .then(res => {
                typeof callback == "function" && callback(res.data.project);
            }).catch(() => {
            alert("An error occurred");
        });
    },
};

export default client;
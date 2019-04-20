<template>
    <div class="about">
        <div class="about-section">
            <div class="about-section__image">
            </div>
            <div class="about-section__text-content">
                <h1 class="title">About Me? I'm Flattered</h1>
                <p class="content" v-html="about_content">
                </p>
            </div>
        </div>
        <div class="skills-section">
            <div class="skills-section__content">
                <h1 class="title">
                    I Have Some Skill
                </h1>
                <p class="content" v-html="skillstext"></p>
                <h1 class="title recommendation-title">Recommendations</h1>
                <div class="recommendation" v-for="recommendation in recommendations">
                    <p class="comment">"{{ recommendation.comment}}"</p>
                    <p class="person-title">{{ recommendation.title}}</p>
                </div>
            </div>
            <div class="skills-section__skills">
                <skill-chart></skill-chart>
            </div>
        </div>
        <div class="contact-section">
            <div class="contact-section__map">
                <contact-map></contact-map>
            </div>
            <div class="contact-section__content">
                <h1 class="title">
                    Want To Reach Me?
                </h1>
                <p class="content">You have two options, look for me the old fashioned way in the area in the map :) or
                    you could just send a message</p>
                <div class="form">
                    <form action="https://formspree.io/okesolakofo@gmail.com" method="POST" target="_blank">
                        <input placeholder="Thy Email" type="email" name="email"/>
                        <input placeholder="What shall you be called" type="text" name="name"/>
                        <textarea name="message">Hi, i would like to invite you to my project (PROJECT NAME/URL) or just to get some coffee</textarea>
                        <button type="submit" class="button">Send</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SkillChart from "../components/SkillChart";
    import ContactMap from "../components/ContactMap";
    import store from '../store';
    import client from '../apiclient';
    let showdown = require('showdown');

    export default {
        components: {ContactMap, SkillChart},
        data(){
            return {
                about_content: "",
                recommendations: null,
                skillstext: "",
            }
        },
        beforeRouteEnter(to, from, next) {
            store.commit('setLoading', true);
            setTimeout(client.getAbout, 700, content => {
                next(vm => vm.setAbout(content));
                store.commit('setLoading', false);
            });
        },
        methods: {
            setAbout(content){
                this.about_content = (new showdown.Converter()).makeHtml(content.about);
                this.recommendations = content.recommendation;
                this.skillstext = content.skillstext;
            }
        }
    }
</script>

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
                <div v-view.once="showRecommendation" style="padding: 5px 0">
                    <transition name="bounce">
                        <div v-if="recommendationVisible">
                            <div class="recommendation" v-for="recommendation in recommendations">
                                <p class="comment">"{{ recommendation.comment}}"</p>
                                <p class="person-title">{{ recommendation.title}}</p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="skills-section__skills">
                <skill-chart :skills="skills"></skill-chart>
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
                <p class="content" v-view.once="showForm">You have two options, look for me the old fashioned way in the area in the map :) or
                    you could just send a message to <a href="mailto:okesolakofo@gmail.com">okesolakofo@gmail.com</a> or use the contact form below</p>
                <div class="form">
                    <transition name="bounce">
                        <form action="https://formspree.io/okesolakofo@gmail.com" method="POST" target="_blank"
                              v-if="formVisible">
                            <input placeholder="Thy Email" type="email" name="email"/>
                            <input placeholder="What shall you be called" type="text" name="name"/>
                            <textarea name="message">Hi, i would like to invite you to my project (PROJECT NAME/URL) or just to get some coffee</textarea>
                            <button type="submit" class="button">Send</button>
                        </form>
                    </transition>
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
        data() {
            return {
                about_content: "",
                recommendations: null,
                skillstext: "",
                formVisible: false,
                recommendationVisible: false,
                skills: {},
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
            setAbout(content) {
                this.about_content = (new showdown.Converter()).makeHtml(content.about);
                this.recommendations = content.recommendation;
                this.skillstext = content.skillstext;
                this.skills = content.skills;
            },
            showForm(e) {
                if (e.percentInView > 0) {
                    this.formVisible = true;
                }
            },
            showRecommendation(e) {
                if (e.percentInView > 0) {
                    this.recommendationVisible = true;
                }
            }
        }
    }
</script>

<template>
    <div class="about">
        <div class="about-section">
            <div class="about-section__image">
            </div>
            <div class="about-section__text-content">
                <h1 class="title">About Me? I'm Flattered</h1>
                <p class="content">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
                    quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </p>
            </div>
        </div>
        <div class="skills-section">
            <div class="skills-section__content">
                <h1 class="title">
                    I Have Some Skill
                </h1>
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
                <p class="content">You have two options, look for me the old fashioned way in the area to your left or
                    you could just send a message</p>
                <div class="form">
                    <form>
                        <input placeholder="Thy Email" type="email" name="email"/>
                        <input placeholder="What shall you be called" type="text" name="name"/>
                        <textarea name="message">Hi, i would like to invite you to my project (PROJECT NAME/URL) or coffee</textarea>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import SkillChart from "../components/SkillChart";
    import ContactMap from "../components/ContactMap";

    export default {
        components: {ContactMap, SkillChart}
    }
</script>

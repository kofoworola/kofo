<template>
  <div class="about">
      <div class="about-section">
          <div class="about-section__text-content">
              <h1 class="title">About me? I'm flattered</h1>
              <p class="content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
              </p>
          </div>
          <div class="about-section__image">
              <about-model></about-model>
          </div>
      </div>
  </div>
</template>
<script>
    import AboutModel from "../components/AboutModel";
    export default {
        components: {AboutModel}
    }
</script>

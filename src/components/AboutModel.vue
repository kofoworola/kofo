<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
    import * as THREE from 'three';

    export default {
        name: "AboutModel",
        data() {
            return {
                renderer: null,
                scene: null,
                camera: null,
                cube: null,
            }
        },
        mounted() {
            this.setUpModel();
        },
        methods: {
            setUpModel() {
                let canvas = this.$refs.canvas;
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

                this.renderer = new THREE.WebGLRenderer({canvas: canvas});
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                let geometry = new THREE.BoxGeometry(1, 1, 1);
                let texture = new THREE.TextureLoader().load( "/images/laravel.png" );
                let material = new THREE.MeshBasicMaterial({texture});
                this.cube = new THREE.Mesh(geometry, material);
                this.scene.add(this.cube);

                this.camera.position.z = 5;
                this.animate();
            },
            animate() {
                requestAnimationFrame(this.animate);
                this.cube.rotation.x += 0.01;
                this.cube.rotation.y += 0.01;
                this.renderer.render(this.scene, this.camera);
            }
        }
    }
</script>

<style scoped>

</style>
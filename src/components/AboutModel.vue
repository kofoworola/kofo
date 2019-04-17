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
            }
        },
        mounted() {
            this.setUpModel();
        },
        methods: {
            setUpModel() {
                let canvas = this.$refs.canvas;
                console.log(canvas);
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

                this.renderer = new THREE.WebGLRenderer({canvas: canvas});
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                // canvas.appendChild(this.renderer.domElement);
                let geometry = new THREE.BoxGeometry(1, 1, 1);
                let material = new THREE.MeshBasicMaterial({color: 0x00ff00});
                let cube = new THREE.Mesh(geometry, material);
                this.scene.add(cube);

                this.camera.position.z = 5;
                this.animate()
            },
            animate() {
                requestAnimationFrame(this.animate);
                this.renderer.render(this.scene, this.camera);
            }
        }
    }
</script>

<style scoped>

</style>
<template>
    <canvas ref="canvas" height="200"></canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: "SkillChart",
        data() {
            return {
                chart: null,
            }
        },
        mounted() {
            this.setChart();
        },
        methods: {
            setChart() {
                let context = this.$refs.canvas.getContext('2d');
                this.chart = new Chart(context, {
                        type: 'radar',
                        data: {
                            labels: ['HTML', 'NODE', 'LARAVEL', 'GOLANG', 'VUE', 'JAVA'],
                            datasets: [
                                {
                                    label: 'How Much I Can Use It',
                                    backgroundColor: 'rgb(160, 160, 160, 0.5)',
                                    borderColor: 'rgb(43, 43, 43)',
                                    pointBackgroundColor: 'rgb(43, 43, 43)',
                                    data: [100, 70, 90, 60, 80, 80]
                                }]

                        },
                        options: {
                            legend: {
                                display: false,
                                position: 'top',
                                labels: {
                                    fontColor: 'black',
                                    fontSize: 20,
                                    fontFamily: 'Open Sans',
                                }
                            },
                            scale: {
                                ticks: {
                                    beginAtZero: true,
                                    backdropColor: 'transparent',
                                    fontColor: 'black',
                                    fontStyle: 'bold',
                                },
                                gridLines: {
                                    display: false,
                                },
                                angleLines: {
                                    color: 'rgba(0,0,0,1)'
                                },
                                pointLabels: {
                                    fontColor: 'black',
                                    fontSize: 15,
                                    fontFamily: 'Open Sans',
                                }
                            }
                        }
                    }
                );
            }
        }
    }
</script>

<style scoped>

</style>
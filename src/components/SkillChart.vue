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
                dataset: {
                    html: 100,
                    node: 70,
                    laravel: 90,
                    golang: 60,
                    vue: 90,
                    java: 80,
                }
            }
        },
        mounted() {
            this.setChart();
        },
        computed: {
            dataObject() {
                let labels = _.map(_.keys(this.dataset), item => {
                    return item.toUpperCase();
                });
                return {
                    labels: labels,
                    datasets: [
                        {
                            label: 'How Much I Can Use It',
                            backgroundColor: 'rgb(160, 160, 160, 0.5)',
                            borderColor: 'rgb(43, 43, 43)',
                            pointBackgroundColor: 'rgb(43, 43, 43)',
                            data: _.values(this.dataset),
                        }]

                };
            }
        },
        watch: {
            dataset: {
                handler() {
                    this.chart.data = this.dataObject;
                    this.chart.update();
                },
                deep: true,
            }
        },
        methods: {
            setChart() {
                let labels = _.map(_.keys(this.dataset), item => {
                    return item.toUpperCase();
                });
                let context = this.$refs.canvas.getContext('2d');
                this.chart = new Chart(context, {
                    type: 'radar',
                    data: this.dataObject,
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
                });
            }
        }
    }
</script>

<style scoped>

</style>
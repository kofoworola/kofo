<template>
    <canvas ref="canvas" height="200"
        v-view.once="sayHello"></canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: "SkillChart",
        props: ['skills'],
        data() {
            return {
                chart: null,
            }
        },
        computed: {
            dataObject() {
                let labels = _.map(_.keys(this.skills), item => {
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
                            data: _.values(this.skills),
                        }]

                };
            }
        },
        methods: {
            setChart() {
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
            },
            sayHello(e){
                if( e.percentInView > 0){
                   this.setChart();
                }
            }
        }
    }
</script>

<style scoped>

</style>
<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue'],
        datasets: [
          {
            label: 'Frontend',
            data: [3, 3, 1.5, 2, 0.5],
            backgroundColor: [
              'rgba(181, 26, 26, 0.25)',
            ],
            borderColor: [
              'rgba(181, 26, 26, 0.75)'
            ],
            borderWidth: 1
          },
        ]
      },
      options: {
        scale: {
          ticks:{
      beginAtZero:true,
      max:5,
      min:0
    }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>

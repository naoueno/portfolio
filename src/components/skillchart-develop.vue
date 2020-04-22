<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'Github', 'Firebase'],
        datasets: [
          {
            label: 'Develops',
            data: [3, 2, 3.5, 4, 2],
            backgroundColor: [
              'rgba(87, 16, 131, 0.25)',
            ],
            borderColor: [
              'rgba(87, 16, 131, 0.75)'
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
    this.getSkills()
    this.renderChart(this.data, this.options)
  },
  methods:{
    getSkills(){
      const skills = this.$store.state.skillCategories
      this.data.labels = skills
    }
  }
}
</script>

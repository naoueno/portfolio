<script>
import { Radar } from 'vue-chartjs';
export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'devops',
            data: [2, 2, 3, 3],
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
  methods: {
    getSkills() {
      const skillCategory = this.$store.getters.getSkills('devops')
      skillCategory.skills.forEach((skill) => {
        this.data.labels.push(skill.name)
      })
    }
  }
}
</script>

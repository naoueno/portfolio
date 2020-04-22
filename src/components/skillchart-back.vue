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
            label: 'Back-end',
            data: [1, 2.5, 2.0, 0],
            backgroundColor: [
              'rgba(15, 136, 57, 0.25)',
            ],
            borderColor: [
              'rgba(15, 136, 57, 0.75)'
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
      const skillcategory = this.$store.getters.getSkills('Back-end')
      skillcategory.skills.forEach((skill) => {
        this.data.labels.push(skill.name)
      })
    }
  }
}
</script>

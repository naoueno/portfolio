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
    this.getSkills ()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills () {
      const skillCategory = this.$store.getters.getSkills('Front-end')
      skillCategory.skills.forEach((skill) => {
        this.data.labels.push(skill.name)
      })
    }
  }
}
</script>

<script>
import FrontChart from './skillchart-front.vue';
import BackChart from './skillchart-back.vue';
import DevChart from './skillchart-develop.vue';

export default {
  components: {
      FrontChart,
      BackChart,
      DevChart,
    },
  computed:{
    ...mapGetters({
      get: 'getSkills',
    }),
  },
  methods:{
    updateSkillCategories(event){
      //ディスパッチでstoreのアクションを呼んでいる
      this.$store.dispatch('updateskillcategories')
    }
  }
}
</script>

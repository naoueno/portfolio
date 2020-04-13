<template>
  <div id="skillSection">
    <div id="skillTitle">
      <h1>Skill Set</h1>
    </div>

    <div id="skillExplain">
      <h2>スキルについての文、スキルについて、</h2>
    </div>

    <a
      id="gitHubLink"
      href="https://github.com/naoueno"
    >
      GitHub:https://github.com/naoueno
    </a>

    <div id="skillLabel">
      Front-end
    </div>
    <div>
      <canvas id="myRaderChart">
      </canvas>
    </div>

  </div>
</template>

<script>
  export default {
  name: 'Skill',
    msg: String
  }
  var ctx = document.getElementById("myRaderChart");
  var myRaderChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["HTML","CSS","Javascript","SCSS","Vue"],
    datasets: [{
      label: 'Front-end',
      data: [10,10,10,10,10],
      backgroundcolor: 'RGBA(225,95,150, 0.5)',
      bordercolor: 'RGBA(225,95,150, 1)',
    borderWidth: 1,
    pointBackgroundColor: 'RGB(46,106,177)'
     }]
  },
  })
</script>

<style scoped>
#skillSection {
  background-color: #F5F5F5;
  text-align: center;
  padding: 10px;
}
#skillTitle {
  color: #707070;
  font-weight: bold;
  font-size: 18pt;
}
#skillExplain {
  font-size: 12pt;
  color: #707070;
  margin-left: auto;
  margin-right: auto;
}
</style>

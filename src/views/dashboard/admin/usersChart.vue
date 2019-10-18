<script>
import { Bar } from 'vue-chartjs';
import axios from 'axios'

export default {
   extends: Bar,
   mounted() {
         let uri = this.$store.state.serverAddress+'/charts/users/m';
         let Months = new Array();
         let Labels = new Array();
         let Users = new Array();
         let Students = [];
         axios({
            url : uri,
            method: 'GET',
            data : null,
            headers:{
                Authorization : this.$store.state.token,
            }
         }).then((response) => {
            let data = response.data.users;
            if(data) {
               Object.keys(data).forEach((month)=>{
                //    Users.push(data[month]);
                   Users.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
                   Months.push(month);
                   Students.push(Math.floor(Math.random() * (50 - 5 + 1)) + 5);
               });
               console.log(Users, Months);

               this.renderChart(
                    {
                        labels: Months,
                        datasets: [
                            {
                                label: 'Users',
                                backgroundColor: '#2dce89',
                                data: Users
                            },
                            {
                                label: 'Students',
                                backgroundColor: '#172b4d',
                                data: Students
                            }
                        ]
                    },
                    {
                        responsive: true, maintainAspectRatio: false
                    }
                )
       }
       else {
          console.log('No data');
       }
      });            
   }
}
</script>
<template>
    <div>
        <h3>Current Task</h3>

        
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Completed</th>
                <th scope="col">Creator</th>
                <th scope="col">Assigned</th>
                <th scope="col">Email</th>
                <th scope="col">Task</th>
                <th scope="col">Due Date</th>
                </tr>
            </thead>
            <tbody  v-for="task in allTasks" :key="task.id">
                <tr v-if="task.done === 0">
                <th scope="row" >
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" @click="finishTask($event)"  :datatype="task.id">
                    </div>
                    
                </th>
                <td>{{task.creator}}</td>
                <td>{{task.assigned}}</td>
                <td>{{task.email}}</td>
                <td>{{task.task}}</td>
                <td>{{task.duedate}} |  <router-link :to="{ name:'Taskedit', params:{ id: task.id}}" ><i class='bx bx-edit-alt'></i> </router-link></td>
                </tr >
            </tbody>
        </table>

    </div>
</template>

<script>
import { onMounted } from "vue";
import {ref, reactive } from 'vue';
    export default {
        setup(){
            const allTasks = ref([]);
            
            // fetch all the task from database
                const getAlltask = async() =>{
                    let response = await axios.get('/api/tasks')
                    allTasks.value = response.data;
                }
            onMounted(getAlltask);

            const finishTask = function(event){
                const done_id = event.currentTarget.getAttribute('datatype')
                PostDone(done_id)
            
                
            }

            const PostDone = async(id)=>{
                try{
                        await axios.put('/api/donetask/' +id)
                         getAlltask()
                    } catch(e){
                        if(e.response === 422){
                            console.log(e.response.data.errors)
                            console.log("They is an error")
                        }
                    }
            }

            return{
                allTasks,
                finishTask
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
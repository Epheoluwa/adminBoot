<template>
    <div>
        <h3>Completed Task</h3>

        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">Creator</th>
                <th scope="col">Assigned to</th>
                <th scope="col">Email</th>
                <th scope="col">Task</th>
                <th scope="col">Due Date</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody v-for="task in allTasks" :key="task.id">
                <tr v-if="task.done === 1">
                <!-- <th scope="row">
                </th> -->
                <td>{{task.creator}}</td>
                <td>{{task.assigned}}</td>
                <td>{{task.email}}</td>
                <td>{{task.task}}</td>
                <td>{{task.duedate}}</td>
                <td><button class='bx bx-trash' @click="deleteTask(task.id)"></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted } from "vue";
import { ref } from 'vue';
    export default {
        setup(){
             const allTasks = ref([]);
            
            // fetch all the task from database
                const getAlltask = async() =>{
                    let response = await axios.get('/api/tasks')
                    allTasks.value = response.data;
                }
                onMounted(getAlltask);

                const deleteTask = async(id) =>{
                    if(!window.confirm('Are you sure?')) {
                        return
                    }
                    
                    await axios.delete('/api/tasks/' + id)
                    await getAlltask();
                }
                

            return{
                allTasks,
                deleteTask
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
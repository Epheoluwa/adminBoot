<template>
        <div v-if="success">
            <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        Task Created Succesfully
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
        <form class="row g-3 mt-3" @submit.prevent="saveTask">
            <div class="col-md-4">
                <label for="validationServer01" class="form-label">Task Creator</label>
                <input type="text" class="form-control" id="validationServer01" v-model="task.creator" required>
                <!-- <div class="valid-feedback">
                    Looks good!
                </div> -->
            </div>
            <div class="col-md-4">
                <label for="validationServer02" class="form-label">Assigned To</label>
                <input type="text" class="form-control" id="validationServer02" v-model="task.assigned" required>
                <!-- <div class="valid-feedback">
                    Looks good!
                </div> -->
            </div>
            <div class="col-md-4">
                <label for="validationServerUsername" class="form-label">Email</label>
                <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend3">@</span>
                <input type="email" class="form-control" id="validationServerUsername" v-model="task.email" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required>
                <!-- <div id="validationServerUsernameFeedback" class="invalid-feedback">
                    Please choose a username.
                </div> -->
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationServer03" class="form-label">Task Title</label>
                <input type="text" class="form-control " id="validationServer03" v-model="task.title" aria-describedby="validationServer03Feedback" required>
                <!-- <div id="validationServer03Feedback" class="invalid-feedback">
                    Please provide a valid city.
                </div> -->
            </div>
            <div class="col-md-3">
                <label for="validationServer05" class="form-label">Task</label>
                <input type="text" class="form-control" id="validationServer05" v-model="task.task" aria-describedby="validationServer05Feedback" required>
                
                <!-- <div id="validationServer05Feedback" class="invalid-feedback">
                Please provide a valid zip.
                </div> -->
            </div>
            <div class="col-md-3">
                <label for="validationServer05" class="form-label">Due Date</label>
                <input type="date" class="form-control" id="validationServer06" v-model="task.duedate" aria-describedby="validationServer05Feedback" required>
                <!-- <div id="validationServer05Feedback" class="invalid-feedback">
                Please provide a valid zip.
                </div> -->
            </div>
            <div class="col-12">
                <button class="btn btn-primary float-end" type="submit">Submit form</button>
            </div>
        </form>

        </div>
</template>

<script>
import { reactive } from 'vue'
import { ref } from 'vue';
import { useRouter } from "vue-router";
    export default {
        setup(){
            const task = reactive({
            'creator': '',
            'assigned': '',
            'email': '',
            'title': '',
            'task': '',
            'duedate':'',
            'done': 0
            })
            const errors = ref('');
            const router = useRouter();
            const success = ref(false);

            const saveTask = async() =>{
                errors.value = ''
            
                try{
                    await axios.post('/api/tasks', {...task})
                    success.value = true;
                    setTimeout(()=>{
                            router.push({name: 'Viewtask'})
                    },2000)
                    // await router.push({name: 'Viewtask'})
                }catch(e){
                    if(e.response === 422){
                        errors.value = e.response.errors
                    }
                }   
            }


            return{
            task,
            saveTask,
            success
            }
        }
        
    }
</script>

<style lang="scss" scoped>
.toast:not(.show) {
    display: block; 
    margin: auto;
}
</style>
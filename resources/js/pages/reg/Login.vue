<template>
    <div class="m-auto align-items-center w-50">
        
        <div class="mt-3">
            <div class="row">
                <div class="col-md-6"><button class="btn btn-light w-100" @click="showLogin" >Login</button></div>
                <div class="col-md-6"><button class="btn btn-light w-100" @click="showRegister">Register</button></div>
            </div>
            <div v-show="login">
                <form class="row g-3 mt-2">   
                    <div class="col-md-12">
                        <label for="" class="form-label">Email</label>
                        <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="email" class="form-control" aria-describedby="inputGroupPrepend3 " required>
                        <!-- <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div> -->
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label for="" class="form-label">Password</label>
                        <input type="password" class="form-control" required>
                        <!-- <div class="valid-feedback">
                            Looks good!
                        </div> -->
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary float-end" type="submit">Login</button>
                    </div>
                </form>
            </div>
            <div v-show="!login">
                <form class="row g-3 mt-2" @submit.prevent="saveReg">  
                    <div class="col-md-12">
                        <label for="" class="form-label">Name</label>
                        <input type="text" class="form-control" v-model="RegForm.name" required>
                        <!-- <div class="valid-feedback">
                            Looks good!
                        </div> -->
                    </div> 
                    <div class="col-md-12">
                        <label for="" class="form-label">Email</label>
                        <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="email" class="form-control"  aria-describedby="inputGroupPrepend3"  v-model="RegForm.email" required>
                        <!-- <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div> -->
                        </div>
                    </div>

                    <div class="col-md-12">
                        <label for="" class="form-label">Password</label>
                        <input type="password" class="form-control" v-model="RegForm.password" name="password" required>
                        <!-- <div class="valid-feedback">
                            Looks good!
                        </div> -->
                    </div>
                    <div class="col-md-12">
                        <label for="" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" v-model="RegForm.password_confirmation" name="password_confirmation" required>
                        <!-- <div class="valid-feedback">
                            Looks good!
                        </div> -->
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary float-end" type="submit">Register</button>
                    </div>
                </form>
            </div>
            
        </div>
        
    </div>
</template>

<script>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
    export default {
        setup(){
            const login = ref(true)
            const router = useRouter()
            const RegForm = reactive({
                'name': '',
                'email': '',
                'password': '',
                'password_confirmation': ''
            })
            const errors = ref([])

            const showLogin = function(){
                login.value = true
            }
            const showRegister = function(){
                login.value = false
            }

            const saveReg = function(){
                axios.post('/api/register', RegForm).then(()=>{
                    router.push({name: 'Viewtask'})
                }).catch((error)=>{
                    errors.value = error.response.data.errors;
                })
            }

            return{
                login,
                RegForm,
                showLogin,
                showRegister,
                saveReg
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
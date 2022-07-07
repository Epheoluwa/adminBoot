<template>
    
<div class="wrapper">
    <div class="sidebar">
      <div class="logo-details">
        <i class='bx bxl-c-plus-plus'></i>
        <span class="logo_name">Admin panel</span>
      </div>
      <ul class="nav-links">
        <li>
            <router-link :to="{ name: 'Welcome'}">
                <i class='bx bx-grid-alt'></i>
                <span class="link_name">Dashboard</span>
            </router-link>
          <ul class="sub-menu blank">
            <li>
                  <router-link :to="{ name: 'Welcome'}" class="link_name" aria-current="page">Dashboard</router-link>
            </li>

          </ul>
        </li>
        <!-- <li>
          <div class="icon-link">
            <a href="#">
              <i class='bx bx-collection'></i>
              <span class="link_name">Category</span>
            </a>
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li><a class="link_name" href="#">Category</a></li>
            <li><a href="#">HTML & CSS</a></li>
            <li><a href="#">JavaScript</a></li>
            <li><a href="#">PHP & MySQL</a></li>
          </ul>
        </li> -->
        <li>
          <div class="icon-link">
            <router-link :to="{ name: 'Viewtask'}" >
                <i class='bx bx-book-alt'></i>
                <span class="link_name">Tasks</span>
            </router-link>
            
            <i class='bx bxs-chevron-down arrow'></i>
          </div>
          <ul class="sub-menu">
            <li> <router-link :to="{ name: 'Addtask'}" >Add Task</router-link></li>
            <li> <router-link :to="{ name: 'Viewtask'}" >View Task</router-link>  </li>
            <li> <router-link :to="{ name: 'Comtask'}" >View Completed Task</router-link></li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-line-chart'></i>
            <span class="link_name">Chart</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Chart</a></li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-cog'></i>
            <span class="link_name">Setting</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Setting</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <section class="home-section">
      <div class="home-content">
        <i class='bx bx-menu'></i>
        <span class="text">Admin Panel Details</span> <br />
      </div>
      <div>
        <router-view />
      </div>


    </section>
  </div>
</template>

<script>
    export default {
        
    }
</script>
<style>
.bgSetting{
   background-color: gray;
   height: 100vh;
}
.w-90{
    width: 99%;
}
</style>

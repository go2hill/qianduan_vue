<template>
    <div class="home">
        <div class="home-header">
            <a href="/" class="home-nav-logo">My Website</a>
            <el-menu class="home-nav" mode="horizontal">
                <el-menu-item index="1">Home</el-menu-item>
                <el-menu-item index="2">About</el-menu-item>
                <el-menu-item index="3">Contact</el-menu-item>
            </el-menu>
            <el-button class="home-nav-btn" icon="el-icon-menu" @click="isCollapse = !isCollapse"></el-button>
        </div>
        <div class="home-content">
            <div class="home-sidebar" :class="{ 'is-collapse': isCollapse }">
                <el-menu class="home-sidebar-nav" :collapse="isCollapse" router>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-location"></i><span>Navigation One</span></template>
                        <el-menu-item index="1-1">Option 1</el-menu-item>
                        <el-menu-item index="1-2">Option 2</el-menu-item>
                        <el-menu-item index="1-3">Option 3</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i><span>Navigation Two</span></el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-setting"></i><span>Navigation Three</span></el-menu-item>
                </el-menu>
            </div>
            <div class="home-main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .home {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
    }

    .home-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px;
    }

    .home-nav {
        border-bottom: none !important;
    }

    .home-nav-logo {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        text-decoration: none;
    }

    .home-nav-btn {
        margin-left: 20px;
    }

    .home-content {
        display: flex;
        flex-grow: 1;
        height: calc(100% - 60px);
    }

    .home-sidebar {
        width: 200px;
        background-color: #f0f2f5;
        transition: all 0.3s;
        overflow: auto;
    }

    .home-sidebar-nav {
        background-color: #f0f2f5;
    }

    .home-sidebar-nav.is-collapse {
        width: 64px;
        overflow: hidden;
    }

    .home-main {
        flex-grow: 1;
        padding: 20px;
        overflow: auto;
    }
</style>

<script>
    export default {
        data() {
            return {
                isCollapse: false
            }
        }
    }
</script>

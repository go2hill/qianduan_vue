 <template>
        <div class="login-wrapper">
            <el-card class="login-card">
                <h2 class="login-title">Welcome Back</h2>
                <el-form class="login-form">
                    <el-form-item>
                        <el-input
                                placeholder="Username"
                                prefix-icon="el-icon-user"
                                v-model="username"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                                type="password"
                                placeholder="Password"
                                prefix-icon="el-icon-lock"
                                v-model="password"
                        ></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login-button" type="primary" @click="register">
                            注册
                        </el-button>
                    </el-form-item>
                </el-form>
                <div class="login-footer">
                    <span>已有账号，立即登录 </span>
                    <router-link to="/">现在返回</router-link>
                </div>
            </el-card>
        </div>
    </template>


<script>
    import axios from "axios";

    export default {
        name: "SignUp",
        data() {
            return {
                username: '',
                password: '',
                error: ''
            }
        },
        methods: {
            register() {
                axios.post('http://localhost:8088/api/register', {
                    username: this.username,
                    password: this.password
                }).then(response => {
                    if (response.data.success) {
                        // 注册成功，跳转到登陆页面
                        this.$router.push('/');
                    } else {
                        // 显示错误信息
                        this.error = response.data.message;
                    }
                }).catch(error => {
                    console.error(error);
                });
            }
        }
    }
</script>

<style scoped>
    .login-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to right bottom, #4264fb, #4ab8ff);
    }

    .login-card {
        width: 400px;
        background: #fff;
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }

    .login-title {
        margin-top: 20px;
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        color: #4264fb;
    }

    .login-form {
        padding: 20px;
    }

    .login-form .el-form-item {
        margin-bottom: 20px;
    }

    .login-button {
        width: 100%;
        height: 48px;
        border-radius: 8px;
    }

    .login-footer {
        margin-top: 20px;
        text-align: center;
        color: #999;
    }

    .login-footer a {
        color: #4264fb;
    }
</style>

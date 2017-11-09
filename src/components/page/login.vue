<template>
    <div class="modal" id="login-modal">
        <div class="modal-background"></div>
        <div class="modal-content" style="width:300px;">
            <div class="box">
                <h3 class="title is-4">登录</h3>
                <p class="control has-icon">
                    <input type="text" class="input" placeholder="用户名">
                    <i class="fa fa-user"></i>
                </p>
                <p class="control has-icon">
                    <input type="text" class="input" placeholder="密码">
                    <i class="fa fa-lock"></i>
                </p>
                <p class="control">
                    <button class="button is-primary" @click="login()">登录</button>
                </p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        methods: {
            login () {
                //处理登录环节
                this.$store.commit('isAuth', true)
            }
        }
    }
</script>
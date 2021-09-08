<template>
<head>
     <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
</head>
<div id="father">
    <div class="hengxaing" style="margin-left: 270px"><a href="HomePage.jsp"><img src="../assets/IMG/Login/1609309019981.jpg" alt=""></a></div>
    <div class="hengxaing">
        <div class="LoginForm">
            <br>
            <div>
                <img src="IMG/RegisTer/logo_01.png" width="180px" alt="">
            </div>
            <div style="margin-top: 10px;font-size: 21px;text-align: center">
                后台登录
            </div>
            <div style="margin-top: 30px;margin-bottom:10px;margin-left: 250px;cursor:pointer;font-size: 14px;text-align: center;color: blue">
                验证码登录
            </div>
            <el-form
                ref="myForm"
                class="login-form"
                label-position="top"
                label-width="80px"
                :model="formData"
                :rules="rules"
            >
                <div>
                    <!-- <input class="Phone" name="Phone" id="Phone" style="text-indent: 1em" placeholder="请输入手机号" type="text"> -->
                    <el-input v-model="Phone" placeholder="请输入内容" clearable style="width:330px;height:50px"></el-input>
                </div>
                
                <!-- <el-form-item label="用户名" class="Phone" style="text-indent: 1em" id="Phone" prop="userName">
                    <el-input
                        placeholder="请输入用户名"
                        v-model="formData.userName" 
                    ></el-input>
                </el-form-item> -->

                <div id="msg" style="color: red;float: left;margin-left: 50px;font-size: 14px;line-height: 25px"></div>
                <br>
                <div>
                    <!-- <input class="Phone" name="Phone" id="Phone" style="text-indent: 1em" placeholder="请输入手机号" type="text"> -->
                    <el-input v-model="password" placeholder="请输入内容" clearable style="width:330px;height:50px"></el-input>
                </div>

                <div style="margin-top: 15px;margin-bottom:15px;margin-left: -210px;cursor:pointer;font-size: 14px;text-align: center;color: blue">
                    邮箱/用户名登录
                </div>
                    <div class="denglu" id="denglu">
                        登录
                    </div>
                <div style="line-height: 15px">&nbsp;</div>
            </el-form>
            <a href="Register.jsp">
            <div class="zhuce" style="" id="zhuce">注册vivo账户
            </div>
            </a>
            <div style="font-size: 14px;color:#7F828C;line-height: 50px">
                忘记密码
            </div>

            <div style="font-size: 14px;color:#999;line-height: 50px">
                ———————— 其他方式登录 ————————
            </div>
            <div class="wangzhi">
                <ul>
                    <li><img src="../assets/IMG/Login/微信.png" alt=""></li>
                    <li><img src="../assets/IMG/Login/支付宝.png" alt=""></li>
                    <li><img src="../assets/IMG/Login/微博.png" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</div>
<br><br>
<div style="text-align: center;color: #999;font-size: 14px">
    <div style="color: #242933;line-height: 30px">在线客服&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;400-678-9688(24小时全国服务热线)</div>
    <div>COPYRIGHT ©2021 广东天宸网络科技有限公司 版权所有 保留一切权利 | 隐私政策 | 法律声明 | 粤B2-20080267 | 粤ICP备05100288号</div>
</div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
    data() {
        return {
            formData:"",
            "password":""
        };
    },

    setup() {
      return {
        input: ref(''),
      }
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style>
/* @import "../assets/CSS/Login.css"; */
.wangzhi{
    margin-left: -25px;
}
.wangzhi li{
    margin-left: 30px;
}
</style>
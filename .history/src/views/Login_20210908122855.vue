<template>
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
                label-width="20px"
                style="width:330px;margin:0px auto"
                :model="formData"
                :rules="rules"  
            >
                <el-form-item class="phone" name="phone" id="phone" prop="phone">
                    <el-input
                        placeholder="请输入手机号"
                        v-model="formData.phone" 
                    ></el-input>
                </el-form-item>

                <div id="msg" style="color: red;float: left;margin-left: 50px;font-size: 14px;line-height: 25px"></div>
                <br>
                <el-form-item class="phone" name="phone" id="phone" prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="formData.password" 
                        style="heigh:50px"
                    ></el-input>
                </el-form-item>

                <div style="margin-top: 25px;margin-bottom:15px;margin-left: -210px;cursor:pointer;font-size: 14px;text-align: center;color: blue">
                    邮箱/用户名登录
                </div>
                    <!-- <div class="denglu" id="denglu">
                        登录
                    </div> -->
                    <el-form-item>
                        <el-button
                            class="login-btn"
                            @click.prevent="handleLogin"
                            style="width: 100%"
                            type="primary"
                            v-loading.fullscreen.lock="fullscreenLoading"
                            >登 录</el-button
                        >
                    </el-form-item>
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
import md5 from "blueimp-md5";

  export default defineComponent({
      
    data() {
        return {
            formData: {
                phone: "",
                password: "",
            },
        rules: {
            phone: [
            { required: true, message: "请输入手机号", trigger: "blur" },
            {
                max: 11,
                min: 11,
                message: "手机号码长度不正确",
                trigger: "blur",
            },
            ],
            password: [
            { required: true, message: "请输入密码", trigger: "blur" },
            {
                max: 20,
                min: 6,
                message: "长度是位于 6 到 20 个字符",
                trigger: "blur",
            },
            ],
        },
        fullscreenLoading: false,
        };
    },
    methods:{
      handleLogin(){
          if(this.formData.phone == "" || this.formData.password == ""){
                //只要有一个 等于空 那么 则停止转圈
                this.fullscreenLoading = false;
                    console.log('输入的有误');

          }else{
                //都不等于 空时 则 转圈/加载 等待进入 查询
                this.fullscreenLoading = true;
          }


            //点击  登录 时的操作
            this.$refs.myForm.validate((valid) => {
                
                setTimeout(()=>{
                    //valid 验证成功还是 失败 布尔值
                    if(valid){
                        this.axios
                            .post("/BashStage/verify",
                            {"phone":this.phone,"password":this.password}).then(res=>{
                                const {resultCode,data} = res.data;
                                
                                //确认成功
                                if(resultCode == 200){
                                    //返回 data令牌，同等于 月票
                                    //查看 data令牌， 进行存储
                                    console.log(data)
                                }



                            })
                    }

                })                

            })


      }  
    },
    setup() {
      return {
        input: ref(''),
      }
    },
  })

// export default {

//     mounted() {
        
//     },

//     methods: {
        
//     },
// };
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
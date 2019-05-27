<template>
    <el-row type="flex" justify="center" align="middle">
    <el-col :span="8">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <!--
            primary : 蓝色
            success : 绿色
            danger  : 红色
          -->
          <el-button type="success" @click="startLogin()">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- <h1>我是login 页的 h1</h1> -->
    </el-col>
  </el-row>
</template>
<script>
/*eslint-disable */
import axios from 'axios'
export default {
   data() {
      return {
        ruleForm: {
          usename: 'admin',
          password: "123456"

        },
        rules: {
          uesname: [
            { required: true, message: '用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '密码', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 5到 10 个字符', trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
    startLogin() {
        this.$refs.ruleForm.validate((valid) => {
           if (!valid) {
          return alert("格式不正确")
        }
        console.log('开始登陆')
axios.post("http://localhost:8888/api/private/v1/login", this.ruleForm)
.then(res=>{
  console.log(res)
  if(res.data.meta.status===200){
    this.$message({
      message:"成功",
      type:"success",
      duration:800
    })
    this.$router.push("/home")
  }else {
    this.$message({
      message:res.data.meta.msg,
      type:"error",
      duration:800
    })
  }
})
    })
    },
      resetForm(){
        this.$refs.ruleForm.resetFields();
      }
    }
}
</script>
<style scoped>
.el-row {
  height: 100%;
  background: #2d434c;
}

.el-col {
  background: #fff;
  padding: 20px 30px;
  border-radius: 15px;
}

h1 {
  color: red;
}
</style>

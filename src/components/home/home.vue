<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="8">
          <img src="../../assets/images/logo.png" alt>
        </el-col>
        <el-col :span="8">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8" class="col_r">
          恭喜上海前端37期年薪40万
          <a href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>
/* 外部容器 */
.el-container {
  height: 100%;
  min-width: 900px;
}

/* 头部 */
.el-header {
  background: #b3c1cd;
  padding: 0;
}

h1 {
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 26px;
}
.col_r {
  text-align: right;
  line-height: 60px;
  padding-right: 30px;
}

.col_r a {
  color: green;
}

/* 侧栏 */
.el-aside {
  background: #545c64;
}

/* 主体 */
.el-main {
  background: #eaeef1;
}
</style>

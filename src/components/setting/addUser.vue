<template>
	<div class="qx-main-con">
		<el-form label-width="100px" size="small">
			<h2 class="qx-form-title">
				<Icon type="person-add" size="large"></Icon>
				<span>新建用户</span>
			</h2>
			<el-form-item label="姓名："> 
				<el-input v-model="input" placeholder="请输入内容" class="qx-addInp" autofocus></el-input>
			</el-form-item>
			<el-form-item prop="input2" label="邮箱："
				:rules="[
		      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
		      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
		    ]"> 
				<el-input v-model="input2" placeholder="请输入内容" class="qx-addInp" autofocus></el-input>
			</el-form-item>
			 <el-form-item label="性别：">
			    <el-radio v-model="radio7" label="1">男</el-radio>
			    <el-radio v-model="radio7" label="2">女</el-radio>
			 </el-form-item>
			 <el-form-item label="工号："
			 	prop="input3"
			    :rules="[
			      { required: true, message: '工号不能为空'},
			      { type: 'number', message: '工号必须为数字值'}
			    ]"
			 >
				<el-input v-model="input3" placeholder="请输入内容" class="qx-addInp"></el-input>
			</el-form-item>
			<div class="clearFix">
				<el-form-item label="角色："class="qx-form-item" >
					<el-select v-model="value6" multiple placeholder="请选择">
					    <el-option
					      v-for="item in opts"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="部门：" class="qx-form-item">
					<el-select v-model="value5" clearable placeholder="请选择">
					    <el-option
					      v-for="item in opts"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					</el-select>
				</el-form-item>
			</div>
			<div class="clearFix">
				<el-form-item label="密码：" prop="pass" class="qx-form-item">
			    <el-input type="password" v-model="checkPass" auto-complete="off" class="qx-addInp"></el-input>
				</el-form-item>
				<el-form-item label="确认密码：" prop="checkPass"  class="qx-form-item">
				    <el-input type="password" v-model="checkPass" auto-complete="off" class="qx-addInp"></el-input>
				</el-form-item>
			</div>		
			 <el-form-item>
			    <el-button type="primary" >提交</el-button>
			    <el-button>重置</el-button>
			 </el-form-item>
		</el-form>
		
	</div>
</template>

<script> 
	export default{
		name:"addUser",
		data() {
	      return {
	      	input:"",
	      	input2:"",
	      	input3:"",
			radio7:'',
	        opts: [
	        	{
		            key: 0,
		            value: '市场部1',
		            label:"市场部"
	          	},
	          	{
		            key: 1,
		            value: '研发部1',
		            label:"研发部"
	          	},
	          	{
		            key: 2,
		            value: '测试部1',
		            label:"测试部"
	          	}
	        ],
	        checkPass:"",
	        value5:[],
	        value6:[]
	      };
	   }
	}
</script>

<style>
	.qx-addInp{
		width: 220px;
	}
	.qx-form-item{
		float: left;
	}
	.qx-form-title{
		color: cornflowerblue;
		margin: 0 auto 10px;
		font-size: 30px;
	}
	.qx-form-title span{
		display: inline-block;
		vertical-align: top;
		margin: 10px 0 0 10px;
		font: bold 18px/30px Arial, Helvetica, sans-serif;
	}
</style>
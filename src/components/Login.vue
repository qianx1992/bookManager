<template>
	<div class="qx-login-page">		
	   <Form ref="formInline" :model="formInline" :rules="ruleInline" class="qx-login-inputBox">
	   		<h1 class="qx-login-title">
	   			<i class="iconfont icon-shu1 qx-userIndex-logoIcon"></i>企业图书管理系统
	   		</h1>
	        <FormItem prop="user">
	            <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
	                <Icon type="ios-person-outline" slot="prepend" size="22"></Icon>
	            </Input>
	        </FormItem>
	        <FormItem prop="password">
	            <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
	                <Icon type="ios-locked-outline" slot="prepend" size="22"></Icon>
	            </Input>
	        </FormItem>
	        <FormItem>
	            <Button type="primary" @click="handleSubmit('formInline')" class="qx-login-loginBtn">登录</Button>
	        </FormItem>
	    </Form>
	</div>
</template>

<script>
	export default{
		name:"login",
		data(){
			return {
				input:"",
				formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
			}
		},
		 methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            }
        }
	}
</script>

<style>
	.qx-login-page{
		height: 100%;
		background: url(../../static/img/loginBg.png) no-repeat 0 0;
		background-size: cover;
	}
	.qx-login-title{
		padding-left: 20px;
		font: 30px/1.5 "微软雅黑";
		color: #fff;
		height: 60px;
		background-size: contain;
		margin-bottom: 25px;
	}
	.qx-userIndex-logoIcon{
		font-size: 35px;
		line-height: 1.5;
		color: #fff;
		margin-right: 15px;
	}
	.qx-addInp{
		width: 220px;
	}
	.qx-login-inputBox{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}
	.qx-login-inputBox input{
		background-color:rgba(255,255,255,.3);
		color: #fff;
		border-color: #fff;
	}
	.qx-login-inputBox input:hover{
		border-color: #fff;
	}
	.ivu-input-group-prepend{
		background-color: rgba(255,255,255,.3);
		color: #fff;
	}
	.qx-login-loginBtn{
		background: rgba(255,255,255,.3);
		border: none;
		width: 80px;
	}
	.ivu-form-item-error .ivu-input-group-prepend{
		background-color: rgba(255,255,255,.3);
		color: #fff;
	}
</style>
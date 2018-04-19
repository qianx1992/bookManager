<template>
    <div class="layout">
        <Row type="flex" class="qx-main">
            <Col span="4" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left qx-index-Leftlogo">
                    	<i class="iconfont icon-shu1 qx-userIndex-logoIcon"></i>
                    </div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            	首页
                        </template>
                        <MenuItem name="1-1">
                        	<router-link :to="{name:'first'}">工作台</router-link>
                        </MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            	借还书管理
                        </template>
                        <MenuItem name="2-1">
                        	<router-link :to="{name:'userIndex'}">借书</router-link>
                        </MenuItem>
                        <MenuItem name="2-2">还书</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            	我的
                        </template>
                        <MenuItem name="3-1">我的收藏</MenuItem>
                        <MenuItem name="3-1">个人信息管理</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            	系统设置
                        </template>
                        <MenuItem name="4-1">
                        	<router-link :to="{name:'user'}">用户管理</router-link>
                        </MenuItem>
                        <MenuItem name="4-2">
                        	<router-link :to="{name:'role'}">角色管理</router-link>
                        </MenuItem>
                        <MenuItem name="4-3">参数管理</MenuItem>
                    </Submenu>
                </Menu>
            </Col>
            <Col span="20" class="qx-right">
                <div class="layout-header clearFix">
                	<div class="qx-rightTop">
                		<Icon type="ios-person" class="qx-index-icon"></Icon>
                		<span>登录</span>
                	</div>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">首页</BreadcrumbItem>
                        <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                        <BreadcrumbItem>某应用</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">                   	
                    	<router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name:"index"
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        height:100%;
    }
    .qx-rightTop{
    	float: right;
    	margin: 0 20px 0 0;
    	font-size: 14px;
    }
    .qx-index-icon{
    	font-size: 25px;
    	line-height: 40px;
    }
    .qx-rightTop span{
    	display: inline-block;
    	vertical-align: top;
    	padding: 0 0 0 10px;
    	line-height: 40px;
   		color: #409EFF;
    }
    .qx-main{
    	height:100%;
    }
    .qx-right{
    	height: 100%;
    	overflow-y: auto;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        /*padding: 10px;*/
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
         height:100%;
    }
    .layout-header{
        height: 40px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
     	box-shadow: 0 0 5px green;
    }
    .qx-index-Leftlogo{
    	 background: #5b6270 url('../assets/logo1.png') no-repeat 55px 0;
    	 background-size: 150px 30px;
    }
    .qx-userIndex-logoIcon{
		font-size: 30px;
		line-height: 1;
		color: #20a0ff;
		margin-left: 10px;
	}
	.layout-menu-left a{
		color: rgba(255,255,255,.7);
	}
	.layout-menu-left a:hover{
		color:#fff;
	}
</style>
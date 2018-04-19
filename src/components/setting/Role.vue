<template>
	<div>
		<!--<Menu mode="horizontal" active-key="1">
            <div class="layout-assistant">
                <Menu-item key="1">二级导航</Menu-item>
                <Menu-item key="2">二级导航</Menu-item>
                <Menu-item key="3">二级导航</Menu-item>
            </div>
     	</Menu>-->
     	<div class="qx-set-head clearFix">
     		<el-button type="primary" icon="el-icon-plus" class="qx-set-addBtn">添加</el-button>
     	</div>
     	    	
     	<el-table :data="tableData" borderstyle="width: 100%">
		 	<el-table-column type="selection"></el-table-column>
		 	 <el-table-column label="序号" type="index" width="80"></el-table-column>
		    <el-table-column label="角色名">
		    	<template scope="scope">
		    		{{scope.row.roleName}}
		    	</template>
		    </el-table-column>
		     <el-table-column label="描述">
		     	<template scope="scope">
		    		{{scope.row.description}}
		    	</template>
		     </el-table-column>
		     <el-table-column label="状态" width="150">
		     	<template scope="scope">
		    		<Switch size="large">
				        <span slot="open">激活</span>
				        <span slot="close">禁用</span>
				    </Switch>
		    	</template>
		     </el-table-column>
		    <el-table-column label="操作" width="150">
		      <template scope="scope">
		        <el-button
		          size="small"
		          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
		        <el-button
		          size="small"
		          type="danger"
		          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		      </template>
		    </el-table-column>
	  	</el-table>
	</div>
	 
</template>

<script>
    export default {
    	name:"role",
        data () {
            return {
            	tableData:[
            		{
            			roleName:"管理员"
            		},
            		{
            			roleName:"部长"
            		},
            		{
            			roleName:"部长助理"
            		},
            		{
            			roleName:"普通员工"
            		}
            	]
             }   
        },
        methods: {
            
        }
    }
</script>
<style>
</style>
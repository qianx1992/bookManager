<template>
	<div class="qx-main-con">
		<div class="clearFix">
			<el-button type="primary" icon="el-icon-plus" class="qx-set-addBtn">添加</el-button>			
		  	<el-form :inline="true" class="qx-user-searchInp">
		  		<el-form-item label="角色：">
				  	 <el-select v-model="value5" size="small" clearable placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				 </el-form-item>
				 <el-form-item label="部门：">
				  	 <el-select v-model="value5" size="small" clearable placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				 </el-form-item>
				 <el-form-item>
				  	<el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
				 </el-form-item>
		  	</el-form>
		</div>		
		<el-table :data="userList" borderstyle="width: 100%">
		 	<el-table-column type="selection"></el-table-column>
		 	<el-table-column label="工号" width="120">
		 		<template scope="scope">
		    		{{scope.row.workNo}}
		    	</template>
		 	</el-table-column>
		    <el-table-column label="姓名" width="100">
		      <template scope="scope">
		        <el-popover trigger="hover" placement="top">
		          <p>姓名: {{ scope.row.userName }}</p>
		          <p>住址联系电话: {{ scope.row.phoneNumber }}</p>
		          <div slot="reference" class="name-wrapper">
		            <el-tag>{{ scope.row.userName }}</el-tag>
		          </div>
		        </el-popover>
		      </template>
		    </el-table-column>
		     <el-table-column label="邮箱" width="180">
		    	<template scope="scope">
		    		{{scope.row.email}}
		    	</template>
		    </el-table-column>
		    <el-table-column label="性别">
		    	<template scope="scope">
		    		{{scope.row.sex}}
		    	</template>
		    </el-table-column>
		     <el-table-column label="部门">
		     	<template scope="scope">
		    		{{scope.row.depart}}
		    	</template>
		     </el-table-column>
		     <el-table-column label="角色">
		     	<template scope="scope">
		    		{{scope.row.role}}
		    	</template>
		     </el-table-column>
		     <el-table-column label="状态" width="150">
		     	<template scope="scope">
		    		<i-switch size="large"  >
				        <span slot="open" v-model=""true"">激活</span>
				        <span slot="close">禁用</span>
				    </i-switch>
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
	  		
		<div class="block qx-user-page">
			<el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage3"
		      :page-size="100"
		      layout="total, prev, pager, next"
		      :total="1000">
		    </el-pagination>
		</div>
	</div>	
</template>

<script>
  export default {
  	name:"user",
    data() {
      return {
      	value5:"",
      	val3:true,
      	
      	currentPage3:4,
       /* tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          depart:"测试",
          sex:"女",
          email:"133332@qq.com",
          userStatus:"可用",
		  role:"普通员工",
		  workNo:"6010200211",
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          depart:"研发",
          sex:"女",
          email:"132@qq.com",
          userStatus:"可用",
          role:"普通员工",
          workNo:"7010200211",
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          depart:"财务处",
          sex:"男",
          workNo:"6010200212",
           email:"1372@qq.com",
            userStatus:"禁用",
           role:"普通员工",
           workNo:"6010200215",
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          depart:"综合管理",
          sex:"女",
          email:"1232@qq.com",
          userStatus:"可用",
          role:"管理员",
          workNo:"6010200235",
          address: '上海市普陀区金沙江路 1516 弄'
        }],*/
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: []
      }
    },
    computed:{
    	userList(){
    		return this.$store.getters.userList;
    	}
    },
    created() {
        this.$store.dispatch('getUserList');
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(){},
      handleCurrentChange(){}
    }
  }
</script>

<style>	
	.qx-user-page{
		margin: 20px 0 10px;
	}
</style>
	
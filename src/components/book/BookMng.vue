<template>
	<div class="qx-main-con">
		<div class="clearFix">
			<el-button type="primary" icon="el-icon-plus" class="qx-set-addBtn">添加</el-button>			
		  	<el-form :inline="true" class="qx-user-searchInp">
		  		<el-form-item label="类型：">
				  	 <el-select v-model="value5" size="small" clearable placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				 </el-form-item>
				 <el-form-item label="状态：">
				  	 <el-select v-model="value5" size="small" clearable placeholder="请选择">
					    <el-option key="0" label="待借" value="待借"></el-option>
					    <el-option key="1" label="借出" value="借出"></el-option>
					 </el-select>
				 </el-form-item>
				 <el-form-item label="书名：">
				  	 <el-autocomplete
				      class="inline-input"
				      v-model="state1"
				      :fetch-suggestions="querySearch"
				      placeholder="请输入内容"
				      :trigger-on-focus="false"
				      @select="handleSelect" size="small">
				    </el-autocomplete>
				 </el-form-item>
				 <el-form-item>
				  	<el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
				 </el-form-item>
		  	</el-form>
		</div>		
		<el-table :data="bookMngList" borderstyle="width: 100%">
		 	<el-table-column type="selection"></el-table-column>
		 	<el-table-column label="书号" width="100">
		 		<template scope="scope">
		    		{{scope.row.bookNo}}
		    	</template>
		 	</el-table-column>
		    <el-table-column label="书名" width="150">
		      <template scope="scope">
		        <el-popover trigger="hover" placement="top">
		          <p>姓名: {{ scope.row.bookName }}</p>
		          <p>简介: {{ scope.row.bookBreif }}</p>
		          <div slot="reference" class="name-wrapper">
		            <el-tag>{{ scope.row.bookName }}</el-tag>
		          </div>
		        </el-popover>
		      </template>
		    </el-table-column>
		     <el-table-column label="类型" width="120">
		    	<template scope="scope">
		    		{{scope.row.bookType}}
		    	</template>
		    </el-table-column>
		    <el-table-column label="作者" width="120">
		    	<template scope="scope">
			        {{ scope.row.bookAuthor }}			       
		      </template>
		    </el-table-column>
		     <el-table-column label="出版社" width="150">
		     	<template scope="scope">
		    		{{scope.row.bookPublish}}
		    	</template>
		     </el-table-column>
		     <el-table-column label="价格" width="100">
		     	<template scope="scope">
		    		{{scope.row.bookPrice}}
		    	</template>
		     </el-table-column>
		     <el-table-column label="状态" width="80">
		     	<template scope="scope">
		    		<i-switch size="large"  >
				        <span slot="open">可借</span>
				        <span slot="close">借出</span>
				    </i-switch>
		    	</template>
		     </el-table-column>
		    <el-table-column label="操作">
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
		      :current-page.sync="currentPage"
		      :page-size="pagesize"
		      layout="total, prev, pager, next"
		      :total="1000">
		    </el-pagination>
		</div>
	</div>	
</template>

<script>
  export default {
  	name:"bookMng",
    data() {
      return {
      	pagesize:10,
      	restaurants: [],
        state1: '',
        state2: '',
      	value5:"",
      	val3:true,
      	
      	currentPage:1,
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
    	bookMngList(){
    		return this.$store.getters.bookMngList;
    	}
    },
    created() {
        this.$store.dispatch('getBookMngList');
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(){},
      handleCurrentChange(){},
     
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" }
        ]
      },
       handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>

<style>	
	.qx-user-searchInp{
		float: right;
	}
</style>
	
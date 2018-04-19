<template>
	<div class="qx-main-con">
		<div class="clearFix">
			<div class="qx-userIndex-logo" >				
				<span class="qx-userIndex-logoFont"></span>
			</div>
			<el-form :inline="true" class="qx-user-searchInp">
		  		<el-form-item label="状态：">
				  	 <el-select v-model="value5" size="small" clearable placeholder="请选择">
					    <el-option
					      v-for="item in options"
					      :key="item.value"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					 </el-select>
				 </el-form-item>
				 <el-form-item label="搜索：" class="">
				  	 <el-autocomplete
					      class="inline-input"
					      v-model="state1"
					      :fetch-suggestions="querySearch"
					      placeholder="请输入内容"
					      :trigger-on-focus="false"
					      @select="handleSelect" size="small">
					    <el-select v-model="select" slot="prepend" placeholder="请选择">
					      <el-option label="书名" value="1"></el-option>
					      <el-option label="作者" value="2"></el-option>					     
					    </el-select>
					  </el-autocomplete>
				 </el-form-item>				  
				 <el-form-item>
				  	<el-button type="primary" size="small" icon="el-icon-search">查询</el-button>
				 </el-form-item>
		  	</el-form>
		</div>
		<div class="qx-userIndex-con">
			<ul>
				<li class="clearFix qx-userIndex-li" v-for="i in list">
					<div class="qx-userIndex-liLeft">
						<img src="https://img3.doubanio.com/mpic/s27264181.jpg"/>
					</div>
					<div class="qx-userIndex-liRight">
						<div class="clearFix qx-userIndex-liTitle">
							<h3 class="qx-liTitle-left">解忧杂货店</h3>
							<span class="qx-liTitle-right"><em>30</em>人借过</span>
						</div>
						
						<p class="author">
        					[日] 东野圭吾 / 李盈春 / 南海出版公司 / 2014-5 / 39.50元
      					</p>
      					<p>
      						现代人内心流失的东西，这家杂货店能帮你找回——
							僻静的街道旁有一家杂货店，只要写下烦恼投进卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答。
							因男友身患绝... 
      					</p>
					</div>
					<div class="qx-userIndex-liBtns">						
						<el-button type="primary" icon="el-icon-document"  class="qx-userIndex-btn qx-userIndex-btnColor1">借书</el-button>
						<el-button type="primary" icon="el-icon-star-on"  class="qx-userIndex-btn qx-userIndex-btnColor2">收藏</el-button>
					</div>
				</li>
			</ul>
		</div>
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
	import "@/assets/font/iconfont.css"
	export default{
		name:"userIndex",
		data(){
			return{
				select:"",
				list:[1,1,1,1,1],
				restaurants: [],
				
				value5:"",
				state1: '',
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
		        selectedOptions2: [],
		        currentPage3:4,
		    }
		},
		methods: {
			querySearch(queryString, cb) {
		        var restaurants = this.restaurants;
		        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
		        // 调用 callback 返回建议列表的数据
		        cb(results);
		    },
		    handleSelect(item) {
		        console.log(item);
		     },
		    handleSizeChange(){},
      		handleCurrentChange(){},
		}
		
	}
</script>

<style scoped>

	.qx-userIndex-logo{		
		float: left;
		
	}
	.qx-userIndex-logoFont{
		display: inline-block;
		vertical-align: top;
		width: 100px;
		height: 50px;
		background: url('../../assets/searchBook.png') no-repeat 0 0
	}
	.qx-userIndex-con{
		padding: 0 0 10px 0;
		border-bottom: 1px solid #ddd;
	}
	.qx-userIndex-li{
		border-top: 1px dashed #ddd;
		padding: 20px 0 10px;
		height: 120px;
	}
	.qx-userIndex-liLeft{
		float: left;
		margin-right: 30px;
	}
	.qx-userIndex-liLeft img{
		width: 90px;
		height: 90px;
	}
	.qx-userIndex-liRight{
		width: 50%;
		float: left;
		box-sizing: border-box;
		overflow: hidden;
	}
	.qx-userIndex-liTitle{
		 margin: 0 5px 15px 0;
	}
	.qx-liTitle-left{
		float: left;
		font: bold 15px Arial, Helvetica, sans-serif;
	    color: #072;
	    line-height: 150%;
	}
	.qx-liTitle-right{
		float: right;
		font-size: 12px;
		 font-style: italic;
		 color: #bbb;
	}
	.qx-liTitle-right em{
		font-size: 18px;
		color: #409EFF;
	}
	.qx-userIndex-liBtns{
		float: right;
		margin-right: 20px;
		height: 100%;
	}
	.qx-userIndex-btn{
		vertical-align: middle;
		border-radius: 15px;
	}
	.qx-userIndex-btnColor1{
		background-color: #fff;
		color: #409EFF;
		border: 1px solid #409EFF;
	}
	.qx-userIndex-liBtns:before{
		content: "";
		display: inline-block;
		vertical-align: middle;
		height: 90px;
		width: 0;
	}
	.qx-userIndex-btnColor2{
		background-color: #fff;
		color: palevioletred;
		border: 1px solid palevioletred;
	}
	.qx-userIndex-btnColor2:hover{
		background-color: palevioletred;
		color: #fff;
		border: 1px solid palevioletred;
	}
</style>
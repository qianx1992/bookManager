<template>
	<div class="clearFix qx-fistStyle qx-main-con" >
		<div class="qx-first-rightMain">
			<el-row class="qx-first-data">
			  <el-col :span="8">
			  	<div class="grid-content bg-purple qx-first-static qx-firstStat-color1" >
			  		<div class="qx-stat-icon">
			  			<i class="el-icon-edit"></i>
			  		</div>
			  		<h3 class="qx-stat-num">17<span>个</span></h3>
			  		<h5 class="qx-stat-con">待办未处理</h5>
			  	</div>			  
			  </el-col>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple-light qx-first-static qx-firstStat-color2">
			  		<div class="qx-stat-icon">
			  			<i class="el-icon-edit"></i>
			  		</div>
			  		<h3 class="qx-stat-num">17<span>个</span></h3>
			  		<h5 class="qx-stat-con">待办未处理</h5>
			  	</div>
			  </el-col>
			  <el-col :span="8">
			  	<div class="grid-content bg-purple qx-first-static qx-firstStat-color3">
			  		<div class="qx-stat-icon">
			  			<i class="el-icon-edit"></i>
			  		</div>
			  		<h3 class="qx-stat-num">17<span>个</span></h3>
			  		<h5 class="qx-stat-con">待办未处理</h5>
			  	</div>
			  </el-col>
			</el-row>
			<div class="qx-stat-pic qx-first-line">
				<div id="lineWeek" :style="{width: '98%', height: '310px'}"></div>
			</div>			
			<el-row>
				 <el-col :span="12">
				 	<div id="barDepart" class="qx-stat-pic" :style="{width: '95%', height: '300px'}"></div>
				 </el-col>
				<el-col :span="12">
					<div id="pieTtype" class="qx-stat-pic" :style="{width: '95%', height: '300px'}"></div>
				</el-col>
			</el-row>
		</div>
		<div class="qx-rgihtAside">
			<div class="qx-aside-panel qx-aside-undone">
				<div class="qx-asidePanel-head">
					<i class="el-icon-edit qx-aside-icon"></i>
					代办任务
				</div>
				<div class="qx-asidePanel-body">
					<ul class="qx-asidePanel-con">
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="qx-aside-panel qx-aside-notice">
				<div class="qx-asidePanel-head">
					<i class="el-icon-edit qx-aside-icon"></i>
					通知公告
				</div>
				<div class="qx-asidePanel-body">
					<ul class="qx-asidePanel-con">
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="qx-aside-panel qx-aside-messageBoard">
				<div class="qx-asidePanel-head">
					<i class="el-icon-edit qx-aside-icon"></i>
					留言板
				</div>
				<div class="qx-asidePanel-body">
					<ul class="qx-asidePanel-con">
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
						<li>
							<a href="javascript:;" target="_blank">【通知】新版员工守则，即日执行</a>
								<span class="time">2016-07-21</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	import echarts from 'echarts';
	export default{
		name:"first",
		data(){
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted(){
			//
		    this.drawLine();
		},
		methods: {
			//各部门借书--柱状图
			//每种类型书的数量--饼状图
			//每日借书、还书情况--折线图
			//书籍总量，已借出总量，书籍丢失量
		    drawLine(){
		        // 基于准备好的dom，初始化echarts实例
		        let barDepart = echarts.init(document.getElementById('barDepart'));
		        // 绘制图表
		        barDepart.setOption({
		            title: { 
		            	text: '在Vue中使用echarts',
		            	textStyle:{
		            		fontSize:14
		            	}
		            },
		            tooltip: {},
		            toolbox: {
				        show: true,
				        feature: {				            
				            dataView: {readOnly: false},
				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				        }
				    },
		            xAxis: {
		                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋"]
		            },
		            yAxis: {},
		            series: [{
		                name: '销量',
		                type: 'bar',
		                data: [
			                {
			                	value: 5, itemStyle:{ normal:{color:'#f29503'}}
			                },
			                {
			                	value: 20, itemStyle:{ normal:{color:'#8775a7'}}
			                },
			                {
			                	value: 36, itemStyle:{ normal:{color:'#14aae4'}}
			                },
			                {
			                	value: 10, itemStyle:{ normal:{color:'#44b6ae'}}
			                },
			                {
			                	value: 10, itemStyle:{ normal:{color:'#67C23A'}}
			                }
			            ]
		            }]
		        });
		        let lineWeek = echarts.init(document.getElementById('lineWeek'));
		        lineWeek.setOption( {
				    title: {
				        text: '未来一周气温变化',
				        subtext: '纯属虚构',
				        textStyle:{
		            		fontSize:14
		            	}
				    },
				    tooltip: {
				        trigger: 'axis'
				    },
				    legend: {
				        data:['最高气温','最低气温']
				    },
				    toolbox: {
				        show: true,
				        feature: {
				            dataZoom: {
				                yAxisIndex: 'none'
				            },
				            dataView: {readOnly: false},
				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    xAxis:  {
				        type: 'category',
				        boundaryGap: false,
				        data: ['周一','周二','周三','周四','周五','周六','周日']
				    },
				    yAxis: {
				        type: 'value',
				        axisLabel: {
				            formatter: '{value} °C'
				        }
				    },
				    series: [
				        {
				            name:'最高气温',
				            type:'line',
				            data:[11, 11, 15, 13, 12, 13, 10],
				            markPoint: {
				                data: [
				                    {type: 'max', name: '最大值'},
				                    {type: 'min', name: '最小值'}
				                ]
				            },
				            markLine: {
				                data: [
				                    {type: 'average', name: '平均值'}
				                ]
				            },
				            itemStyle : {    
				                normal : {    
				                    lineStyle:{    
				                        color:'#14aae4'    
				                    }    
				                }    
				            } 
				        },
				        {
				            name:'最低气温',
				            type:'line',
				            data:[1, -2, 2, 5, 3, 2, 0],
				            markPoint: {
				                data: [
				                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
				                ]
				            },
				            markLine: {
				                data: [
				                    {type: 'average', name: '平均值'},
				                    [{
				                        symbol: 'none',
				                        x: '90%',
				                        yAxis: 'max'
				                    }, {
				                        symbol: 'circle',
				                        label: {
				                            normal: {
				                                position: 'start',
				                                formatter: '最大值'
				                            }
				                        },
				                        type: 'max',
				                        name: '最高点'
				                    }]
				                ],				                
				            },
				            itemStyle : {    
				                normal : {    
				                    lineStyle:{    
				                        color:'#f29503'    
				                    }    
				                }    
				            }
				        }
				    ]
				});
		    
		    	let pieTtype= echarts.init(document.getElementById('pieTtype'));
		    	pieTtype.setOption({		    		
				    tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    toolbox: {
				        show: true,
				        feature: {				            
				            dataView: {readOnly: false},
				            magicType: {type: ['line', 'bar']},
				            restore: {},
				            saveAsImage: {}
				        }
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'left',
				        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				    },
				    series: [
				        {
				            name:'访问来源',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: false,
				                    position: 'center'
				                },
				                emphasis: {
				                    show: true,
				                    textStyle: {
				                        fontSize: '30',
				                        fontWeight: 'bold'
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				                {value:335, name:'直接访问',itemStyle:{ normal:{color:'#f29503'}}},
				                {value:310, name:'邮件营销',itemStyle:{ normal:{color:'#8775a7'}}},
				                {value:234, name:'联盟广告',itemStyle:{ normal:{color:'#14aae4'}}},
				                {value:135, name:'视频广告',itemStyle:{ normal:{color:'#FA5555'}}},
				                {value:1548, name:'搜索引擎',itemStyle:{ normal:{color:'#67C23A'}}}
				            ]
				        }
				    ]
		    	});
		    }
  		}
	}
</script>

<style scoped>
	.layout-content-main{
		background-color: #ecf0f5 ;
		background-origin: padding-box;
	}
	.qx-fistStyle{
		background-color: #ecf0f5 ;
		background-origin: padding-box;
		padding: 10px;
	}
	.qx-first-rightMain{
		float:left;
		width: 70%;
	}
	.qx-rgihtAside{
		float: left;
		width: 30%;
	}
	.qx-first-data{
		margin: 0 0 10px;
	}
	.qx-first-static{
		position: relative;
		height: 105px;
		padding: 20px 0 0 15px;
		margin: 0 10px 10px 0;
		color: #fff;
	}
	.qx-firstStat-color1{
		background-color: #14aae4;
	}
	.qx-firstStat-color2{
		background-color: #44b6ae;
	}
	.qx-firstStat-color3{
		background-color: #f29503;
	}
	.qx-stat-icon{
		position: absolute;
	    top: 18px;
	    font-size: 40px;
	    opacity: .3;
	}
	.qx-stat-num{
		font: 28px/1.1 "微软雅黑";
	    font-weight: 500;
	    padding-left: 70px;
		margin: 5px 0 10px;
	}
	.qx-stat-num span{
		font-size: 12px;
    	padding-left: 5px;
	}
	.qx-stat-con{
		font: 12px/1px "微软雅黑";
	    margin-top: 1px;
	    padding-left: 70px;
	}
	.qx-stat-pic{
		background-color: #fff !important;
		padding: 10px;
		margin: 0 0 15px;
		border: 1px solid #e6e6e6;
		box-sizing: border-box;
	}
	.qx-first-line{
		width: 98%;
	}
	.qx-aside-panel{			
		height: 250px;
	    border: 1px solid #e6e6e6;
	    background-color: #fff;
	    margin: 0 0 10px 10px;
	}
	.qx-asidePanel-head{
		color: #777;
	    background-color: #fff;
	    border-bottom: 1px solid #e6e6e6;
	    padding: 10px 10px;
	    position: relative;
	}
	.qx-aside-icon{
		font-size: 12px;
		padding-right: 5px;
	}
	.qx-asidePanel-body{
		padding: 10px;
	}
	.qx-asidePanel-con li{
		line-height: 27px;
	    list-style-type: none;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	li a{
		color: #475059;
	}
	li span{
		color: #a1a1a1;
	    float: right;
	    padding-right: 5px;
	}
</style>
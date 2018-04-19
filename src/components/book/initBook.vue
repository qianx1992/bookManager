<template>
	<div>
		<button @click="init">点击</button>
		<ul>
			<li v-for="l in list">{{l.title}}</li>
		</ul>
	</div>
</template>

<script>
	import fetchJsonp from "fetch-jsonp";
	import http from "axios";
	
	export default{
		name:"initBook",
		data(){
			return {
				currentPage:1,
				keyword:"党员",
				list:[],
			}
		},
		methods:{
			init(){
	
				fetchJsonp("https://api.douban.com/v2/book/search?q="
				+this.keyword+"&start="+(this.currentPage-1)*20,{
					jsonpCallback:"callback",
					jsonpCallbackFunction:"miaov"
				}).then(response=>{
					return response.json();
				}).then(data=>{
					this.list=data.books;
					if(data.books.length>0){
						for(var i=0;i<data.books.length;i++){						
							console.log(data.books[i].title);

							http({
								method: 'POST',
								url:"/api/book/add",
								data:{
									bookNo:data.books[i].id,
									bookName:data.books[i].title,
									bookAuthor:data.books[i].author.join(","),
									bookPublish:data.books[i].publisher,
									bookPrice:data.books[i].price,
									bookBrief:data.books[i].summary,
									bookPicture:data.books[i].image,
									bookType:"政治",
									bookState:"空闲"
								},
              					 /*requestHeader:{'Content-Type':'application/x-www-form-urlencoded'},*/								
							});
						}
					}
					
					/*console.log(data);*/
					/*this.pages=Math.ceil(data.total/this.pageNum);*/
				});
			}
		}
	}
	
</script>


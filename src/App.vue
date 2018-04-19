<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

	
export default {
  name: 'app'
}
</script>
<style>
	.clearFix:after{
		content: "";
		display: block;
		clear: both;
	}
	.qx-set-addBtn{
		float: left;
	}
	.qx-main-con{
		padding: 10px;
	}
	.qx-user-searchInp{
		float: right;
	}
	.qx-user-page{
		margin: 20px 0 0;
	}
</style>

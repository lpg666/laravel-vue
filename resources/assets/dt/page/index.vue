<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
        overflow: hidden;
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
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        font-size: 14px;
        display: block;
        float: left;
        color: #9ba7b5;
        height: 60px;
        line-height: 60px;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .layout-ceiling{
        float: right;
        overflow: hidden;
        margin-right: 15px;
    }
    .layout-ceiling-main span{
        margin: 0 10px;
        height: 60px;
        line-height: 58px;
        display: block;
        float: left;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1" theme="dark" width="auto">
                <div class="layout-logo-left"></div>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">导航一</span>
                    </template>
                    <MenuItem name="1-1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">选项 1</span>
                    </MenuItem>
                </Submenu>
                <MenuItem name="2">
                    <Icon type="ios-keypad" :size="iconSize"></Icon>
                    <span class="layout-text">选项 2</span>
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">选项 3</span>
                </MenuItem>
            </Menu>
            </Col>
            <Col :span="spanRight">
            <div class="layout-header">
                <Button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </Button>
                <div class="layout-ceiling">
                    <div class="layout-ceiling-main">
                        <a href="#">注册登录</a> <span>|</span>
                        <a href="#">帮助中心</a> <span>|</span>
                        <a href="#">安全中心</a> <span>|</span>
                        <a href="#">服务大厅</a>
                    </div>
                </div>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="/index">首页</BreadcrumbItem>
                    <BreadcrumbItem href="/index/aaa">应用中心</BreadcrumbItem>
                    <BreadcrumbItem>某应用</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">内容区域</div>
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
        data () {
            return {
                spanLeft: 3,
                spanRight: 21
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 3 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 3) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 3;
                    this.spanRight = 21;
                }
            }
        },
        mounted(){
            axios.get('v1/auth/register')
                .then(data =>{
                    console.log(data);
                })
                .catch(err =>{

                })
        }
    }
</script>

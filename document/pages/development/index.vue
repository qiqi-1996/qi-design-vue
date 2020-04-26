<template>
    <document>
        <div class="container">

            <q-title :level="2" colorful>编辑器配置</q-title>

            <q-panel class="block clearfloat" border @click="toggleCodesnippets" style="cursor: pointer">
                <div class="left">
                    <q-text><strong>项目代码提示</strong></q-text>
                    <q-footnote>激活后将自动向当前项目作用域中写入代码提示配置（仅限 VSCode）</q-footnote>
                </div>
                <div class="right">
                    <q-button size="small" v-show="config.codesnippetsUpdate" @click.stop="configPutCodesnippets">配置有更新，重新写入</q-button>
                    <q-switch v-model="config.codesnippets" style="pointer-events: none;"></q-switch>
                </div>
            </q-panel>

            <q-title :level="2" colorful>发布工具</q-title>
            <q-footnote>使用前需确保环境配置正确</q-footnote>

            <q-panel class="block" border>
                <q-panel class="logs" secondary>
                    <q-footnote>终端日志</q-footnote>
                    <span v-for="(item, index) in state.logs" :key="index">
                        <q-text v-if="item.type==='message'">{{item.message}}</q-text>
                        <q-text v-else color="enjolras"><strong>{{item.message}}</strong></q-text>
                        <q-divider></q-divider>
                    </span>
                </q-panel>

                <!--  -->

                <div class="left">
                    <q-text>将编译文档并推送至远端分支及执行部署</q-text>
                    <q-footnote>远端分支地址配置在 ...script/publish-document.js 中</q-footnote>
                </div>
                <div class="right">
                    <q-button type="primary" :icon="publishIcon" :busy="state.publishDocument==='working'" @click="doPublishDocument">{{state.publishDocument | publishDocumentStateToText}}</q-button>
                </div>

                <!--  -->

                <div class="left">
                    <q-text>将重新编译项目并推送 GitHub 和 NPM</q-text>
                    <q-footnote>当前版本：{{state.version}}</q-footnote>
                </div>
                <div class="right">
                    <q-input v-model="config.version" placeholder="新版本号" style="width: 96px;"></q-input>
                    <q-button type="primary" :icon="publishIcon" :busy="state.publishLibrary==='working'" @click="doPublishLibrary">{{state.publishLibrary | publishLibraryStateToText}}</q-button>
                </div>
            </q-panel>

        </div>
    </document>
</template>

<style lang="less" scoped>
@import "~@/core/standard.less";

.container {
    max-width: 50%;
    min-width: 600px;
    margin: 0px auto;
    margin-top: 5*@grid;
}

.block {
    padding: 3*@grid;
    padding-bottom: @grid;

    .q-text, .q-footnote {
        margin: 0px;
    }


    .left, .right {
        width: calc(~"50% - 8px");
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 2*@grid;
    }

    .right {
        text-align: right;
        * {
            margin-left: @grid;
            display: inline-block;
            vertical-align: middle;
        }
    }
}

.logs {
    max-height: 150px;
    padding: @grid;
    overflow: auto;
    margin-bottom: 2*@grid;

    .q-divider {
        margin: @grid/2;
        opacity: 0.5;
    }
}
</style>

<script>
import axios from "axios";

export default {
    data(){
        return {
            activated: false,
            state: {
                version: "",
                logs: [],
                publishDocument: "",
                publishLibrary: "",
            },
            config: {
                version: "",
                codesnippets: false,
                codesnippetsUpdate: false
            }
        }
    },
    computed: {
        publishIcon(){
            if(this.state.publishDocument == "error"){
                return "error";
            }else if(this.state.publishDocument == "done"){
                return "correct";
            }else{
                return "upload";
            }
        }
    },
    async mounted(){

        var that = this;
        this.activated = true;

        // 获取代码提示配置
        (async ()=>{
            let response = (await axios.get("/devapi/code-snippets")).data;
            if(response.data.state !== "update"){
                this.config.codesnippets = response.data.state;
            }else{
                this.config.codesnippets = true;
                this.config.codesnippetsUpdate = true;
            }
            this.$watch("config.codesnippets", (newValue)=>{
                // 因配置需异步获取，所以需要先设置初始数据，再添加监听
                if(newValue){
                    axios.put("/devapi/code-snippets");
                }else{
                    axios.delete("/devapi/code-snippets");
                }
            });
        })();

        this.getPublishDocumentState();
        this.getPublishLibraryState();
        this.getLogs();
        this.getVersion();
    },
    beforeDestroy(){
        this.activated = false;
    },
    methods: {
        configPutCodesnippets(){
            axios.put("/devapi/code-snippets");
            this.config.codesnippetsUpdate = false
        },
        toggleCodesnippets(){
            this.config.codesnippets = !this.config.codesnippets;
        },
        doPublishDocument(){
            this.state.publishDocument = "working";
            axios.post("/devapi/publish-document");
        },
        doPublishLibrary(){
            this.state.publishLibrary = "working";
            axios.post("/devapi/publish-library", { version: this.config.version });
        },
        async getPublishDocumentState(){
            let response = (await axios.get("/devapi/publish-document")).data;
            this.state.publishDocument = response.data.state;
            if(this && this.activated){
                setTimeout(this.getPublishDocumentState, 1000);
            }
        },
        async getPublishLibraryState(){
            let response = (await axios.get("/devapi/publish-library")).data;
            this.state.publishLibrary = response.data.state;
            if(this && this.activated){
                setTimeout(this.getPublishLibraryState, 1000);
            }
        },
        async getLogs(){
            let response = (await axios.get("/devapi/logs")).data;
            this.state.logs = response.data.logs;
            if(this && this.activated){
                setTimeout(this.getLogs, 1000);
            }
        },
        async getVersion(){
            let response = (await axios.get("/devapi/version")).data;
            this.state.version = response.data.version;
            if(this && this.activated){
                setTimeout(this.getVersion, 1000);
            }
        },
    },
    filters: {
        publishDocumentStateToText(value){
            if(value==""){
                return "发布文档";
            }else if(value=="working"){
                return "正在发布文档";
            }else if(value=="error"){
                return "文档发布失败";
            }else if(value=="done"){
                return "文档发布成功";
            }
        },
        publishLibraryStateToText(value){
            if(value==""){
                return "发布新版本";
            }else if(value=="working"){
                return "正在发布新版本";
            }else if(value=="error"){
                return "新版本发布失败";
            }else if(value=="done"){
                return "新版本发布成功";
            }
        }
    }
}
</script>
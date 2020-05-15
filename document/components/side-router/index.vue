<template>
    <div class="container clearfloat">
        <div class="layout-left">
            <div style="margin: 0px">
                <div v-for="(item, index) in data" :key="index">

                    <div v-if="item.type === 'divider'">
                        <q-divider class="router-divider"></q-divider>
                    </div>

                    <div v-else-if="item.type === 'category'">
                        <q-footnote class="router-category">{{i18n(item.title)}}</q-footnote>
                    </div>

                    <div v-else class="router-link" @click="handleClickRouterLink(item, index)">
                        <item
                            :active="isActive(item.to)"
                            :image-light="item.imageLight"
                            :image-dark="item.imageDark"
                        >
                        {{i18n(item.title)}}
                        </item>
                    </div>

                </div>

                <q-divider class="vertical-divider" type="vertical"></q-divider>
            </div>
        </div>
        <div class="layout-right">
            <div class="center" style="margin: 120px;">
                <transition :name="direction">
                    <router-view class="router-view"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.container {
    width: 100%;
}

.margin-block {
    margin: 5*@grid;
    height: 100%;
}

.layout-left {
    float: left;
    width: 280px;
    position: relative;
    overflow: hidden;

    .router-category {
        margin: 2*@grid;
        margin-left: 3*@grid;
    }

    .router-divider {
        margin: @grid 0px;
    }

    .router-link {
        cursor: pointer;
    }

    .vertical-divider {
        position: absolute;
        right: 0px;
        top: 0px;
        height: 100%;
    }
    
    a {
        text-decoration: none;
    }
}

.layout-right {
    width: calc(~"100% - 280px");
    float: right;
    position: relative;

    .router-view {
        width: calc(~"100% - 240px");
        position: absolute;
        top: 5*@grid;
    }

}

/******* Transition *******/

.up-enter-active {
    .transition(all, 1000ms);
}

.up-leave-active {
    .transition(all, 500ms);
}

.up-enter {
    transform: translate(0px, 32px);
    opacity: 0;
}

.up-leave-to {
    // transform: scale(0.9);
    transform: translate(0px, -32px);
    opacity: 0;
}

.down-enter-active {
    .transition(all, 1000ms);
}
.down-leave-active {
    .transition(all, 500ms);
}

.down-enter {
    transform: translate(0px, -32px);
    opacity: 0;
}

.down-leave-to {
    transform: translate(0px, 32px);
    // transform: scale(0.9);
    opacity: 0;
}
</style>

<script>
import item from "./item.vue";

export default {
    components: {
        item
    },
    props: {
        data: Array,
        i18n: {
            default: ()=>function(value){
                return value;
            }
        }
    },
    data(){
        return {
            current: 0,
            direction: "up"
        }
    },
    methods: {
        isActive(route){
            let value = location.hash.replace("#","");
            return (value===route);
        },
        handleClickRouterLink(option, index) {
            if(index>this.current){
                this.direction = "up";
            }else{
                this.direction = "down";
            }
            this.current = index;
            this.$nextTick(()=>{
                this.$router.push({path: option.to});
            })
        }
    }
}
</script>
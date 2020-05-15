<template>
    <div :class="className">
        <div class="vacancy" v-show="vacancy==='above'"></div>

        <q-hover
            class="node-self"
            @click="toggleVExpand"
            :style="{ paddingLeft: levelPaddingLeft }"
            :hover="empty?{ color: 'none', border: 'none'}:{}"
            :actived="{color:'inherit'}"
            :active="vacancy==='inside'"

            :draggable="!empty"
            @drag.native="handleDrag"
            @dragover.native.prevent="handleDragOver"
            @dragleave.native.prevent="handleDragLeave"
            @drop.native="handleDrop"
            ref="node-self"
        >
            <q-icon v-show="children" :class="vexpand && nodeIcon=='right'?'rotate':''" :name="nodeIcon || 'right'"></q-icon>
            <q-icon v-show="!children" :name="leafIcon || ''"></q-icon>
            <q-text v-if="!empty">{{text}}</q-text>
            <div v-else>
                <q-footnote>Empty</q-footnote>
            </div>
        </q-hover>

        <div class="vacancy" v-show="vacancy==='below'"></div>

        <div
            v-if="children && !empty"
            :class="['node-children', expanding?'q-transition':'']"
            :style="{ height:domheight }"
            ref="node-children"
            @transitionend="handleExpanded"
        >
            <!-- <q-tree-node
                v-if="!children.length"
                empty
                :_level="(_level + 1)"
                :index="nextIndex(0)"
            ></q-tree-node> -->

            <q-tree-node
                v-for="(item, index) in children"
                :key="item.id || index"
                :index="nextIndex(index)"

                :text="item.text"
                :children="item.children"
                :_level="(_level + 1)"

                :nodeIcon="nodeIcon"
                :leafIcon="leafIcon"
            ></q-tree-node>
        </div>

    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

.node-self {
    padding: @grid;
    cursor: pointer;

    .q-icon, .q-text {
        display: inline-block;
        vertical-align: middle;
    }

    .q-icon {
        .font-note();
        width: 12px;
        margin-right: @grid/2;
        opacity: 0.5;
        margin-left: @grid;
    }

    .rotate {
        transform: rotate(90deg);
    }

    .q-footnote {
        padding: 0px;
        margin: 0px;
        line-height: 0px;
        margin-top: -@grid;
    }
}

.customize-icon .q-icon {
    font-size: 20px;
    opacity: 1;
    margin-right: 2*@grid;
    margin-left: @grid;
}

.node-children {
    overflow: hidden;
}

.vacancy {
    margin: -1px;
}

.q-tree-node[class*="theme-light"][class*="color-poe"] .vacancy {
    border-bottom: 2px solid @color-light-foreground;
}

.q-tree-node[class*="theme-dark"][class*="color-poe"] .vacancy {
    border-bottom: 2px solid @color-dark-foreground;
}

.vacancy-colors(@colorname) {
    @varname: "color-@{colorname}";
    .q-tree-node[class*="theme-light"][class*="@{varname}"] .vacancy {
        border-bottom: 2px solid @@varname;
    }

    .q-tree-node[class*="theme-dark"][class*="@{varname}"] .vacancy {
        border-bottom: 2px solid lighten(@@varname, @config-lighten);
    }
}

/******* Colors Apply *******/

.loop(@counter) when (@counter > 0) {
    .loop((@counter - 1));
    @colorname: extract(@color-list, @counter);
    
    .vacancy-colors(@colorname);
}
.loop(length(@color-list));

</style>

<script>
import mixins from "@qiqi1996/qi-design-vue/core/mixins.js";

export default {
    mixins: [mixins],
    props: {
        _level: {
            type: Number,
            default: 0
        },
        index: Array,

        text: String,
        children: Array,

        // 装饰性属性
        nodeIcon: {
            type: String,
            default: "right"
        },
        leafIcon: String,
        empty: Boolean
    },
    data(){
        return {
            meta: {
                name: "tree-node"
            },
            scope: null,

            vexpand: false,
            expanding: false,
            domheight: "0px",

            dragging: false,
            vacancy: false
        }
    },
    computed: {
        className(){
            return this.computeClass({
                "customize-icon": this.nodeIcon != 'right'
            })
        },
        levelPaddingLeft(){
            return ((this._level-1) * 24) + 24 + "px";
        },
    },
    mounted(){
        this.scope = this.findParentByMeta({ name: "tree" });
    },
    methods: {
        toggleVExpand() {
            if(!this.children){
                return;
            }
            this.vexpand = !this.vexpand;
            this.expanding = true;
            if (this.vexpand) {
                this.domheight = "0px";
            } else {
                this.domheight = this.$refs["node-children"].clientHeight + "px";
            }
            this.$nextTick(() => {
                // Didn't work without setTimeout on Vue 2.6.11, See https://github.com/vuejs/vue/issues/11338
                setTimeout(()=>{
                    if (this.vexpand) {
                        this.domheight = this.$refs["node-children"].scrollHeight + "px";
                    } else {
                        this.domheight = "0px";
                    }
                })
            });
        },
        handleExpanded(evt) {
            evt.stopPropagation();
            if (evt.propertyName == "height") {
                this.expanding = false;
                if (this.vexpand) {
                    this.domheight = "auto";
                } else {
                    this.domheight = "0px";
                }
            }
        },
        nextIndex(value){
            if(this.index){
                return Array.from(this.index).concat([value]);
            }else{
                return [value];
            }
        },
        handleDrag(evt){
            if(this.dragging){
                return;
            }
            this.dragging = true;
            this.scope?.handleDragStart({
                index: this.index,
            });
        },
        handleDragOver(evt){
            let mouseY = evt.pageY
            let bound = this.$refs["node-self"].$el.getBoundingClientRect();
            let currentY = bound.top + bound.height/2;
            if(Math.abs(mouseY-currentY) < bound.height/4){
                this.vacancy = "inside";
            }else{
                if(mouseY>currentY){
                    this.vacancy = "below"
                }else{
                    this.vacancy = "above"
                }
            }
        },
        handleDragLeave(evt){
            this.vacancy = "";
        },
        handleDrop(evt){
            this.dragging = false;
            this.scope?.handleDragEnd({
                index: this.index,
                vacancy: this.vacancy,
                empty: this.empty
            });
            this.vacancy = "";
        }
    }
};
</script>
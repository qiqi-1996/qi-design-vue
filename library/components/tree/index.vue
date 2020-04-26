<template>
    <div :class="className('node-container')">
        <q-tree-node
            v-for="(item, index) in data"
            :key="item.id || index"

            :index="[index]"
            :text="item.text"
            :children="item.children"

            :nodeIcon="nodeIcon"
            :leafIcon="leafIcon"
        ></q-tree-node>
    </div>
</template>

<script>
import mixins from "@/core/mixins.js";
import utils from "@/core/utils.js";

function extract(index, exarray){
    console.log(index, exarray);
    if(!exarray){
        return function(array){
            return array[index].children || array[index];
        }
    }else{
        return function(array){
            let e = exarray(array)[index];
            return e.children || e;
        }
    }
}

export default {
    model: {
        prop: "data",
        event: "change"
    },
    mixins: [mixins],
    props: {
        data: {
            type: Array
        },

        nodeIcon: {
            type: String,
            default: "right"
        },
        leafIcon: String,
    },
    data(){
        return {
            meta: {
                id: null,
                name: "tree"
            },
            sourceNode: null
        }
    },
    // mounted(){
    //     utils.event.on("drag-start-" + this.meta.id, this.handleDragStart);
    // },
    methods: {
        className(name, addition = true){
            return this.computeClass({
                [name]:name
            }, addition);
        },
        handleDragStart(node){
            this.sourceNode = node;
        },
        handleDragEnd(targetNode){
            let data = Array.from(this.data);

            let source = data;
            let sourceArray = data;
            let sourceMarkID = utils.id();
            this.sourceNode.index.forEach((nodeindex, index)=>{
                if(index==this.sourceNode.index.length-1){
                    source = source[nodeindex];
                    source._q_mark_id = sourceMarkID;
                    return;
                }
                source = source[nodeindex].children || source[nodeindex];
                if(index==this.sourceNode.index.length-2){
                    sourceArray = source;
                }
            });

            // console.log(source, sourceArray);

            console.log(targetNode);
            let target = data;
            let targetArray = data;
            let targetMarkID = utils.id();
            targetNode.index.forEach((nodeindex, index)=>{
                if(index==targetNode.index.length-1){
                    target = target[nodeindex];
                    if(targetNode.empty===true){
                        return;
                    }else if(target._q_mark_id){
                        targetMarkID = target._q_mark_id;
                    }else{
                        target._q_mark_id = targetMarkID;
                    }
                    return;
                }
                target = target[nodeindex].children || target[nodeindex];
                if(index==targetNode.index.length-2){
                    targetArray = target;
                }
            });

            // console.log(target, targetArray);

            if(sourceMarkID == targetMarkID){
                return;
            }

            for(let i in sourceArray){
                if(sourceArray[i]._q_mark_id == sourceMarkID){
                    sourceArray.splice(i,1);
                    break;
                }
            }

            if(targetNode.empty === false){
                for(let i in targetArray){
                    if(targetArray[i]._q_mark_id == targetMarkID){
                        if(targetNode.vacancy==="above"){
                            let tail = targetArray.splice(i, targetArray.length - i);
                            targetArray.push(source, ...tail);
                        }else if(targetNode.vacancy==="below"){
                            let tail = targetArray.splice(i + 1, targetArray.length - i - 1);
                            targetArray.push(source, ...tail);
                        }else if(targetNode.vacancy==="inside"){
                            if(target.children){
                                target.children.push(source);
                            }else{
                                target.children = [source];
                            }
                        }
                        break;
                    }
                }
            } else {
                targetArray.push(source);
            }

            delete source._q_mark_id;
            if(targetNode.empty !== true){
                delete target._q_mark_id;
            }

            this.$emit("change", data);
        }
    }
}
</script>
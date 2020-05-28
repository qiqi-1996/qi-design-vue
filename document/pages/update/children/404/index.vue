<template>
    <document style="margin-top: 0px;">
        <q-title :level="1" colorful>Sorry, current month didn't have any updates.</q-title>
        <span @click="toggle">
            <q-text v-if="display">😟OMG, really? A full month that update nothing? I must be dead so that this situation will ever happen. Well ... I guess I really walking to the end of my life, so if anyone is reading this message, I bless you will have a wonderful life, better than me, better than anyone.</q-text>
            <q-text v-else>Second thought, most likely is that I just simply forget to update this project. 🤣Anyway, I hope you have a good day.</q-text>
        </span>
    </document>
</template>

<script>
export default {
    data(){
        return {
            display: true,
        }
    },
    methods: {
        toggle(){
            this.display = !this.display;
        }
    }
}
</script>
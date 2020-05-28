<i18n src="./update.i18n.json"></i18n>

<template>
    <side-router :data="data" :i18n="$t.bind(this)"></side-router>
</template>

<script>
import SideRouter from "document/components/side-router/index.vue";

function fixed(value){
    if(value<10){
        return "0"+value;
    }
    return value;
}

export default {
    components: {
        SideRouter
    },
    data(){
        return {
            data: []
        }
    },
    async mounted() {
        let date = new Date();
        let startYear = 2020;
        let startMonth = 4;
        let currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        let data = [
            {
                type: "category",
                title: currentYear
            }
        ];

        this.$router.replace({path: `/update/${currentYear}${fixed(currentMonth)}`});

        while(currentYear > startYear || currentMonth !== startMonth - 1){
            data.push({
                to: `/update/${currentYear}${fixed(currentMonth)}`,
                title: currentMonth
            })
            currentMonth -= 1;
            if(currentMonth < 1){
                currentMonth = 12;
                currentYear -= 1;
                data.push({
                    type: "divider",
                });
                data.push({
                    type: "category",
                    title: currentYear
                });
            }
        }

        this.data = data;
    }
}
</script>
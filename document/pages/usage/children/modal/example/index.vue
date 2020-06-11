<i18n src="./example.modal.i18n.json"></i18n>

<template>
    <div class="container">
        <q-modal name="mymodal">
            <div class="modal-content">
                <q-image class="image" src="~document/assets/image-light.jpg" src-dark="~document/assets/image-dark.jpg"></q-image>
                <q-title :level="1">Paper Rabbit</q-title>
                <q-footnote>Inspired by the Game of <i>To The Moon</i></q-footnote>
                <q-divider></q-divider>
                <q-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et recusandae debitis asperiores nemo nulla iusto assumenda quisquam ipsum quae quo odio esse, quos ut doloremque, sapiente consequuntur at, rerum id doloribus dicta? Dolorum eveniet, dignissimos ad deserunt iste blanditiis nihil animi tempora perferendis at earum atque? Sit, repellat voluptatibus optio assumenda odio ut quam nemo impedit placeat et quidem, in quod ad nisi rem cum fugit quas dolorum explicabo. Doloremque magni ducimus tempora natus. Rem sed minus eius. Asperiores tempore distinctio eligendi voluptas expedita, quo libero fugit itaque nemo modi eaque quos numquam inventore dicta repellat magnam vel obcaecati assumenda, ipsam impedit esse! Libero animi eius fugiat nihil quod ad cupiditate laudantium veritatis earum sit? Officiis consequuntur corrupti quam dignissimos nesciunt velit, vel repellendus natus cumque ex alias beatae saepe assumenda possimus. Impedit dolores placeat reprehenderit, facilis fuga officia tempora libero explicabo culpa nobis quaerat labore eos, velit aspernatur, repellat optio. Nam perspiciatis blanditiis, cum ullam eos dolores quis corrupti quos nihil necessitatibus aut nobis numquam facilis enim delectus unde porro autem quo et animi? Animi cupiditate totam quae. Adipisci ipsam sed similique sequi, dolore, temporibus vel nulla cupiditate atque doloremque modi, dolorem earum ut eligendi molestias accusamus quam enim ad labore odit! Odit culpa quibusdam, magnam incidunt error provident libero hic deserunt eveniet illum doloribus modi facere architecto nesciunt iure! Sit cupiditate ipsam molestiae dignissimos quaerat magni atque, voluptatibus impedit aspernatur perspiciatis quam ducimus recusandae doloremque quisquam repudiandae explicabo voluptate ex iusto provident, blanditiis sapiente laudantium modi facilis et. Illum atque magnam quisquam esse eos, modi sapiente harum. Quos corporis laudantium sed fugit cumque accusantium non quam officia enim, maiores iusto possimus provident. Minima quaerat adipisci laborum vero enim ut facilis cumque quidem in, dolorem facere dignissimos possimus pariatur ab, unde aspernatur, porro aliquid voluptatum mollitia eveniet rerum. Ipsum, neque! Iste sit sequi corporis perspiciatis dicta hic odit! Iure debitis quibusdam at commodi reiciendis, tenetur vel expedita quidem provident.
                </q-text>
                <q-button type="primary" round @click="doClose">{{ $t("close") }}</q-button>
            </div>
        </q-modal>

        <window class="window" source="modal">
            <q-image class="image" mode="cover" src="~document/assets/image-light.jpg" src-dark="~document/assets/image-dark.jpg"></q-image>
            <q-button class="button-details" @click="doOpen" round>{{ $t("checkout-details") }}</q-button>
        </window>
    </div>
</template>

<style lang="less" scoped>
@import "~@qiqi1996/qi-design-vue/core/standard.less";

i {
    font-style: italic;
}

.modal-content {
    width: 800px;
    text-align: center;

    .image {
        width: 100%;
        max-width: unset;
        max-height: unset;
    }

    .q-title {
        margin-bottom: 0px;
    }

    .q-divider {
        margin: 4*@grid 0px;
        // width: calc(~"100% - "2*4*@grid);
    }

    .q-text {
        margin: 0px 3*@grid;
        text-align: justify;
    }

    .q-button {
        width: 120px;
        margin: 3*@grid 0px;
    }
}

.window {
    .image {
        width: 320px;
        height: 240px;
        border-radius: 5px;
        margin-top: 2*@grid;
    }
    
    .button-details {
        display: block;
        width: 150px;
        margin: 0px auto;
        margin-top: 2*@grid;
    }
}

@media screen and (max-width: @responsive-mobile) {
    .modal-content {
        width: 100%;
    }
}
</style>

<script>
export default {
    methods: {
        doOpen(){
            this.$qidesign.open("mymodal");
        },
        doClose(){
            this.$qidesign.close("mymodal");
        }
    }
}
</script>
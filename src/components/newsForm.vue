// Форма для додавання/редагування новин
<template>
    <form v-if="visible" @submit.prevent> <!-- якщо форма видима то показати її і відмінити надсилання запиту за замовчуванням-->
        <label> Заголовок <input type="text" v-model="news.title" required> </label> <br>
        <label> Автор <setInput v-model="news.author"> </setInput></label> <br>
        <label> Текст новин <setInput v-model="news.text_new"> </setInput></label> <br>
        <label> Дата публікації <input type="date" v-model="news.published"> </label> <br>
        <label> Оцінка <input type="number" v-model.number="news.mark" min="1" step="1" max="5"> </label> <br>  
        <input type="button" @click="save" value="Зберегти">     
         <input type="button" @click="hideForm" value="Відміна">   
    </form>
</template>

<script>
import setInput from "./setInput";
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    name: "newsForm",   
    data(){
        return{            
        }
    },
    components:{
        setInput
    },
    computed:{
        ...mapState({
            news:"formNews",
            visible:"formVisible",
            newMode:"formNewMode"
        })
    },
    methods:{
        ...mapActions(["patchNews","postNews"]),
        ...mapMutations(["hideForm"]),
        async save(){
            if (this.newMode)
                await this.postNews(this.news);
            else
                await this.patchNews(this.news);    
            this.hideForm();         
        }
    }
}
</script>
<style scoped>
    form{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: white ;
    }
</style>
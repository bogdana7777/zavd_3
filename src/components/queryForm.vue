//форма для запитів
<template>
    <form @submit.prevent>
       Оцінка від <input type="number" v-model.number="query.minPages"> до <input type="number" v-model.number="query.maxPages"> 
        <input type="button" value="Шукати" @click="search()">
        <input type="button" value="Очистити" @click="reset()">
    </form>
</template>
<script>
import { mapActions } from 'vuex';
export default { 
    data(){
        return{
            query: {
                minPages: null,
                maxPages: null,
                maxPrice: null
            }
        }
    },
    methods:{
        ...mapActions(["getNewssByQuery"]),
        reset(){
            this.query.minPages = this.query.maxPages = this.query.maxPrice = null;
            this.getNewssByQuery(this.query);
        },
        search(){            
            this.getNewssByQuery(this.query);
        }
    }
}
</script>
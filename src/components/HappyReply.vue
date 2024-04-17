<template>
    <div class="all">
        <div class="back">
            <img :src="(props.corrects / props.total) > .3 ? '/src/assets/img/happy.jpg': '/src/assets/img/sad.jpg'" alt="happy">
        </div>
        <div class="out-container">
            <div class="container">
                <template v-if="(props.corrects / props.total) > .3">
                    <h1>¡Felicidades!</h1>
                    <h1>¡Concluiste el test!</h1>
                    <h2>Puntuación</h2>
                </template>
                <template v-else >
                    <h1>¡Oh no!</h1>
                    <h1>¡Concluiste el test pero tu calificación fue muy baja!</h1>
                    <h2>Puntuación</h2>
                </template>
                <p>{{ props.corrects }} / {{ props.total  }}</p>


            </div>
        </div>

        <div class="ball-1">
            <br>
        </div>
        <div class="ball-2">
            <br>
        </div>
        <div class="ball-3">
            <br>
        </div>
        <div class="ball-4">
            <br>
        </div>

        <div class="button-continue">
          <router-link to="/dashboard" rel="noopener">
            <Button class="btn-custom" 
                    data-btn="custom" label="Continuar" 
                    severity="secondary"/>
          </router-link>

        </div>

    </div>
</template>

<script lang="ts" setup>
import Button from 'primevue/button';

const props = defineProps<{
    corrects: number,
    total: number
}>()
</script>

<style scoped>

.button-continue button{
    background-color: #F7B16C;
    color: black;
    width: 100%;
    margin-top: 30px;
    padding: 10px 40px;
    border: transparent;
}

.button-continue{

    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0;
    margin-top: -340px;
}

h1{
    margin-bottom: 5px;
}

h2{
    margin-bottom: 5px;

}

p{
    margin-bottom: 5px;
    background-color: #7C0405;
    padding: 10px;
    border-radius: 100%;
    color: white;
}

.all{
    z-index: 0;
    position: absolute;
    width: 100%;
    /* height: 100vh; */
    /* overflow: hidden; */
}

.out-container{
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-top: 20%;
}

.container{
    background-color: white;
    border: solid 2px #D33F0F;
    border-radius: 100% 122%;
    z-index: 1;
    display: flex;  
    position: absolute;
    justify-content: center;  
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 50px 15px;
    width: 50%;
}

.back{
    object-fit:contain;
    position: absolute;
    z-index: -2;
}

.back img{
    width: 100%;
    object-fit:fill;
    border-radius: 0px 0px 100% 100%;
    margin-top: -100px;
}

.ball-1{
    background-color: #d3400f74;
    z-index: -1;
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    margin: -18% 2%;
}

.ball-2{
    background-color: #d3400f38;
    z-index: -1;
    position: relative;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    margin: 30% 22%;
}
.ball-3{
    background-color: #d3400f36;
    z-index: -1;
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 100%;
    margin: -66% 73% 0%;
}
.ball-4{
    background-color: #d3400f36;
    z-index: -1;
    position: relative;
    width: 320px;
    height: 320px;
    border-radius: 100%;
    margin: 2% 44% 8%;
}

</style>
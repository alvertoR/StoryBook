<template>
  <div id="app">
    <Boton text="i'm a fucking button">
    </Boton>
    <Buton>how you doing</Buton>
    <Buton text="holy" />
  </div>
</template>

<script>
import Boton from './components/Button';
import Buton from './components/Buton';

export default {
  name: 'App',
  components: { Boton, Buton }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

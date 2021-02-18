import Buton from '../components/Buton.vue';

//Objeto de configuración de una story
export default {
  title: 'Button-tailwind',
  component: Buton,
  //decorators: [() => `<section class="bg-green-500 p-10"><story /></section>`]
};

//Creación de una story sin jsx
export const withSlot = () => ({
  component: { Buton },
  template:'<Buton>with fucking Slot</Buton>'
});

/*
withSlot.story = {
  decorators: [() => `<section class="bg-green-800 p-4"><story /></section>`]
}


//Creación de una story con jsx
export const withText = () => ({
  render(){
    return <Buton text="How you doing" />
  }
});
*/
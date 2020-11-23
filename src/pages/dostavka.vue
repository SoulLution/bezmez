<template>
  <div>
    <div class="content flex col">
      <h1 class="text-65 mob:text-36 w-full">Доставка</h1>
      <div class="flex row mob:col ai-fs w-full">
        <div class="flex col w-full mr-8">
          <div class="flex col w-full mb-10">
            <span class="w-full text-24 mb-2 main_about">Доставка осуществляется по Казахстану и странам СНГ нашим транспортом, курьерскими компаниями или транспортными компаниями!</span>
            <span class="w-full greyer pr-6">Для обеспечения приятного и комфортного шопинга стоимость доставки включает в себя комплектацию вашего заказа, фирменную упаковку и курьерскую доставку.</span>
          </div>
        <div class="none mob:flex flex-col" style="width: 100vw;">
          <img class="w-full" src="/static/dostavka.png" style="border-radius: 33px;">
        </div>
          <div class="flex col">
            <h2 class="text-40 mob:text-36 w-full">Сроки доставки</h2>
            <span class="w-full greyer">Мы доставим ваш заказ в срок от трех дней до четырех недель. Сроки доставки зависят от выбранного способа и региона доставки, а также от сроков поставки товара поставщиком или наличия товара на складе.</span>
          </div>
        </div>
        <div class="flex-col mob:none">
          <img src="/static/dostavka.png">
        </div>
      </div>
      <v-partner class="mt-20 mob:col-reverse" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
  .main_about{
    line-height: 162.2%;
  }
  .greyer{
    @extend .text-18, .mt-6, .pl-6, .pr-2;
    color: #5E5E5E;
    opacity: 0.8;
    line-height: 162.2%;
    &:before{
      content: "";
      position: absolute;
      left: 0;
      // height: 100%;
      height: 100px;
      width: 2px;
      background-color: #C4C4C4;
    }
  }
  @media (max-width: 1278px){
    .main_about{
      font-size: 18px;
      line-height: 162.2%;
    }
    .greyer{
      font-size: 16px;
      line-height: 162.2%;
    }

  }
</style>
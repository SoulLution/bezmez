<template>
  <div>
    <div class="content flex col ai-fs">
      <v-partner-slider />
      <div class="flex col w-full text-24 ai-fs font-300">
        <span class="about w-full mt-20">Компания <strong>BEZMEZ</strong> является крупнейшим складом №1 уже 11 лет и занимается  поставками штор и всеми комплектующими в Казахстане, Кыргызстане, Узбекистане! Мы являемся прямыми представителями и производителями лучших фабрик Турции,Германии, Испании, Италии, Франции, Бельгии  и конечно  BEZMEZ.</span>
        <h3 class="">МЫ ЦЕНИМ НАШИХ ПАРТНЕРОВ</h3>
        <span>Наши клиенты - это:</span>
        <ul class="text-18">
          <li>более 300 салон штор</li>
          <li>дизайн студии</li>
          <li>частные дизайнеры</li>
          <li>владельцы цехов мягкой мебели</li>
        </ul>
        <span class="about_sec">На протяжении 11 лет мы работаем с нашими постоянными партнерами. Наша главная миссия- помочь Вам заниматься любимым делом без лишних препятствий!</span>
      </div>
      <h1 class="text-65 mob:text-36">Условия заказа</h1>
      <table>
        <thead class="mob:none">
          <tr>
            <td>Направление</td>
            <td>Условия</td>
            <td>Скидки</td>
            <td>Накопительные скидки</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in table" :key="i" :class="{'active': row.open}">
            <td @click="row.open = !row.open">{{row.purpose}}<img src="/static/select.svg"></td>
            <td :class="{'active': row.conditions_open}">
              <span @click="row.conditions_open = !row.conditions_open">Условия<img src="/static/select.svg"></span>
              <li v-for="(cell, j) in row.conditions" :key=j>
                {{cell}}
              </li>
            </td>
            <td :class="{'active': row.static_sale_open}">
              <span @click="row.static_sale_open = !row.static_sale_open">Скидки<img src="/static/select.svg"></span>
              <li v-for="(cell, j) in row.static_sale" :key=j>
                {{cell}}
              </li>
            </td>
            <td :class="{'active': row.special_open}">
              <span @click="row.special_open = !row.special_open">Накопительные скдики<img src="/static/select.svg"></span>
              <li v-for="(cell, j) in row.special" :key=j>
                {{cell}}
              </li>
            </td>
          </tr>
          <tr class="mob:none">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div class="get_back text-30 mt-10 pr-24 relative cursor-pointer hover:color-white mob:none">
        <span>Условия возврата товара</span>
      </div>
      <div class="w-full none mob:flex">
        <button class="text-20 mt-10 bg-white border-l_black color-l_black cursor-pointer py-3 px-6 radius-5 mob:py-7 mob:w-full hover:color-white hover:bg-l_black">Условия возврата товара</button>
      </div>
    </div>
  </div>
</template>

<script>
import vPartnerSlider from '@/components/partner_slider'
export default {
	components: { vPartnerSlider },
  data() {
    return {
      table: [
        {
          purpose: 'Партьерные ткани',
          open: false,
          conditions_open: false,
          static_sale_open: false,
          special_open: false,
          conditions: ['Оптовая цена сохраняется при покупке от одного рулона, независимо от суммы;', 'Минимальный отрез ткани от 6 метров;'],
          static_sale: ['от 100 000 руб. — скидка 3%', 'от 200 000 руб. — скидка 4%', 'от 400 000 руб. — скидка 5%'],
          special: ['от 65 000 руб. — скидка 3%', 'от 185 000 руб. — скидка 4%', 'от 370 000 руб. — скидка 5%']
        },
        {
          purpose: 'Аксессуары',
          open: false,
          conditions_open: false,
          static_sale_open: false,
          special_open: false,
          conditions: ['Отпускаются от 0,5 м'],
          static_sale: [],
          special: []
        },
        {
          purpose: 'Ролл шторы',
          open: false,
          conditions_open: false,
          static_sale_open: false,
          special_open: false,
          conditions: [],
          static_sale: [],
          special: []
        },
        {
          purpose: 'Карнизы',
          open: false,
          conditions_open: false,
          static_sale_open: false,
          special_open: false,
          conditions: [],
          static_sale: [],
          special: []
        },
        {
          purpose: 'Пошив',
          open: false,
          conditions_open: false,
          static_sale_open: false,
          special_open: false,
          conditions: ['от 1ого рулона'],
          static_sale: ['скидок нет'],
          special: ['скидок нет']
        },
        {
          purpose: 'Тюли',
          open: false,
          conditions_open: false,
          static_sale_open: false,
          special_open: false,
          conditions: [],
          static_sale: [],
          special: []
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .about{
    line-height: 39px;
  }
  .about_sec{
    line-height: 31px;
  }
  ul{
    padding: 0;
  }
  li{
    list-style-type: none;
    padding-left: 23px;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    align-items: center;
    margin-bottom: 10px;
    &:before {
      content: "";
      position: absolute;
      display: block;
      background-color: #D6D6D6;
      max-width: 9px;
      max-height: 9px;
      min-width: 9px;
      min-height: 9px;
      border-radius: 50%;
      left: 0;
    }
  }
  table{
    border-spacing: 0;
    & li{
      &:before{
        top: 0.5rem;
        max-width: 16px;
        max-height: 1px;
        min-width: 16px;
        min-height: 1px;
        border-radius: 0%;
        background-color: #3D3D3D;
      }
    }
    &>tbody>tr{
      &:nth-child(4){
      & td{
        height: 110px;
      }
      }
      &:nth-child(-n+3){
      & td{
        height: 180px;
      }
      }
      &:last-child{
      & td{
        @extend .bb-0;
      }
      }
    }
    & td{
      @extend .b-solid, .b-0, .bb-1, .br-1, .border-C4, .py-6, .px-6;
      vertical-align: baseline;
      height: 90px;
      &:last-child{
        @extend .br-0;
      }
    }
  }
  .get_back{
    transition: 0.3s;
    &:hover{
      &:after{
        max-width: calc(100% + 5px);
      transform: skew(45deg) translate(-8%, 8px);
      }
    }
    &:before{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-bottom: 2px solid $C4;
      border-right: 3px solid $C4;
      transform: skew(45deg) translate(-8%, 8px);
    }
    &:after{
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      padding-top: 5px;
      width: calc(100% + 5px);
      height: 100%;
      background-color: $C4;
      max-width: 0;
      transition: 0.3s;
      z-index: 0;
      transform: skew(45deg) translate(-40px, 8px);
    }
    &>span{
      transform: skew(-45deg);
      padding: relative;
      z-index: 1;
    }
  }
  @media (max-width: 1278px){
    .about, .about_sec{
      font-size: 24px;
      line-height: 200%;
    }
    tbody{
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin-left: -1rem;
      & span{
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      & img{
        margin-left: 8px;
        transition: 0.3s;
      }
    }
    td{
      padding: 0 1rem !important;
      height: auto !important;
      & span{
        font-size: 24px;
        line-height: 31px;
        color: #0C0C0C;
        margin-bottom: 16px;
        margin-top: 9px;
      }
    }
    li{
      margin: 0;
      &:last-child{
        border-bottom: 1px solid #00000010 !important;
      }
      &:before{
        display: none;
      }
    }
    tr, td, li{
      display: flex;
      flex-direction: column;
      width: 100%;
      border-width: 0 !important;
      align-items: flex-start;
      transition: 0.3s;
      overflow: hidden;
      &.active{
        &>*>img{
          transform: scale(1,-1);
        }
      }
    }
    tr td:first-child{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      max-height: 100%;
      padding: 1rem !important;
      border-bottom: 1px solid #00000010 !important;
      font-size: 24px;
      line-height: 31px;
      color: #000000;
      opacity: 0.75;
    }
    tr.active td{
      max-height: 100vh;
    }
    td, li{
      height: 100%;;
      max-height: 0;
    }
    td.active li{
      max-height: 100vh;
      padding-bottom: 10px;
    }
  }
</style>
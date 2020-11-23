<template>
  <div class="content col jc-fs ai-fs">
    <h1 class="text-40 font-400 mt-10">Личный кабинет</h1>
    
    <div class="flex row mob:col w-full">
      <div class="w-2/3 pr-4 mob:p-0 mob:w-full">
        <div class="flex col w-full p-12 mob:px-4 pr-2 ai-fs box">
          <h3 class="text-22 mt-0 mob:none">Учетные данные</h3>
          <div class="flex row mob:col jc-fs">
            <div class="ava bg-C4 flex relative">
              <img src="" alt="">
              <div class="svg absolute flex fill-white stroke-white cursor-pointer bg-margon mob:none">
                <svg width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
                  <rect x="7" width="13" height="1" transform="rotate(90 7 0)"/>
                  <rect width="13" height="1" transform="matrix(-1 -2.18557e-08 -2.18557e-08 1 13 6)"/>
                </svg>
              </div>
            </div>
            <div class="none mob:flex w-full mb-7">
              <button class="text-20 w-full mt-10 bg-white border-l_black color-l_black cursor-pointer py-3 radius-5 hover:color-l_black hover:bg-white">Загрузить изображение</button>
            </div>
            <div class="flex row pl-12 mob:p-0 flex-wrap text-18">

              <div class="w-1/2 mob:w-full">
                <span class="color-grey opacity-0">Имя</span>
                <p class="mt-2 mob:text-24 mob:font-500">Шинник Алексей Харкович</p>
              </div>
              
              <div class="w-1/2 mob:w-full mob:block none">
                <span class="color-grey">Номер телефона</span>
                <p class="mt-2">+7 700 324 36 74 <a class="ml-2 b-dashed color-blue b-0 bb-1 border-blue hover:color-margon hover:border-margon">подтвердить</a></p>
              </div>
              <div class="w-1/2 mob:w-full mob:block none">
                <span class="color-grey">Тип кабинета</span>
                <p class="mt-2">Оптовый покупатель <a class="ml-2 b-dashed color-blue b-0 bb-1 border-blue hover:color-margon hover:border-margon">редактировать</a></p>
              </div>

              <div class="w-1/2 mob:w-full">
                <span class="color-grey">Почта</span>
                <p class="mt-2">harkovich23@mail.ru</p>
              </div>
              <div class="w-1/2 mob:w-full mob:none block">
                <span class="color-grey">Номер телефона</span>
                <p class="mt-2">+7 700 324 36 74 <a class="ml-2 b-dashed color-blue b-0 bb-1 border-blue hover:color-margon hover:border-margon">подтвердить</a></p>
              </div>
              <div class="w-1/2 mob:w-full">
                <span class="color-grey">Город</span>
                <p class="mt-2">Алматинская обл, Алмата</p>
              </div>
              <div class="w-1/2 mob:w-full mob:none block">
                <span class="color-grey">Тип кабинета</span>
                <p class="mt-2">Оптовый покупатель <a class="ml-2 b-dashed color-blue b-0 bb-1 border-blue hover:color-margon hover:border-margon">редактировать</a></p>
              </div>

              <div class="w-1/2 mob:w-full">
                <button class="color-margon mob:color-l_black radius-5 b-1 border-margon mob:border-l_black bg-white text-14 py-3 px-12 mob:w-full mob:text-18 mob:mt-6 cursor-pointer">Изменить</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="flex col ai-fs w-1/3 mob:w-full pl-4 mob:p-0">
        <div class=" w-full box mob:bt-0 mob:bb-0 p-6">
          <h3 class="text-22 mt-0">Как с вами связаться</h3>
          <select>
            <option value="0" selected="selected" disabled >Выберите удобный для вас вид связи</option>
          </select>
        </div>
        <div class=" w-full box mob:bb-0 p-6 mt-6 mob:bt-0 mob:mt-0">
          <h3 class="text-22 mt-0">Подключить мессенджеры</h3>
          <div class="flex row jc-fs">
            <img class="mr-7 cursor-pointer" src="/static/mes_wp.png" alt="">
            <img class="mr-7 cursor-pointer" src="/static/mes_tg.png" alt="">
            <img class="mr-7 cursor-pointer" src="/static/mes_vk.png" alt="">
          </div>

        </div>
      </div>
    </div>
    
    <div class="flex row mob:col ai-fs mt-9">
      <div class="w-1/3 mob:w-full pr-4">
        <div class="flex col w-full p-12 pr-2 mob:px-4 ai-fs box mob:bb-0">
          <h3 class="text-22 mt-0">Вход в личный кабинет</h3>
          <div class="flex col mb-3 ai-fs">
            <span class="color-grey">Пароль</span>
            <div class="mt-2 flex row ai-center">
              <input type="password" class="mt-4 mb-0" placeholder="*******************"><a class="ml-6 b-dashed color-blue b-0 bb-1 border-blue hover:color-margon hover:border-margon">изменить</a>
            </div>
          </div>
          <div class="flex col ai-fs mt-6">
            <span class="color-grey">Авторизация через соц сети</span>
            <div class="flex mt-4 mb-4 row ai-center opacity-27">
              <img class="mr-4" src="/static/001-facebook.png" alt="">
              <img class="mr-4" src="/static/001-instagram.png" alt="">
              <img class="mr-4" src="/static/001-youtube.png" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3 mob:w-full pl-4 mob:p-0">
        <div class="flex col w-full p-12 pr-2 mob:px-4 ai-fs box mob:bb-0">
          <h3 class="text-22 mt-0">Адрес доставки</h3>
          <div class="flex row mob:col w-full jc-fs ai-fe mob:ai-fs text-18">
            <div class="flex row jc-fs flex-wrap w-2/3">
              <div class="w-1/2 mob:w-full mob:mt-4">
                <span class="color-grey">Транспортная компания</span>
                <p class="mt-2">Деловые линии</p>
              </div>
              <div class="w-1/2 mob:w-full mob:mt-4">
                <span class="color-grey">Город доставки</span>
                <p class="mt-2">Алматинская обл, Алмата</p>
              </div>
              <div class="w-1/2 mob:w-full mob:mt-4">
                <span class="color-grey">Адрес доставки</span>
                <p class="mt-2">не указано</p>
              </div>
              <div class="w-1/2 mob:w-full mob:mt-4">
                <span class="color-grey">Тип грузополучателя</span>
                <p class="mt-2">Физическое лицо</p>
              </div>
              <div class="w-1/2 mob:w-full mob:mt-4">
                <span class="color-grey">Грузополучатель</span>
                <p class="mt-2">не указано</p>
              </div>
              <div class="w-1/2 mob:w-full mob:mt-4">
                <span class="color-grey">Телефон грузополучателя</span>
                <p class="mt-2">не указано</p>
              </div>
            </div>
            <button class="color-margon mob:color-l_black radius-5 b-1 border-margon mob:border-l_black bg-white text-14 py-3 px-12 mob:w-full mob:text-18 mob:mt-6 cursor-pointer">Изменить</button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="flex row mob:col ai-fs mt-9">

      <div class="w-2/3 mob:w-full pr-4 mob:p-0">
        <div class="flex col w-full p-12 ai-fs box mob:bb-0 pr-48 mob:px-4">
          <h3 class="text-22 mt-0">От кого будете оплачивать заказы</h3>
          
          <div class="flex row mob:col mob:w-full mb-7">
            <div class="slide cursor-pointer px-6 mob:py-7 text-center mob:w-full py-2 active">Юр лицо или ИП</div>
            <div class="slide cursor-pointer px-6 mob:py-7 text-center mob:w-full py-2 ml-4 mob:mx-0 mob:mt-4">Частное лицо</div>
          </div>

          <div class="flex row mob:col w-full">
            <div class="flex col mb-3 w-1/3 mob:w-full ai-fs">
              <span class="color-grey mob:text-18">Форма собственности*</span>
              <div class="mt-6 flex row mob:w-full ai-center">
                <select class="mob:w-full">
                  <option value="0" selected="selected" >Частное лицо</option>
              </select>
              </div>
            </div>
            <div class="flex col mb-3 w-2/3 mob:w-full ai-fs">
              <span class="color-grey mob:text-18">ИИН*</span>
              <div class="mt-6 flex w-full row ai-center">
                <input class="w-full" placeholder="Пример: 7769564596549" type="text" name="iin">
              </div>
            </div>
          </div>

            <div class="flex col mb-3 w-full ai-fs">
              <span class="color-grey mob:text-18">Название</span>
              <div class="mt-6 flex w-full row ai-center">
                <input class="w-full" placeholder="Пример: ООО Стартекс" type="text" name="iin">
              </div>
            </div>

          <button class="good text-20 mt-10 bg-l_black border-l_black color-white cursor-pointer py-3 px-10 mob:w-full mob:py-7 radius-5 hover:color-l_black hover:bg-white">Создать контрагента</button>

          <span class="color-C4 mt-10 lh-19"><strong>Будьте внимательны:</strong> Данные плательщика сохраняются в базе данных. Вы не сможете изменить или добавить новые данные самостоятельно, для этого нужно будет обратиться к вашему менеджеру.</span>
        </div>
      </div>
      
      <div class="w-1/3 pl-4 mob:none">
        <div class="flex col w-full p-12 ai-fs box">
          <h3 class="text-22 mt-0">Удалить личный кабинет</h3>
          <span class="color-grey text-18" style="line-height: 156%;">Как только личный кабинет будет удален, вы больше не сможете зайти в этот аккаунт.</span>
          <button class="mt-10 color-margon radius-5 b-1 border-margon bg-white text-14 py-3 px-12 cursor-pointer">Удалить</button>
        </div>
      </div>
    </div>
    
    <div class="flex col mt-9 ai-fs box mob:bb-0 mob:pb-0 p-12 mob:px-4">
      <h3 class="text-22 mt-0">Накопительные скидки</h3>
      <table>
        <thead class="color-grey mob:none">
          <tr>
            <td class="py-10 b-0 bb-1 b-solid border-C4">Наименования</td>
            <td class="py-10 b-0 bb-1 b-solid border-C4">Скидка в июле</td>
            <td class="py-10 b-0 bb-1 b-solid border-C4">Прогноз скидки в августе</td>
            <td class="py-10 b-0 bb-1 b-solid border-C4">Увеличение скидки в августе</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="sale in sales" :key="sale.name" :class="{'active': sale.open}">
            
            <td @click="sale.open = !sale.open">{{sale.name}}<img src="/static/select.svg"></td>
            <td :class="{'active': sale.now_open}">
              <span class="none mob:block" @click="sale.now_open = !sale.now_open">Скидка в июле<img src="/static/select.svg"></span>
              <span>{{sale.now}}%</span>
            </td>
            <td :class="{'active': sale.next_open}">
              <span class="none mob:block" @click="sale.next_open = !sale.next_open">Прогноз скидки в августе<img src="/static/select.svg"></span>
              <span>{{sale.next}}%</span>
            </td>
            <td :class="{'active': sale.value_open}">
              <span class="none mob:block" @click="sale.value_open = !sale.value_open">Увеличение скидки в августе<img src="/static/select.svg"></span>
              <span class="flex row ai-center">
                <div class="flex col pb-6">
                  <span class="pr-24 mob:color-l_grey mob:px-0 mob:w-full">до скидки 5% осталось {{sale.max - sale.value}} тенге</span>
                  <div class="status mt-2 relative "><div class="bg-blue absolute" :style="{maxWidth: `${sale.value / sale.max * 100}%`}"></div></div>
                </div>
                <div class="info bg-blue color-white flex ai-center jc-center cursor-pointer ml-8 mob:mx-0">!</div>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      sales: [
        {
          name: 'Швейное оборудование',
          open: true,
          now: 34,
          now_open: false,
          next: 34,
          next_open: false,
          value: 7200,
          value_open: false,
          max: 230000
        },
        {
          name: 'Выкройки',
          open: false,
          now: 0,
          now_open: false,
          next: 0,
          next_open: false,
          value: 0,
          value_open: false,
          max: 230000
        },
        {
          name: 'Ткани одежные',
          open: false,
          now: 0,
          now_open: false,
          next: 0,
          next_open: false,
          value: 1000,
          value_open: false,
          max: 230000
        },
        {
          name: 'Ткани для дома, технические и мебельные ткани, готовые изделии',
          open: false,
          now: 0,
          now_open: false,
          next: 5,
          next_open: false,
          value: 200000,
          value_open: false,
          max: 230000
        },
        {
          name: 'Швейная фурнитура, товары для творчества',
          open: false,
          now: 0,
          now_open: false,
          next: 0,
          next_open: false,
          value: 115000,
          value_open: false,
          max: 230000
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .box{
    border: 1px solid #00000010;
    border-radius: 11px;
  }
  .ava{
    max-width: 155px;
    max-height: 155px;
    min-width: 155px;
    min-height: 155px;
    border-radius: 50%;
    &>.svg{
      max-width: 32px;
      max-height: 32px;
      min-width: 32px;
      min-height: 32px;
      border-radius: 50%;
      bottom: 0;
      transform: translateY(40%);
    }
  }
  .border-margon{
    border-color: #CA353535;
  }
  input, select, option{
    width: 100%;
    margin-bottom: 30px;
    padding: 1rem 40px 1rem 12px;
    border-radius: 5px;
    border: 0.5px solid #00000056;
    outline: none;
    &:focus{
      border: 0.5px solid #000000;
    }
    &::placeholder{
      color: #00000040;
    }
    &.password{
      background-repeat: no-repeat;
      background-position: calc(100% - 16px) 50%;
      background-image: URL('/static/eye.png');
    }
  }
  .slide{
    transition: 0.3s;
    border: 1px solid $C4;
    border-radius: 5px;
    box-shadow: 0 0 0 0 #565656 inset, 0 0 0 0 #565656;
    &.active{
      color: white;
      box-shadow: 0 0 40px 40px #565656 inset, 0 0 0 0 #565656;
    }
  }
  button.good{
    transition: 0.3s;
    box-shadow: 0 0 40px 40px $l_black inset, 0 0 0 0 $l_black;
    &:hover{
      box-shadow: 0 0 10px 0 $l_black inset, 0 0 10px 5px $l_black;
    }
  }
  table{
    border-spacing: 0;
    & td{
      width: 16.667%;
      text-align: center;
      &:first-child{
        text-align: left;
      }
      &:last-child{
        width: 50%;
      }
    }
    &>tbody{
      & td{
        padding: 24px 0;
        font-size: 18px;
        &:first-child{
          font-weight: 300;
        }
        & .status{
          width: 100%;
          height: 6px;
          background: #69696935;
          border-radius: 5px;
          overflow: hidden;
          &>div{
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            max-width: 0;
            border-radius: inherit;
            transition: 0.3s;
          }
        }
        & .info{
          max-width: 27px;
          max-height: 27px;
          min-width: 27px;
          min-height: 27px;
          border-radius: 50%;
        }
      }
    }
  }
  .lh-19{
    line-height: 19px;
  }
  @media (max-width: 1278px){
    .box{
      border-left-width: 0px;
      border-right-width: 0px;
      border-radius: 0;
      width: 100vw;
      margin-left: -1rem;
    }
    .ava{
      max-width: 223px;
      max-height: 223px;
      min-width: 223px;
      min-height: 223px;
    }
    .slide{
      box-shadow: 0 0 0 0 #000000 inset, 0 0 0 0 #000000;
      &.active{
        box-shadow: 0 0 40px 40px #000000 inset, 0 0 0 0 #000000;
      }
    }
    .lh-19{
      line-height: 28px;
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
      & td{
        width: 100% !important;
        padding: 0 !important;
        height: auto !important;
      }
      & .active,& *.active,& *>*.active,& *>*>*.active{
        &>img{
          transform: scale(1,-1);
        }
      }
    }
    tr td{
      max-height: 0;
    }
    tr, td, span:last-child{
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
    td>span:first-child{
      padding: 1rem;
    }
    td>span:last-child{
      height: 100%;
      padding: 0 1rem;
      max-height: 0;
      border-bottom: 0px solid #00000010 !important;
    }
    td.active span:last-child{
      max-height: 50vh;
      padding-bottom: 10px;
      border-bottom: 1px solid #00000010 !important;
    }
  }
</style>
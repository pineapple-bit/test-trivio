<template>
  <div :class="[$style.root, (compact | middle) && $style.middle]" ref="navbar">
    <div :class="$style.mainNav">
      <div :class="$style.logoWrap">
        <logo-icon/>
        <icon-button @click="isOpenedNav = !isOpenedNav" v-if="compact">
          <icon-base :name="isOpenedNav ? 'close' : 'menu'" width="28" height="28" color="#7D808A"/>
        </icon-button>
      </div>
      <div :class="[$style.buttonsWrap, compact && getAnimation]">
        <button-component
            v-for="(item, index) in mainNav"
            :key="index"
            :icon="item.icon"
            :isActive="$route.path === item.path"
            @click="$router.push(item.path)"
        >
          {{ item.title }}
        </button-component>
      </div>
    </div>
    <div :class="$style.optionNav">
      <template v-for="(item, index) in optionNav" :key="index">
        <icon-button v-if="item.badge">
          <badge-component :badge="item.badge">
            <icon-base :name="item.name" :color="item.color" width="28" height="28"/>
          </badge-component>
        </icon-button>
        <icon-button v-else>
          <icon-base :name="item.name" :color="item.color" width="28" height="28"/>
        </icon-button>
      </template>
      <user-avatar @click="openContextMenu"/>
      <flag-component :country="getLang" @click="changeLang"/>
    </div>
  </div>
  <menu-component v-model:anchor="anchor" v-if="anchor" ref="menu">
    <menu-item v-for="(item, index) in contextMenu" :key="index">
      <template v-slot:title>{{ item.title }}</template>
      <template v-slot:info v-if="item.withInfo">
        <div>
          Тривио<br>
          Баланс: -597<br>
          Задолженность: 0
        </div>
      </template>
    </menu-item>
  </menu-component>
</template>

<script>
import UserAvatar from '@/components/UserAvatar'
import FlagComponent from '@/components/FlagComponent'

export default {
  name: 'NavBar',
  components: {FlagComponent, UserAvatar},
  data() {
    return {
      anchor: null,
      mainNav: [
        {title: 'Рабочий стол', path: '/'}, {title: 'Покупки', path: '/buy'}, {title: 'Отчеты', path: '/report'},
        {title: 'Мои поездки', path: '/travel'}, {title: 'Документы', path: '/docs'},
        {title: 'Покупка услуг', icon: 'card', path: '/service'}
      ],
      optionNav: [
        {name: 'search', color: '#007AFF'},
        {name: 'report', color: '#F44336'},
        {name: 'schedule', color: 'purple', badge: {count: 3}},
        {name: 'favorite', color: '#D4379D'},
        {name: 'mail', color: '#7D808A', badge: {color: '#007AFF'}}
      ],
      contextMenu: [
        {title: 'adin admin', withInfo: true}, {title: 'Профиль'}, {title: 'Управление'},
        {title: 'Моя компания'}, {title: 'Выйти'}
      ],
      isOpenedNav: false,
    }
  },
  computed: {
    getLang() {
      return this.$store.state.lang
    },
    middle() {
      return this.$store.getters.screenMode === 'md'
    },
    compact() {
      return this.$store.getters.screenMode === 'xs'
    },
    getAnimation() {
      return this.isOpenedNav ? this.$style.openedNav : this.$style.closedNav
    }
  },
  methods: {
    openContextMenu(e) {
      this.anchor = {x: e.pageX, y: this.$refs.navbar.offsetHeight}
    },
    changeLang() {
      this.$store.commit('changeLang')
    },
  }
}
</script>

<style module>
.root {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 2px 4px -2px rgb(0 0 0 / 20%);
  padding: 12px;
}

.mainNav {
  display: flex;
}

.root.middle {
  flex-direction: column;
}

.middle .buttonsWrap {
  flex-wrap: wrap;
  margin: 16px 0;
}

.middle .mainNav {
  flex-direction: column;
}

.buttonsWrap, .optionNav {
  display: flex;
  align-items: center;
}

.optionNav > *, .buttonsWrap > * {
  margin-right: 8px;
}

.logoWrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.openedNav {
  overflow: hidden;
  max-height: 1000px;
  transition: max-height .5s cubic-bezier(1, 0, 1, 0);
}

.closedNav {
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1);
}
</style>

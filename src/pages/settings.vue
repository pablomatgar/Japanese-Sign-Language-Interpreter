<template>
  <f7-page name="settings">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link href="/" class="link">
          <f7-icon icon="icon-back"></f7-icon>
        </f7-link>
      </f7-nav-left>
      <f7-nav-right>
        <f7-chip smart-select :smart-select-params="{ openIn: 'sheet' }">
          <template #media>
            <img :src="$t('img')" />
          </template>
          <select
            @change="changeLanguage($event)"
            name="language"
            v-model="key"
          >
            <option
              :selected="selectedLang === lang"
              v-for="(lang, i) in langs"
              :key="`lang-${i}`"
              :value="lang"
            >
              {{ $t(lang) }}
            </option>
          </select>
        </f7-chip>
      </f7-nav-right>
    </f7-navbar>
    <!-- Page content-->
    <f7-block class="title">
      <h1>{{ $t('settings') }}</h1>
    </f7-block>
    <f7-block strong>
      <f7-range
        :min="250"
        :max="750"
        :label="true"
        :step="5"
        :value="settings.getValue()"
        :scale="true"
        @range:change="changeSettings"
      />
    </f7-block>
  </f7-page>
</template>

<script>
import { settings } from '../js/settings';
import { i18n } from '../js/app';

export default {
  data() {
    const langs = ['ja', 'es', 'en'];
    const changeSettings = (value) => {
      settings.setValue(value);
    };
    // Change language function
    const changeLanguage = (event) => {
      i18n.global.locale = event.target.value;
    };
    return {
      settings,
      langs,
      changeSettings,
      changeLanguage,
    };
  },
};
</script>
<style scoped>
.link {
  color: #000000;
}

.title {
  text-align: center;
}
</style>

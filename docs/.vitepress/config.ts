import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/Graphics-ttr-articles/',
  title: 'Tatar Arabic Alphabet',
  locales: {
    root: { label: 'English', lang: 'en' },
    ru: { label: 'Русский', lang: 'ru' },
    tt: { label: 'Татарча', lang: 'tt' }
  },
  themeConfig: {
    nav: [
      { text: 'English', link: '/' },
      { text: 'Русский', link: '/ru/' },
      { text: 'Татарча', link: '/tt/' }
    ]
  }
})

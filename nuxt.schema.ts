import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    header: group({
      title: 'Header',
      description: 'Header configuration.',
      icon: 'i-mdi-page-layout-header',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Left badge of your header.',
          icon: 'i-mdi-text',
          default: 'Nuxt Studio Demo'
        })
      }
    }),
    ui: group({
      title: 'UI',
      description: 'UI Customization.',
      icon: 'i-mdi-palette-outline',
      fields: {
        primary: field({
          type: 'string',
          title: 'Primary',
          description: 'Primary color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'green',
          required: ['sky', 'mint', 'rose', 'amber', 'violet', 'emerald', 'fuchsia', 'indigo', 'lime', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow', 'green', 'blue', 'cyan', 'gray', 'white', 'black']
        })
      }
    })
  }
})

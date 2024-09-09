import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
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

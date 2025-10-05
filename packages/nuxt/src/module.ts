import { defineNuxtModule, addComponentsDir, createResolver, addImportsDir, installModule } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import type { NuxtModule } from '@nuxt/schema'

export interface ModuleOptions {
  prefix?: string
  global?: boolean
  tailwindConfig?: boolean
}

const module: NuxtModule<ModuleOptions> = defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@supaweb3/nuxt',
    configKey: 'supaweb3',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },
  defaults: {
    prefix: '',
    global: true,
    tailwindConfig: true
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    // Add CSS
    nuxt.options.css.push('@supaweb3/ui/style.css')

    // Add Tailwind v4 source scanning CSS if Tailwind v4 is detected
    const hasNuxtUI = nuxt.options.modules.some(m =>
      typeof m === 'string' ? m === '@nuxt/ui' : false
    )
    const hasTailwindV4 = nuxt.options.postcss?.plugins?.['@tailwindcss/postcss'] !== undefined

    if (hasNuxtUI || hasTailwindV4) {
      nuxt.options.css.push(resolver.resolve(runtimeDir, 'supaweb3-tailwind.css'))
    }

    // Auto-import components
    await addComponentsDir({
      path: resolver.resolve(runtimeDir, 'components'),
      prefix: options.prefix,
      global: options.global,
      pathPrefix: false
    })

    // Auto-import composables
    addImportsDir(resolver.resolve(runtimeDir, 'composables'))

    // Add Tailwind config preset if enabled
    if (options.tailwindConfig) {
      // Check for @nuxtjs/tailwindcss module (Nuxt 3 / Tailwind v3)
      const hasTailwindModule = nuxt.options.modules.some(m =>
        typeof m === 'string' ? m === '@nuxtjs/tailwindcss' : false
      )

      // Check for @nuxt/ui which includes Tailwind v4
      const hasNuxtUI = nuxt.options.modules.some(m =>
        typeof m === 'string' ? m === '@nuxt/ui' : false
      )

      // Check for @tailwindcss/postcss in postcss plugins (Tailwind v4)
      const hasTailwindV4 = nuxt.options.postcss?.plugins?.['@tailwindcss/postcss'] !== undefined

      if (hasTailwindModule) {
        // Tailwind v3 via @nuxtjs/tailwindcss
        nuxt.hook('tailwindcss:config' as any, (tailwindConfig: any) => {
          tailwindConfig.presets = tailwindConfig.presets || []
          tailwindConfig.presets.push('@supaweb3/config')
        })
      } else if (hasNuxtUI || hasTailwindV4) {
        // Tailwind v4 is present (via @nuxt/ui or @tailwindcss/postcss)
        // For Tailwind v4, the preset is handled via CSS imports
        // No config hook needed
      } else {
        // No Tailwind CSS detected
        console.warn(
          '[@supaweb3/nuxt] Tailwind CSS not detected. ' +
          'For proper styling, install one of:\n' +
          '  • @nuxtjs/tailwindcss (Tailwind v3): pnpm add -D @nuxtjs/tailwindcss\n' +
          '  • @nuxt/ui (includes Tailwind v4): pnpm add @nuxt/ui'
        )
      }
    }

    // Transpile @supaweb3/ui
    nuxt.options.build.transpile.push('@supaweb3/ui')
  }
})

export default module
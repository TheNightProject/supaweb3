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
    nuxt.options.css.push('@thenightproject/supaweb3-ui/style.css')

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
      const hasTailwindModule = nuxt.options.modules.some(m =>
        typeof m === 'string' ? m === '@nuxtjs/tailwindcss' : false
      )

      if (hasTailwindModule) {
        nuxt.hook('tailwindcss:config' as any, (tailwindConfig: any) => {
          tailwindConfig.presets = tailwindConfig.presets || []
          tailwindConfig.presets.push('@thenightproject/supaweb3-config')
        })
      } else {
        console.warn(
          '[@supaweb3/nuxt] Tailwind CSS module not found. ' +
          'Install @nuxtjs/tailwindcss to use Tailwind features:\n' +
          '  pnpm add -D @nuxtjs/tailwindcss'
        )
      }
    }

    // Transpile @thenightproject/supaweb3-ui
    nuxt.options.build.transpile.push('@thenightproject/supaweb3-ui')
  }
})

export default module
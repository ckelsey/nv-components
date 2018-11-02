import { sass } from '@stencil/sass'
import { Config } from '@stencil/core'

export const config: Config = {
    enableCache: false,
    namespace: 'nvcomponents',
    // bundles: [
    //     {
    //         components: [
    //             'material-icon',
    //             'nv-button',
    //             'nv-checkbox',
    //             'nv-checkbox-array',
    //             'nv-image',
    //             'nv-input',
    //             'nv-menu',
    //             'nv-progress',
    //             'nv-pulse',
    //             'nv-radio',
    //             'nv-ripple',
    //             'nv-slider',
    //             'nv-switch',
    //             'nv-tabs',
    //             'nv-tab-content',
    //             'nv-tooltip',
    //             'nv-wave',
    //         ]
    //     }
    // ],
    outputTargets: [
        {
            type: 'dist'
        },
        {
            type: 'www',
            serviceWorker: null
        }
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                'src/global/variables.scss'
            ]
        })
    ],
    globalStyle: 'src/global/variables.scss',
    globalScript: 'src/global/index.ts'
}

import { sass } from '@stencil/sass'
import { Config } from '@stencil/core'

export const config: Config = {
    enableCache: false,
    namespace: 'nvcomponents',
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

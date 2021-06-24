import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    globals: {
      'one/types': 'window'
    },
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      exclude: [],
      tsconfigOverride: {
        compilerOptions: {
          module: 'es2015',
        },
      },
    }),
  ]
}

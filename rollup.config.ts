import typescript from '@rollup/plugin-typescript'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'src/profile.ts',
    output: {
      dir: 'out',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  },
    {
    input: 'src/options.ts',
    output: {
      dir: 'out',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  },
  {
    input: 'src/perfs.ts',
    output: {
      dir: 'out',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  },
  {
    input: 'src/lobby.ts',
    output: {
      dir: 'out',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  },
  {
    input: 'src/rating.ts',
    output: {
      dir: 'out',
      format: 'cjs'
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  }

];

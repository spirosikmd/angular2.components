System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  //map tells the System loader where to look for things
  map: {
    components: './components'
  },
  //packages defines our app package
  packages: {
    components: {
      main: './main.ts',
      defaultExtension: 'ts'
    }
  }
});

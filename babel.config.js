const alias = { '^@/(.+)' : './src/\\2'}; //@/folder will be alias to <root>/src/folder

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin']
  // plugins: ['react-native-reanimated/plugin', ['module-resolver', alias]]
  
};

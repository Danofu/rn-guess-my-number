module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        { root: ['src', 'assets'], extensions: ['.js', '.android.js', '.ios.js', '.jsx', '.android.jsx', '.ios.jsx'] },
      ],
    ],
  };
};

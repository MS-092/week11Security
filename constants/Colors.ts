const tintColorLight = '#2f95dc';
const tintColorDark = '#22C55E';

const sharedDark = {
  background: '#0D0E10',
  surface: '#1A1B1E',
  surfaceAlt: '#222326',
  text: '#FFFFFF',
  textSecondary: '#8E8E93',
  accent: '#22C55E',
  accentDim: '#166534',
  border: '#2C2E33',
  tabIconDefault: '#5E5E62',
  tabIconSelected: '#22C55E',
  tabBar: '#0D0E10',
  tint: tintColorDark,
};

const sharedLight = {
  background: '#FFFFFF',
  surface: '#F5F5F7',
  surfaceAlt: '#E8E8ED',
  text: '#1D1D1F',
  textSecondary: '#86868B',
  accent: '#22C55E',
  accentDim: '#BBF7D0',
  border: '#D2D2D7',
  tabIconDefault: '#8E8E93',
  tabIconSelected: '#22C55E',
  tabBar: '#FFFFFF',
  tint: tintColorLight,
};

export default {
  light: {
    ...sharedLight,
    tint: tintColorLight,
    tabIconDefault: '#8E8E93',
    tabIconSelected: tintColorLight,
  },
  dark: {
    ...sharedDark,
    tint: tintColorDark,
    tabIconDefault: '#5E5E62',
    tabIconSelected: tintColorDark,
  },
};

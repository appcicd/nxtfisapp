// theme
import palette from '../theme/palette';

// ----------------------------------------------------------------------

export const colorPresets = [
  // DEFAULT
  {
    name: 'default',
    ...palette.light.primary,
  },
  // PURPLE
  {
    name: 'purple',
    lighter: '#EBD6FD',
    light: '#B985F4',
    main: '#7635dc',
    dark: '#431A9E',
    darker: '#200A69',
    contrastText: '#fff',
  },
];

export const defaultPreset = colorPresets[0];
export const purplePreset = colorPresets[1];

export default function getColorPresets(presetsKey) {
  return {
    default: defaultPreset,
    purple: purplePreset,
  }[presetsKey];
}

import { extendTheme } from '@chakra-ui/react';
// add the app-specific theme colors
const colors = {
  brand: {
    100: '#ffffff',
    300: '#9eb5e9',
    600: '#42679e',
    900: '#000000'
  }
};

const AppTheme = extendTheme({colors});
export default AppTheme;

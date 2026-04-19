import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { PrimeNGConfigType } from 'primeng/config';

const preset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        primary: {
          '50': '#E6EEF3',
          '100': '#CCDDE7',
          '200': '#99BBCF',
          '300': '#6699B7',
          '400': '#33779F',
          '500': '#003462',
          '600': '#002E58',
          '700': '#00274E',
          '800': '#002044',
          '900': '#001A3A', // Darkest shade
        },

        surface: {
          '0': '#ffffff',
          '50': '#F9FAFB',
          '100': '#F3F4F6',
          '200': '#E5E7EB',
          '300': '#D1D5DB',
          '400': '#9CA3AF',
          '500': '#6B7280',
          '600': '#4B5563',
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          '950': '#0d111c',
        },

        formField: {
          background: '#fafafa',
          borderColor: '{gray.300}',
          borderColorHover: '{primary.100}',
          color: '{primary.700}',
          placeholderColor: '{gray.700}',
          paddingX: '0.625rem',
          paddingY: '0.625rem',
          shadow: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 {primary.500}`',
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            label: {
              fontWeight: '600',
            },
            borderRadius: '8px',
            paddingX: '24px',
            paddingY: '9px',

            primary: {},
            secondary: {
              background: '#af7e3c',
              hoverBackground: '#af7e3c',
              activeBackground: '#af7e3c',
              hoverColor: '#ffffff',
              borderColor: '#af7e3c',

              color: '#ffffff',
            },
            danger: {
              background: '#C62828',
              hoverBackground: '#C62828',
              hoverColor: '#ffffff',
              color: '#ffffff',
            },
            success: {
              background: '#1CAC75',
              hoverBackground: '#1CAC75',
              activeBackground: '#1CAC75',
              hoverColor: '#ffffff',
              color: '#ffffff',
            },
            info: {
              background: 'transparent',
              color: '{primary.500}',
              hoverBackground: 'primary.500',
              hoverColor: 'primary.500',
              activeBackground: 'primary.500',
              activeColor: 'primary.500',
              borderColor: '{primary.500}',
            },

            warn: {
              background: '#fbf9f5',
              hoverBackground: '#fbf9f5',
              activeBackground: '#fbf9f5',
              activeColor: '#af7e3c',
              hoverColor: '#af7e3c',
              color: '#af7e3c',
              borderColor: '#f6e5e1',
              hoverBorderColor: '#f6e5e1',
            },
          },
        },
      },
    },

    textarea: {
      root: {
        borderColor: '{surface.300}',
        color: '{primary.700}',
      },
    },
    tabs: {
      tab: {
        fontWeight: '500',
        padding: '0.5rem 1rem',
        color: '{surface.500}',
        hoverColor: '{surface.500}',
        // activeColor: '{primary.500}',
        hoverBorderColor: 'transparent',
        activeBorderColor: '{primary.500}',
        gap: '0.5rem',
        borderWidth: '0%',
        activeBackground: 'primary.500',
      },
      tablist: {
        borderWidth: '1px',
        borderColor: '{surface.200}',
        // background: '{surface.50}'
      },
      activeBar: {
        background: 'transparent',
      },

      colorScheme: {
        light: {
          tab: {
            color: '{surface.500}',
          },
        },
      },
    },
    select: {
      dropdown: {
        width: '2.5rem',
        color: '#af7e3c',
      },
    },
    multiselect: {
      dropdown: {
        width: '2.5rem',
        color: '#af7e3c',
      },
    },
    inputtext: {
      root: {
        borderColor: '{surface.300}',
        borderRadius: '8px',
      },
    },
  },
});

export const AppTheme: PrimeNGConfigType = {
  translation: {
    dateFormat: 'dd-mm-yy',
  },
  theme: {
    preset: preset,
    options: {
      cssLayer: {
        name: 'primeng',
        order: 'primeng, app-components',
      },
      darkModeSelector: false,
    },
  },
};
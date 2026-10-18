module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./components/**/*.{html,js,jsx,ts,tsx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep academic blue
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600 (main primary)
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        
        // Secondary Colors - Sophisticated slate
        secondary: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500 (main secondary)
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
          DEFAULT: "#64748B", // slate-500
        },
        
        // Accent Colors - Warm amber
        accent: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          200: "#FDE68A", // amber-200
          300: "#FCD34D", // amber-300
          400: "#FBBF24", // amber-400
          500: "#F59E0B", // amber-500 (main accent)
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
          800: "#92400E", // amber-800
          900: "#78350F", // amber-900
          DEFAULT: "#F59E0B", // amber-500
        },
        
        // Background Colors
        background: "#FAFBFC", // custom off-white
        surface: "#FFFFFF", // white
        
        // Text Colors
        text: {
          primary: "#1F2937", // gray-800
          secondary: "#6B7280", // gray-500
        },
        
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600 (main success)
          700: "#047857", // emerald-700
          DEFAULT: "#059669", // emerald-600
        },
        
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600 (main warning)
          700: "#B45309", // amber-700
          DEFAULT: "#D97706", // amber-600
        },
        
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600 (main error)
          700: "#B91C1C", // red-700
          DEFAULT: "#DC2626", // red-600
        },
      },
      
      fontFamily: {
        heading: ['Crimson Text', 'serif'],
        body: ['Source Sans 3', 'sans-serif'],
        caption: ['Inter Tight', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Source Sans 3', 'sans-serif'],
      },
      
      fontSize: {
        'heading-xl': ['2.25rem', { lineHeight: '1.2' }], // 36px
        'heading-lg': ['1.875rem', { lineHeight: '1.25' }], // 30px
        'heading-md': ['1.5rem', { lineHeight: '1.3' }], // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }], // 20px
        'heading-xs': ['1.125rem', { lineHeight: '1.5' }], // 18px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }], // 15px mobile
        'caption': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.025em' }], // 14px
      },
      
      spacing: {
        '18': '4.5rem', // 72px
        '72': '18rem', // 288px
      },
      
      borderRadius: {
        'academic': '6px',
        'card': '12px',
        'button': '8px',
        'modal': '16px',
        'large': '24px',
      },
      
      boxShadow: {
        'academic-sm': '0 1px 3px rgba(15, 23, 42, 0.08)',
        'academic': '0 2px 6px rgba(15, 23, 42, 0.12)',
        'academic-md': '0 4px 12px rgba(15, 23, 42, 0.12)',
        'academic-lg': '0 8px 24px rgba(15, 23, 42, 0.16)',
        'academic-xl': '0 20px 40px -8px rgba(15, 23, 42, 0.16)',
        'glow-primary': '0 0 20px rgba(37, 99, 235, 0.2)',
      },
      
      animation: {
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scale-in': 'scale-in 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'fade-in': 'fade-in 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slide-up 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        'skeleton': 'skeleton-loading 1.5s infinite',
      },
      
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      
      transitionTimingFunction: {
        'academic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      transitionDuration: {
        'academic': '250ms',
      },
      
      backdropBlur: {
        'academic': '4px',
      },
      
      zIndex: {
        'card': '1',
        'sticky': '10',
        'dropdown': '50',
        'navigation': '100',
        'modal': '200',
        'toast': '300',
      },
      
      maxWidth: {
        'measure': '70ch',
      },
      
      minHeight: {
        'touch': '44px',
      },
      
      minWidth: {
        'touch': '44px',
      },
      
      ringOffsetWidth: {
        '3': '3px',
      },
      
      ringWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-measure': {
          maxWidth: '70ch',
        },
        '.touch-target': {
          minHeight: '44px',
          minWidth: '44px',
        },
        '.focus-academic': {
          outline: `3px solid ${theme('colors.primary.600')}`,
          outlineOffset: '2px',
        },
        '.transition-academic': {
          transition: `all ${theme('transitionDuration.academic')} ${theme('transitionTimingFunction.academic')}`,
        },
        '.hover-lift': {
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.academic-md'),
          },
        },
        '.active-press': {
          '&:active': {
            transform: 'scale(0.97)',
          },
        },
        '.backdrop-academic': {
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(15, 23, 42, 0.2)',
        },
        '.overflow-card': {
          overflow: 'hidden',
        },
        '.overflow-content': {
          overflow: 'auto',
        },
        '.overflow-dropdown': {
          overflow: 'visible',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
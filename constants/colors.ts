/**
 * Brand Color Palette
 * Central location for all colors used throughout the application
 */

export const COLORS = {
  // Primary brand color
  primary: "#EB2420",
  primaryLight: "#FF6B35",

  // Text colors
  textDark: "#000000",
  textGray900: "#111827",
  textGray700: "#374151",
  textGray600: "#4B5563",
  textGray500: "#6B7280",
  textGray400: "#9CA3AF",
  textGray300: "#D1D5DB",

  // Background colors
  white: "#FFFFFF",
  bgLight: "#F9FAFB",
  bgGray50: "#F3F4F6",
  bgDark: "#1F1D1B",
  bgDarkSecondary: "#2a2826",

  // Semantic colors
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",

  // Gradient colors
  gradientFrom: "#EB2420",
  gradientTo: "#FF6B35",
} as const;

export const DARK_MODE_COLORS = {
  background: COLORS.bgDark,
  foreground: "#FFFFFF",
  textPrimary: "#FFFFFF",
  textSecondary: "#D1D5DB",
  border: "#374151",
} as const;

export const LIGHT_MODE_COLORS = {
  background: COLORS.white,
  foreground: COLORS.textGray900,
  textPrimary: COLORS.textGray900,
  textSecondary: COLORS.textGray600,
  border: "#E5E7EB",
} as const;

# SecApp — Week 11 Security

An Expo/React Native demo showcasing hardware-backed encrypted storage using `expo-secure-store`. Users can save and retrieve secrets encrypted at rest via iOS Keychain / Android Keystore, with a localStorage fallback on web.

## Design Choices

- **Dark mode first** with light mode support — follows system preference (`userInterfaceStyle: "automatic"`)
- **Green accent** (`#22C55E`) as the primary brand color across both themes for a security/trust vibe
- **Monospaced aesthetic** — SpaceMono font throughout gives a terminal-like feel
- **Card-based layout** — rounded cards with subtle borders and surface colors for clean hierarchy
- **No UI library** — pure React Native `StyleSheet.create()` components, keeping the bundle lean
- **Tab navigation** via Expo Router 6 with file-based routing

import { ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'dark'];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.brand, { color: colors.accent }]}>SecApp</Text>
      <Text style={[styles.version, { color: colors.textSecondary }]}>v1.0.0</Text>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.label, { color: colors.accent }]}>About</Text>
        <Text style={[styles.body, { color: colors.text }]}>
          SecApp is a demonstration of secure key-value storage using{' '}
          <Text style={{ color: colors.accent }}>expo-secure-store</Text>.
          All data is encrypted at rest using the device's hardware-backed keystore.
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.label, { color: colors.accent }]}>Tech Stack</Text>
        {['Expo SDK 54', 'React Native 0.81', 'expo-secure-store'].map((item) => (
          <View key={item} style={[styles.row, { borderBottomColor: colors.border }]}>
            <Text style={[styles.mono, { color: colors.accent }]}>{'>'}</Text>
            <Text style={[styles.mono, { color: colors.text }]}>{item}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}
        onPress={() => Linking.openURL('https://docs.expo.dev/versions/latest/sdk/securestore/')}
        activeOpacity={0.7}
      >
        <Text style={[styles.label, { color: colors.accent }]}>Documentation</Text>
        <Text style={[styles.body, { color: colors.textSecondary }]}>
          expo-secure-store docs {'>'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  brand: {
    fontFamily: 'SpaceMono',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 2,
  },
  version: {
    fontFamily: 'SpaceMono',
    fontSize: 11,
    letterSpacing: 0.5,
    marginBottom: 28,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  label: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.8,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  body: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2E33',
    backgroundColor: 'transparent',
  },
  mono: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
  },
});

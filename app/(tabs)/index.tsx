import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, ScrollView, Alert, StyleSheet } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { setItemSecurely, getItemSecurely } from '@/lib/storage';
import ResultModal from '@/components/ResultModal';

export default function VaultScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'dark'];
  const [saveKey, setSaveKey] = useState('');
  const [saveValue, setSaveValue] = useState('');
  const [retrieveKey, setRetrieveKey] = useState('');
  const [modal, setModal] = useState<{ title: string; value: string | null } | null>(null);

  const handleSave = async () => {
    if (!saveKey || !saveValue) {
      Alert.alert('Error', 'Key and value are required.');
      return;
    }
    await setItemSecurely(saveKey, saveValue);
    setSaveKey('');
    setSaveValue('');
    setModal({ title: 'Saved', value: 'Your secret has been stored securely.' });
  };

  const handleRetrieve = async () => {
    if (!retrieveKey) {
      Alert.alert('Error', 'Enter a key to retrieve.');
      return;
    }
    const result = await getItemSecurely(retrieveKey);
    if (result) {
      setModal({ title: 'Value Retrieved', value: result });
    } else {
      setModal({ title: 'Not Found', value: null });
    }
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.brand, { color: colors.accent }]}>SecApp</Text>
      <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
        Encrypted key-value storage
      </Text>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.cardLabel, { color: colors.accent }]}>Save Secret</Text>
        <TextInput
          style={[styles.input, { color: colors.text, backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}
          placeholderTextColor={colors.textSecondary}
          placeholder="Key"
          onChangeText={setSaveKey}
          value={saveKey}
        />
        <TextInput
          style={[styles.input, { color: colors.text, backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}
          placeholderTextColor={colors.textSecondary}
          placeholder="Value"
          onChangeText={setSaveValue}
          value={saveValue}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.accent }]}
          onPress={handleSave}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Encrypt & Save</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }]}>
        <Text style={[styles.cardLabel, { color: colors.accent }]}>Retrieve Secret</Text>
        <TextInput
          style={[styles.input, { color: colors.text, backgroundColor: colors.surfaceAlt, borderColor: colors.border }]}
          placeholderTextColor={colors.textSecondary}
          placeholder="Enter key to retrieve"
          onChangeText={setRetrieveKey}
          value={retrieveKey}
          onSubmitEditing={handleRetrieve}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.accent }]}
          onPress={handleRetrieve}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Decrypt & Reveal</Text>
        </TouchableOpacity>
      </View>

      <ResultModal
        visible={modal !== null}
        title={modal?.title ?? ''}
        value={modal?.value ?? null}
        onClose={() => setModal(null)}
      />
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
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: 'SpaceMono',
    fontSize: 12,
    letterSpacing: 0.5,
    marginBottom: 28,
  },
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  cardLabel: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.8,
    marginBottom: 16,
    textTransform: 'uppercase',
  },
  input: {
    fontFamily: 'SpaceMono',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 8,
    padding: 14,
    marginBottom: 12,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  buttonText: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});

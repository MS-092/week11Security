import { Modal as RNModal, Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

type ResultModalProps = {
  visible: boolean;
  title: string;
  value: string | null;
  onClose: () => void;
};

export default function ResultModal({ visible, title, value, onClose }: ResultModalProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'dark'];

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.accent }]}>
          <View style={[styles.accentBar, { backgroundColor: colors.accent }]} />
          <Text style={[styles.title, { color: colors.accent }]}>{title}</Text>
          {value ? (
            <View style={[styles.valueBox, { backgroundColor: colors.background, borderColor: colors.border }]}>
              <Text style={[styles.valueText, { color: colors.text }]}>{value}</Text>
            </View>
          ) : (
            <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
              No value stored under that key.
            </Text>
          )}
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.accent }]}
            onPress={onClose}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Dismiss</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderWidth: 1,
    borderRadius: 16,
    overflow: 'hidden',
  },
  accentBar: {
    height: 3,
  },
  title: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 12,
  },
  valueBox: {
    marginHorizontal: 24,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
  },
  valueText: {
    fontFamily: 'SpaceMono',
    fontSize: 16,
    lineHeight: 22,
  },
  emptyText: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  button: {
    marginHorizontal: 24,
    marginBottom: 24,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'SpaceMono',
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
});

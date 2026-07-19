import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          count < 0 && styles.negative,
          count > 5 && styles.above,
        ]}
      >
        Count: {count}
      </Text>

      <View style={styles.buttonCtn}>
        <Pressable
          style={[styles.button, styles.decreaseBtn]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>Decrease</Text>
        </Pressable>

        <Pressable
          style={[styles.button, styles.increaseBtn]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>Increase</Text>
        </Pressable>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.title}>Habit</Text>
          <Text style={styles.streak}>🔥 5</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, marginBottom: 16 },
  buttonCtn: { flexDirection: "row", gap: 10 },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  decreaseBtn: { backgroundColor: "red" },
  increaseBtn: { backgroundColor: "green" },
  buttonText: { color: "#fff", fontWeight: "600" },
  negative: { color: "red" },
  above: { color: "green" },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "600" },
  streak: { fontSize: 14 },
});

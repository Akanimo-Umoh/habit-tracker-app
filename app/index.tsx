import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
  Pressable,
} from "react-native";

export default function Index() {
  const { width } = useWindowDimensions();
  const ctnWidth = width * 0.9;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const habits = [
    { id: "1", name: "Drink Water", streak: 5 },
    { id: "2", name: "Read", streak: 12 },
    { id: "3", name: "Code", streak: 20 },
    { id: "4", name: "Exercise", streak: 4 },
    { id: "5", name: "Cook", streak: 29 },
  ];

  return (
    <View style={styles.main}>
      <View style={[styles.cardCtn, { width: ctnWidth }]}>
        <FlatList
          data={habits}
          keyExtractor={(data) => data.id}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          contentContainerStyle={styles.innerCtn}
          renderItem={({ item }) => {
            const selected = selectedId === item.id;

            return (
              <Pressable
                onPress={() => setSelectedId(item.id)}
                style={[styles.card, selected && styles.selectedCard]}
              >
                <View style={styles.row}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.streak}>🔥 {item.streak}</Text>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { alignItems: "center", justifyContent: "center" },
  cardCtn: {
    paddingTop: 12,
    paddingBottom: 12,
  },
  innerCtn: { paddingHorizontal: 2, paddingVertical: 12 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "transparent",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  saparatorComponent: { borderWidth: 1, borderColor: "red" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 16, fontWeight: "600" },
  streak: { fontSize: 14 },
  selectedCard: {
    borderColor: "#2563eb",
    backgroundColor: "#eff6ff",
  },
});

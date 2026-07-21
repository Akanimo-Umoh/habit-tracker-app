import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from "react-native";

export default function Index() {
  const { width } = useWindowDimensions();
  const ctnWidth = width * 0.9;

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
          contentContainerStyle={styles.innerCtn}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.streak}>🔥 {item.streak}</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { alignItems: "center", justifyContent: "center" },
  cardCtn: {
    gap: 12,
    paddingTop: 12,
    paddingBottom: 12,
  },
  innerCtn: { gap: 12, paddingHorizontal: 2, paddingVertical: 12 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    // marginBottom: 12,
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

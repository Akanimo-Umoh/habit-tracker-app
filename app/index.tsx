import {
  View,
  Text,
  
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function Index() {
  const { width } = useWindowDimensions();
  const ctnWidth = width * 0.9;

  return (
    <View style={styles.main}>
      <View style={[styles.cardCtn, { width: ctnWidth }]}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>Habit</Text>
            <Text style={styles.streak}>🔥 5</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>Habit</Text>
            <Text style={styles.streak}>🔥 5</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>Habit</Text>
            <Text style={styles.streak}>🔥 5</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={styles.title}>Habit</Text>
            <Text style={styles.streak}>🔥 5</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { alignItems: "center", justifyContent: "center" },
  cardCtn: {
    gap: 12,
    paddingTop: 12,
  },
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

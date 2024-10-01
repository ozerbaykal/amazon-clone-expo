import { SafeAreaView, StatusBar } from "react-native";
import Router from "./src/navigation/Router";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#9ee4d4" }}>
      <StatusBar barStyle={"light-content"} />
      <Router />
    </SafeAreaView>
  );
};

export default App;

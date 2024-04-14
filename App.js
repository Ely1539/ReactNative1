import { StyleSheet, View } from "react-native"
import Home from "./src/screen/Home"
import { colors } from "./src/constants/colors"
import Header from "./src/components/Header"

const App = () => {
  return (
    <View style={styles.container}>
      <Header title={"COMPANY DETAIL SHOP"}/>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 35,
      flex: 1,
      alignItems: "center",
    backgroundColor: colors.groundColor,
    },
  })

export default App
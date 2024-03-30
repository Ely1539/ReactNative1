import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import ModalCust from "./src/components/modalCust/modalCust";
import TaskInput from "./src/components/taskInput/taskInput";
import { colors } from "./src/components/constants/colors";

const App = () => {
    const [textItem, setTextItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [itemSelected, setItemSelected] = useState({});

    const handleChangeText = (text) => setTextItem(text);

    const addItem = () => {
        setItemList(currentValue => [
            ...currentValue,
            { id: Math.random().toString(), value: textItem },
        ]);
        setTextItem("");
    };

    const handleModal = (item) => {
        setItemSelected(item);
        setModalVisible(true);
    };

    const handleDelete = () => {
        const filter = itemList.filter(task => task !== itemSelected);
        setItemList(filter);
        setModalVisible(false);
    };

    const handleCancelModal = () => {
        setModalVisible(false);
        setItemSelected({});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LISTADO DE TAREAS</Text>
            <TaskInput 
                addItem={addItem}
                handleChangeText={handleChangeText}
                textItem={textItem}
            />
            <ImageBackground source={require('./assets/task.png')} style={styles.backgroundImage}>
            {itemList.length > 0 && ( 
                <View style={styles.taskContainer}>
                    <FlatList
                        style={styles.flatlist}
                        data={itemList}
                        keyExtractor={task => task.id.toString()}
                        renderItem={({item}) =>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => handleModal(item)}
                            >
                                <Text style={styles.taskText}>{item.value}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
            )}
            </ImageBackground>
            <ModalCust
                handleCancelModal={handleCancelModal}
                handleDelete={handleDelete}
                itemSelected={itemSelected}
                modalVisible={modalVisible}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 90,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    taskContainer: {
        marginBottom:20,
        width: "90%",
        paddingVertical: 10,
        borderWidth: 1, 
        borderColor: colors.white,
        backgroundColor: colors.blackTrans,
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.blackTrans,
        width: "100%",
        paddingVertical: 5,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: colors.white, 
    },
    taskText: {
        fontWeight: "bold",
        fontSize: 16,
        color: 'white',
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center", 
        height: 400,
        width:'100%',
    },
    title: {
        backgroundColor: 'tomato',
        height: 25, 
        width: '60%',
       textAlign: 'center',
       color: colors.white,
       borderRadius: 8,
       borderWidth: 1,
       borderColor: colors.black,
       justifyContent: 'center',
    }
    
});
export default App;


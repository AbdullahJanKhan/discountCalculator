import React, { useDebugValue, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  TouchableHighlight,
  ScrollView,
} from "react-native";

export default function App() {
  const [getPrice, setPrice] = useState("");
  const [getDiscount, setDiscount] = useState("");

  const [getDiscountValue, setDiscountValue] = useState("");
  const [getSaveAmount, setSaveAmount] = useState("");

  const [getHistory, setHistory] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const calculate = () => {
    const actual = Number(getPrice);
    const discount = Number(getDiscount);
    const discountValue = (actual - actual * (discount / 100)).toFixed(2);
    const save = (actual - discountValue).toFixed(2);
    setDiscountValue(String(discountValue));
    setSaveAmount(String(save));
  };

  const checkDiscount = (data) => {
    const check = Number(data);
    if (check < 0 || check > 100) {
      alert("Invalid Discount Check Again Applied");
      setDiscount("");
    } else {
      setDiscount(data);
    }
  };

  const save = () => {
    const calculations = [
      getPrice,
      getDiscount,
      getDiscountValue,
      getSaveAmount,
    ];
    setHistory([...getHistory, calculations]);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Actual| Discount%| Discount Price| Save</Text>
          <ScrollView>
                {getHistory.map(
                    (data) => <Text>{data[0]}| {data[1]}| {data[2]}| {data[3]}</Text>
                )}
            </ScrollView>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "grey" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Text style={styles.header}>Discount Calculator</Text>
      <View style={styles.inputTextContainer}>
        <View style={styles.inputTextStyles}>
          <Text>Orignal Price: </Text>
          <TextInput
            keyboardType="decimal-pad"
            value={getPrice}
            onChangeText={(data) => setPrice(data)}
            placeholder="Enter Actual Price"
          />
        </View>
        <View style={styles.inputTextStyles}>
          <Text>Discount Avaliable: </Text>
          <TextInput
            keyboardType="decimal-pad"
            value={getDiscount}
            onChangeText={(data) => checkDiscount(data)}
            placeholder="Enter Discount"
          />
        </View>
      </View>
      <View style={styles.buttonStyle}>
        <Button title="Calculate" color="grey" onPress={() => calculate()} />
      </View>
      <View style={styles.inputTextContainer}>
        <View style={styles.inputTextStyles}>
          <Text>Discounted Value: </Text>
          <TextInput
            style={styles.textStyle}
            editable={false}
            value={getDiscountValue}
            placeholder="Discounted Price"
          />
        </View>
        <View style={styles.inputTextStyles}>
          <Text>You Save: </Text>
          <TextInput
            style={styles.textStyle}
            editable={false}
            value={getSaveAmount}
            placeholder="You Save"
          />
        </View>
      </View>
      <View style={styles.inputTextContainer}>
        <View style={styles.buttonStyle}>
          <Button title="Save Value" color="grey" onPress={() => save()} />
        </View>
        <View style={styles.buttonStyle}>
          <Button title="View History" color="grey" onPress={() => {setModalVisible(!modalVisible)}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    margin: "5%",
  },
  textStyle: {
    color: "black",
  },
  inputTextContainer: {
    flexDirection: "row",
  },
  inputTextStyles: {
    width: "48%",
    borderWidth: 2,
    borderColor: "grey",
    padding: 5,
    margin: 5,
  },
  buttonStyle: {
    width: "50%",
    padding: "5%",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyleModal: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

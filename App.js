import { StatusBar } from "expo-status-bar";
import { Button } from '@rneui/themed';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { db, dbt } from "./configs/firebase";
import { set, ref as reffb } from "firebase/database";

// import Icon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/AntDesign";
import Ico from "react-native-vector-icons/Entypo";

export default function App() {
  const onHandleLeft = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 6,
    });
  };
  const onHandleRight = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 7,
    });
  };
  const onHandleFront = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 4,
    });
  };
  const onHandleBack = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 5,
    });
  };
  const onHandleStop = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 8,
    });
  };
  const onHandleWaterOn = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 9,
    });
  };
  const onHandleWaterOff = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 10,
    });
  };
  const onHandleRoom1 = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 1,
    });
  };
  const onHandleRoom2 = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 2,
    });
  };
  const onHandleRoom3 = async () => {
    await set(reffb(db, "/xe_esp"), {
      status: 3,
    });
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Image
          style={{ width: 120, height: 100 }}
          source={require("./assets/logo.png")}
        />
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "red",
            marginLeft: 20,
            marginTop: 40,
          }}
        >
          Fire Truck
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "green" }}>
          Automatic fire fighting by room
        </Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <View>
            <Button
              color="#55bdc1"
              onPress={onHandleRoom1}
              icon={<Icon style={{marginRight:10}} name="home" size={15} color="white" />}
              title="Room 1"
            />
          </View>

          <View>
            <Button
              title="Room 2"
              onPress={onHandleRoom2}
              color="#55bdc1"
              icon={<Icon style={{marginRight:10}} name="home" size={15} color="white" />}
            />
          </View>

          <View>
            <Button
              title="Room 3"
              onPress={onHandleRoom3}
              color="#55bdc1"
              icon={<Icon style={{marginRight:10}} name="home" size={15} color="white" />}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 4,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, color: "green", marginBottom: 20 }}>
          Manual Car Control
        </Text>

        <View>
          <Icon.Button backgroundColor="#f6f6f6"  onPress={onHandleFront} name="caretup" size={48} color="#55bdc1" />
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}
        >
          <Icon.Button backgroundColor="#f6f6f6" onPress={onHandleLeft} name="caretleft" size={48} color="#55bdc1" />
          <Icon.Button backgroundColor="#f6f6f6" onPress={onHandleStop} name="instagram" size={48} color="#55bdc1" />
          <Icon.Button backgroundColor="#f6f6f6" onPress={onHandleRight} name="caretright" size={48} color="#55bdc1" />
        </View>
        <View style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
          }}>
          <Icon.Button backgroundColor="#f6f6f6" onPress={onHandleBack} name="caretdown" size={48} color="#55bdc1" />
        </View>

        <View style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 40,
            justifyContent: "space-around",
          }}>
          <Button
            title="Water On"
            color="#55bdc1"
            onPress={onHandleWaterOn}
            icon={<Ico  style={{marginRight:10}} name="water" size={15} color="blue" />}
          />
          <Button
            title="Water Off"
            color="#55bdc1"
            onPress={onHandleWaterOff}
            icon={<Ico  style={{marginRight:10}} name="water" size={15} color="blue" />}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f6f6f6",
  },
  header: {},
});

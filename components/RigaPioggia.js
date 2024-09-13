// UI
import { View,TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { coloriRighe, stileRighe,sizes } from "../utils_stile.js";

function Riga({ icona, tipo, current, manageSound }) {
    return (
        <View style={stileRighe.riga}>
            <View style={stileRighe.mainWrapper}>
                <TouchableOpacity onPress={() => manageSound(tipo, 0)} style={{ ...stileRighe.wrapperIcona, backgroundColor: current.tipo === tipo && current.i === 0 ? coloriRighe.tastoCliccato : coloriRighe.tasto}}>
                    <Ionicons  name={icona} size={sizes.iconeSuoni} color="rgba(150, 248, 255, 0.60)" />
                </TouchableOpacity>
                <View style={stileRighe.wrapperLivello}>
                    <View style={{ ...stileRighe.livello, backgroundColor: coloriRighe.min }}></View>
                </View>
            </View>
            <View style={stileRighe.mainWrapper}>
                <TouchableOpacity onPress={() => manageSound(tipo, 1)}  style={{ ...stileRighe.wrapperIcona, backgroundColor: current.tipo === tipo && current.i === 1 ? coloriRighe.tastoCliccato : coloriRighe.tasto }}>
                    <Ionicons  name={icona} size={sizes.iconeSuoni} color="rgba(150, 248, 255, 0.80)" />
                </TouchableOpacity>
                <View style={stileRighe.wrapperLivello}>
                    <View style={{ ...stileRighe.livello, backgroundColor: coloriRighe.mid }}></View>
                    <View style={{ ...stileRighe.livello, backgroundColor: coloriRighe.mid }}></View>
                </View>
            </View>
            <View style={stileRighe.mainWrapper}>
                <TouchableOpacity onPress={() => manageSound(tipo, 2)} style={{ ...stileRighe.wrapperIcona, backgroundColor: current.tipo === tipo && current.i === 2 ? coloriRighe.tastoCliccato : coloriRighe.tasto }}>
                    <Ionicons  name={icona} size={sizes.iconeSuoni}  color="rgb(150, 248, 255)" />
                </TouchableOpacity>
                <View style={stileRighe.wrapperLivello}>
                    <View style={{ ...stileRighe.livello, backgroundColor: coloriRighe.max }}></View>
                    <View style={{ ...stileRighe.livello, backgroundColor: coloriRighe.max }}></View>
                    <View style={{ ...stileRighe.livello, backgroundColor: coloriRighe.max }}></View>
                </View>
            </View>
        </View>
    );
};



export default Riga;
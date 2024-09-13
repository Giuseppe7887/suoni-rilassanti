// UI
import { View, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { coloriRighe,stileRighe,sizes  } from "../utils_stile.js";



function Riga({ icona,manageSound,tipo,current}) {
    
    return (
        <View style={stileRighe.riga}>
            <View style={stileRighe.mainWrapper} >
                <TouchableOpacity onPress={()=>manageSound(tipo,0)} style={{...stileRighe.wrapperIcona,backgroundColor:current.tipo===tipo&&current.i ===0 ?coloriRighe.tastoCliccato:coloriRighe.tasto}}>
                    <MaterialCommunityIcons name={icona} size={sizes.iconeSuoni} color={tipo === "phon"?"rgba(67, 155, 27, 0.60)":"rgba(90, 90, 244, 0.60)"} />
                </TouchableOpacity>
                <View style={stileRighe .wrapperLivello}>
                    <View style={{ ...stileRighe .livello, backgroundColor: coloriRighe.min }}></View>
                </View>
            </View>
            <View style={stileRighe.mainWrapper}>
                <TouchableOpacity onPress={()=>manageSound(tipo,1)} style={{...stileRighe .wrapperIcona,backgroundColor:current.tipo===tipo&&current.i ===1 ?coloriRighe.tastoCliccato:coloriRighe.tasto}}>
                    <MaterialCommunityIcons name={icona} size={sizes.iconeSuoni}  color={tipo === "phon"?"rgba(67, 155, 27, 0.80)":"rgba(90, 90, 244, 0.80)"} />
                </TouchableOpacity>
                <View style={stileRighe .wrapperLivello}>
                    <View style={{ ...stileRighe .livello, backgroundColor: coloriRighe.mid }}></View>
                    <View style={{ ...stileRighe .livello, backgroundColor: coloriRighe.mid }}></View>
                </View>
            </View>
            <View style={stileRighe.mainWrapper}>
                <TouchableOpacity onPress={()=>manageSound(tipo,2)} style={{...stileRighe .wrapperIcona,backgroundColor:current.tipo===tipo&&current.i ===2 ?coloriRighe.tastoCliccato:coloriRighe.tasto}}>
                    <MaterialCommunityIcons  name={icona} size={sizes.iconeSuoni}  color={tipo === "phon"?"rgb(67, 155, 27)":"rgb(90, 90, 244)"} />
                </TouchableOpacity>
                <View style={stileRighe .wrapperLivello}>
                    <View style={{ ...stileRighe .livello, backgroundColor: coloriRighe.max }}></View>
                    <View style={{ ...stileRighe .livello, backgroundColor: coloriRighe.max }}></View>
                    <View style={{ ...stileRighe .livello, backgroundColor: coloriRighe.max }}></View>
                </View>
            </View>
        </View>
    );
};



export default Riga;


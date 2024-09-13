// UI
import { View, Text,TouchableOpacity } from "react-native"
import { AntDesign, Feather, MaterialIcons, Entypo } from "@expo/vector-icons"
import { stileFooter, coloriTema, sizes } from "../utils_stile.js";

// UX
import { toTime } from '../utils.js';

export default function Footer({ togglePlay, current, mode, videos, timerData, setModalData, modalData, setVideos, setMode }) {
    return (
        <View
            style={{ ...stileFooter.footer, backgroundColor: coloriTema[mode].footer }}>
            <TouchableOpacity onPress={togglePlay} style={{...stileFooter.wrapperIcona,width:timerData.start?"18%":"25%"}}>
                <AntDesign
                    name={current.isPlaying ? "pause" : "playcircleo"}
                    size={sizes.iconeFooter}
                    color={coloriTema[mode].footerIcons.playPause}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalData({ ...modalData, show: true })} style={{...stileFooter.wrapperIcona,width:timerData.start?"18%":"25%"}}>
                <AntDesign
                    name="clockcircleo"
                    size={sizes.iconeFooter}
                    color={coloriTema[mode].footerIcons.clock}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMode(mode === "dark" ? "light" : "dark")} style={{...stileFooter.wrapperIcona,width:timerData.start?"18%":"25%"}}>
                <Feather
                    name={mode === "dark" ? "sun" : "moon"}
                    size={sizes.iconeFooter}
                    color={coloriTema[mode].footerIcons.sunMoon}
                />
            </TouchableOpacity>
            {
                videos ?
                    <TouchableOpacity onPress={() => setVideos(!videos)} style={{...stileFooter.wrapperIcona,width:timerData.start?"18%":"25%"}}>
                        <MaterialIcons
                            size={sizes.iconeFooter}
                            name="cancel-presentation"
                            color={coloriTema[mode].footerIcons.noImage} />
                    </TouchableOpacity> :
                    <TouchableOpacity  onPress={() => setVideos(!videos)} style={{...stileFooter.wrapperIcona,width:timerData.start?"18%":"25%"}}>
                        <Entypo
                            size={sizes.iconeFooter}
                            name="image"
                            color={coloriTema[mode].footerIcons.image} />
                    </TouchableOpacity>}
            {timerData.start &&
                <View style={stileFooter.timer}>
                    <Text style={{ fontSize: sizes.testoFooter, color: "orange", fontWeight: 600 }}>
                        {toTime(timerData.timing)}
                    </Text>
                </View>
            }
        </View>
    )
};
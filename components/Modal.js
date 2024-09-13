// UI
import { Modal, View, Button, Text, TouchableOpacity } from "react-native";
import { stileModal, sizes, coloriTema } from "../utils_stile.js"

// icons
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

// UX & data
import { toTime, minuti } from "../utils.js";

import { Select, Box } from "native-base";


export default function Modale({ modalData, timerData, manageTimer, setModalData, setTimerData, mode }) {
  return (
    <Modal
      animationType='slide'
      transparent
      visible={modalData.show}>
      <TouchableOpacity onPress={() => { setModalData({ ...modalData, show: false }) }} style={stileModal.header}></TouchableOpacity>
      <View style={{ ...stileModal.body, backgroundColor: coloriTema[mode].modal.body }}>
        <TouchableOpacity style={stileModal.closeButton} onPress={() => setModalData({ ...modalData, show: false })}>
          <AntDesign
            name="closecircle"
            size={sizes.closeButton}
            color="red" />
        </TouchableOpacity>
        <Text style={{ ...stileModal.testo, fontSize: sizes.testoTimer, color: coloriTema[mode].modal.text }}>TIMER</Text>
        {!timerData.start ?
          <>
            <Box maxW="300" style={{ ...stileModal.input }}>
              <Select
                color={coloriTema[mode].modal.text}
                dropdownOpenIcon={<MaterialIcons name="keyboard-arrow-up" size={24} color="black" />}
                dropdownCloseIcon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
                selectedValue={timerData['minuti']} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
                  bg: "teal.600"
                }} mt={1} onValueChange={x=>  setTimerData(y => y = { ...timerData, timing: x * 60, minuti: x })}>
                {
                  minuti.map(x => {
                    return <Select.Item key={x} label={x < 60 ? `${x} minuti` : `${x / 60} ore`} value={x} />
                  })
                }
              </Select>
            </Box>
            <Button title='Avvia' onPress={() => manageTimer("start")} />
          </> :
          <>
            <View style={{ margin: 30 }}>
              <Text style={{ fontWeight: 600, fontSize: sizes.timeInModal, color: coloriTema[mode].modal.text }}>{toTime(timerData.timing)}</Text>
            </View>
            <Button title='Azzera' color="red" style={stileModal.azzeraButton} onPress={() => manageTimer("end")} />
          </>
        }
      </View>
    </Modal>

  )
};

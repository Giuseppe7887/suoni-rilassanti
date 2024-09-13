import { Vibration } from "react-native";
// suoni
export const suoni = {
    phon: [
        require("./assets/suoni/phon/0_phon.mp3"),
        require("./assets/suoni/phon/1_phon.mp3"),
        require("./assets/suoni/phon/2_phon.mp3"),
    ],
    mare: [
        require("./assets/suoni/mare/0_mare.mp3"),
        require("./assets/suoni/mare/1_mare.mp3"),
        require("./assets/suoni/mare/3_mare.mp3")
    ],
    pioggia: [
        require("./assets/suoni/pioggia/0_pioggia.mp3"),
        require("./assets/suoni/pioggia/1_pioggia.mp3"),
        require("./assets/suoni/pioggia/2_pioggia.mp3")
    ]
}

// video

export const video = {
    mare: require("./assets/video/mare.mp4"),
    phon: require("./assets/video/phon.mp4"),
    pioggia: require("./assets/video/pioggia.mp4")
}


export const minuti = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 90, 120, 150, 180, 210, 240, 270, 300];


// conversione secondi a minuti/ore

export function toTime(totalSeconds) {
    const totalMs = totalSeconds * 1000;
    const result = new Date(totalMs).toISOString().slice(11, 19);
    return result;
};

export function vibra(ms) {
    Vibration.vibrate(ms)
};
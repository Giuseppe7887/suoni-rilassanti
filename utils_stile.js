import { StyleSheet, PixelRatio, Dimensions } from "react-native";

// colori livelli
export const coloriRighe = {
    min: "green",
    mid: "orange",
    max: "red",
    tasto: "rgba(255,255,255,0.35)",
    tastoCliccato: "rgba(255,255,255,0.7)"
};


// colori tema
export const coloriTema = {
    dark: {
        background: "black",
        text: "white",
        default: "white",
        footer: "black",
        footerIcons: {
            playPause: "white",
            clock: "white",
            sunMoon: "white",
            image: "white",
            noImage: "white"
        },
        modal: {
            body: "black",
            input: "rgba(200,200,200,1)",
            text: "white"
        }
    },
    light: {
        background: "rgba(220,220,220,0.5)",
        text: "black",
        default: "black",
        footer: "transparent",
        footerIcons: {
            playPause: "black",
            clock: "black",
            sunMoon: "black",
            image: "black",
            noImage: "black"
        },
        modal: {
            body: "rgba(255,255,255,0.9)",
            input: "rgba(200,200,200,1)",
            text: "black"
        }
    }
}


// # STILI

// stile App
export const stileMain = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-around"
    },
    centro: {
        width: "100%",
        height: "60%"
    }
});

// stile righe
export const stileRighe = StyleSheet.create({
    riga: {
        width: "100%",
        height: "33%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
    },
    mainWrapper: {
        width: "30%"
    },
    wrapperLivello: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "50%"
    },
    wrapperIcona: {
        width: "100%",
        height: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        elevation: 0.7
    },
    livello: {
        width: 20,
        height: 2,
        backgroundColor: "black",
        margin: 5
    },
    max: {
        backgroundColor: "red"
    }
})


export const stileFooter = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 0,
        height: "10%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        borderTopColor: "grey",
        borderTopWidth: 1
    },
    placeHolder: {
        width: "100%",
        height: "10%",
        position: "absolute",
        bottom: 0,
        backgroundColor:"white"
    },
    wrapperIcona: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    timer: {
        width: "28%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
})


export const stileModal = StyleSheet.create({
    closeButton: {
        left: 0,
        top: 0,
        position: "absolute",
        zIndex: 2,
        padding: 30
    },
    body: {
        width: "100%",
        height: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        margin: 30
    },
    header: {
        width: "100%",
        height: "40%",
        backgroundColor: "rgba(0,0,0,0.3)"
    }
})


const fontRatio = PixelRatio.getFontScale();
export const getFontScale = size => size / fontRatio;



const altezza = Dimensions.get("screen").width;
export const translate = altezza - (altezza / 2);

// sizes
export const sizes = {
    iconeFooter: getFontScale(25),
    testoFooter: getFontScale(20),
    iconeSuoni: getFontScale(40),
    testoTimer: getFontScale(30),
    closeButton: getFontScale(30),
    timeInModal: getFontScale(40),
}

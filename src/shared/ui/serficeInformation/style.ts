import {styled} from "@mui/material";

export const ContainerPopup = styled("div")({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    backgroundColor: "#6464646B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

export const ContentPopup = styled("div")({
    width: "710px",
    height: "480px",
    backgroundColor: "#ffffff"
});

export const PopupHeader = styled("div")({
    padding: "22px 0px",
    borderRadius: "0px 0px 10px 10px",
    backgroundColor: "#36CBFF",
    position: "relative",
    h2: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "39.01px",
    },
    button: {
        position: "absolute",
        left: "38px",
        top: "50%",
        transform: "translateY(-50%)"
    }
});

export const ServiceInformation = styled("div")({
    padding: "30px 35px 45px 35px",
    height: "390px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    div: {
        display: "flex"
    },
    h3: {
        fontWeight: "500",
        fontSize: "28px",
        lineHeight: "25px",
        letterSpacing: "0.127072px",
        color: "#333350"
    },
    h4: {
        fontWeight: "600",
        fontSize: "15px",
        lineHeight: "18px",
        color: "#000000",
        marginRight: "5px"
    },
    span: {
        fontSize: "15px",
        lineHeight: "18px",
        color: "#000000"
    }
});

export const ServiceInformationDescription = styled("div")({
    flexDirection: "column",
    gap: "20px",
    h6: {
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#333350"
    },
    p: {
        width: "640px",
        height: "167px",
        background: "rgba(151, 153, 154, 0.08)",
        border: "1px solid rgba(39, 49, 56, 0.51)",
        borderRadius: "8px",
        fontSize: "16px",
        lineHeight: "20px",
        color: "#333350",
        padding: "10px 13px",
    }
});
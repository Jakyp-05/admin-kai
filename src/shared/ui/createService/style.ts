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
    height: "547px",
    backgroundColor: "#ffffff",
    h2: {
        padding: "22px 0px",
        textAlign: "center",
        backgroundColor: "#36CBFF",
        color: "#ffffff",
        fontSize: "32px",
        fontWeight: "500",
        lineHeight: "39.01px",
        borderRadius: "0px 0px 10px 10px",
    },
});

export const ServicePost = styled("div")({
    padding: "30px 35px 45px 35px",
});

export const ServiceInputWrap = styled("div")({
    display:"flex",
    justifyContent:"space-between"
});

export const ServiceInput = styled("div")({
    p: {

        fontSize: "15px",
        fontWeight: "500",
        lineHeight: "18.29px",
        color: "#333350",
    },
    input: {
        width: "287px",
        height: "35px",
        border: "1px solid #27313882",
        backgroundColor: "#97999A14",
        borderRadius: "10px",
        paddingLeft: "10px",
        marginTop: "5px",
    },
});

export const ServiceTexterea = styled("div")({
    marginTop: "35px",
    p: {
        fontSize: "15px",
        fontWeight: "500",
        lineHeight: "18.29px",
        color: "#333350",
    },
    textarea: {
        marginTop: "5px",
        outline: "none",
        padding: "10px",
        borderRadius: "10px",
        backgroundColor: "#97999A14",
        border: "1px solid #27313882",
        width: "100%",
        maxWidth: "638px",
        height: "189px",
        maxHeight: "189px",
        resize: "none",
        boxSizing: "border-box",
    },
});

export const ServiceButton = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    columnGap: "30px",
    marginTop: "35px",
    button: {
        display: "flex",
        alignItems: "center",
        columnGap: "10px",
        width: "174px",
        height: "43px",
        backgroundColor: "#36CBFF",
        padding: "11px 35px",
        cursor: "pointer",
        borderRadius: "7px",
        span: {
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "20.76px",
            color: "#ffffff",
        },
        p: {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "20.76px",
            letterSpacing: "0.33897700905799866px",
            color: "#ffffff",
        },
        "&:first-child": {
            width: "148px",
            backgroundColor: "#838383",
        },
    },
});

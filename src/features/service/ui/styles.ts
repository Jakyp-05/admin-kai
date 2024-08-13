import {styled} from "@mui/material";

export const ServiceContainer = styled("div")(({theme}) => ({
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
}));

export const ServiceHead = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #B6B7BC",
    padding: "30px 50px 10px",

    h2: {
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "29.26px",
        color: "#333350",
    },
});

export const ServiceBody = styled("div")({
    padding: "20px 20px",
    table: {
        borderCollapse: "collapse",
        width: "100%",
        marginTop: "3px",
    },
    thead: {
        borderBottom: "1px solid black",
        padding: "20px",
    },
    tr: {
        borderBottom: "1px solid black",
        cursor: "pointer",
    },
    td: {
        textAlign: "center",
        padding: "20px 18px",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "25px",
        color: "#333350",
        letterSpacing: "0.127072px",
        p: {
            width: "100%",
            textAlign: "left",
        },

        "&:last-child": {
            cursor: "default",
        },
    },

    th: {
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "500",
        lineHeight: "24.38px",
        color: "#333350",
        width: "300px",
        paddingBottom: "20px"
    },
});

export const Icons = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "10px",
    span: {
        cursor: "pointer",
    },
});

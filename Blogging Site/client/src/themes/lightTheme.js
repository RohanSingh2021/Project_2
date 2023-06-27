import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: "#757ce8",
        },
        secondary: {
            main: "#ed4b82"
        },
        text: {
            light: "#834bff",
            primary: "#616161"
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                variant: "outlined",
                margin: "dense",
                fullWidth: true,
                InputLabelProps: {
                    shrink: true,
                    color: 'primary'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                size: "small",
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#fff'
                }
            }
        },
        MuiCard: {
            variants:[
                {
                    props: {variant: 'shaded'},
                    style: {
                        backgroundColor: "#dcedc8", 
                        borderRadius: '10px',
                    }
                }
            ]
        },
        MuiTypography:{
            defaultProps: {
                align: 'left'
            },
            styleOverrides: {
                root: {
                    color:"#424242",
                    fontWeight:'bold',
                    
                }
            }
            
        },
        MuiPaper: {
            styleOverrides: {
                root:{
                    padding: 8
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    
                            }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: '#1fbfc1'
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#1fbfc1',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                }
            }
        }
    }
})
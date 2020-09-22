import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { Tabs, Tab } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
// import useStyles from './PageStyles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1
        },
        marginRight: "100px",
        position: "absolute",
        left: "100px"
    },
    menuBarOptions: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
    myTab: {
        minWidth: 100, // a number of your choice
        width: 80,
        margin: "auto"
    },
    tabIndicator: {
        minWidth: 100,
    },

    header: {
        display: "flex",
        justifyContent: "center"
    }

}));

const MenuBar = props => {
    const { history } = props
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = pageURL => {
        history.push(pageURL);
        setAnchorEl(null);
    };

    const menuItems = [
        {
            menuTitle: "Home",
            pageURL: "/Portfolio/home"
        },
        {
            menuTitle: "About",
            pageURL: "/Portfolio/about"
        },
        {
            menuTitle: "Skills",
            pageURL: "/Portfolio/skills"
        },
        {
            menuTitle: "Hobbies",
            pageURL: "/Portfolio/hubbies"
        },
        {
            menuTitle: "Projects",
            pageURL: "/Portfolio/projects"
        },
        {
            menuTitle: "Contact",
            pageURL: "/Portfolio/contact"
        },
    ];

    const tabNameToIndex = {
        0: "home",
        1: "about",
        2: "skills",
        3: "hobbies",
        4: "projects",
        5: "contact"
    }

    const [selectedTab, setSelectedTab] = React.useState(0)
    const handleTabChange = (event, newValue) => {
        history.push(`/Portfolio/${tabNameToIndex[newValue]}`)
        setSelectedTab(newValue)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: '#0C120C' }}>
                <Toolbar className={classes.header}>
                    <Typography variant="h6" className={classes.title}>
                        PK
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "right"
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                {menuItems.map(menuItem => {
                                    const { menuTitle, pageURL } = menuItem;
                                    return (
                                        <MenuItem onClick={() => handleMenuClick(pageURL)}>
                                            {menuTitle}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </>
                    ) : (

                            <Tabs className={classes.tabIndicator} value={selectedTab} onChange={handleTabChange} >
                                <Tab className={classes.myTab} label="Home" />
                                <Tab className={classes.myTab} label="About" />
                                <Tab className={classes.myTab} label="Skills" />
                                <Tab className={classes.myTab} label="Hobbies" />
                                <Tab className={classes.myTab} label="Projects" />
                                <Tab className={classes.myTab} label="Contact" />
                            </Tabs>

                        )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default withRouter(MenuBar);
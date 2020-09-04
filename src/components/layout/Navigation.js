import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'
import Home from '../home/Home'
import About from '../about/About'
import useStyles from './PageStyles'
// import myTab from './myTab'

const TabPanel = () => {
    const [selectedTab, setSelectedTab] = React.useState(0)
    const handleChange = (event, newTab) => {
        setSelectedTab(newTab)
    }
    const classes = useStyles()
    return (
        <>
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab className={classes.myTab} label="Home" />
                <Tab className={classes.myTab} label="About" />
                <Tab className={classes.myTab} label="Skills" />
                <Tab className={classes.myTab} label="Hobbies" />
                <Tab className={classes.myTab} label="Projects" />
                <Tab className={classes.myTab} label="Contact" />
                {/* <Tab label="" /> */}
            </Tabs>

            {selectedTab === 0 && <Home />}
            {selectedTab === 1 && <About />}
        </>
    )
}

export default TabPanel

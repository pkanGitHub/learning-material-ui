import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import Home from '../home/Home'
import About from '../about/About'
import useStyles from './PageStyles'

const TabPanel = props => {
    const { match, history } = props
    const { params } = match
    const { page } = params

    const tabNameToIndex = {
        0: "home",
        1: "about"
    }

    const indexToTabName = {
        home: 0,
        about: 1
    }

    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page])
    const handleChange = (event, newValue) => {
        history.push(`/Portfolio/${tabNameToIndex[newValue]}`)
        setSelectedTab(newValue)
    }
    const classes = useStyles()
    return (
        <>

            {/* <Paper className={classes.myPaper}> */}
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab className={classes.myTab} label="Home" />
                <Tab className={classes.myTab} label="About" />
                <Tab className={classes.myTab} label="Skills" />
                <Tab className={classes.myTab} label="Hobbies" />
                <Tab className={classes.myTab} label="Projects" />
                <Tab className={classes.myTab} label="Contact" />
            </Tabs>
            {selectedTab === 0 && <Home />}
            {selectedTab === 1 && <About />}
            {/* </Paper> */}
        </>
    )
}

export default TabPanel

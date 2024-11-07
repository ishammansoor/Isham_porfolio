import React from 'react'
import { Link } from 'react-router-dom'
import './styles/resume.css'
import { Grid, Tab, Tabs } from '@mui/material'
import { ArrowBackIosNew} from '@mui/icons-material'
import {motion} from 'framer-motion'
import AboutMe from './AboutMe'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        style={{height: '100%', width: '100%'}}
      >
        {value === index && (
          <div style={{height: "100%", width: '100%'}}>
                {children}
            </div>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

export default function Resume() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div style={{height: '100%', width: '100%'}}>
            <Grid container style={{height: '100%'}} justifyContent="space-between">
                <Grid item style={{width: '20%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                    
                    <div className="sideBar">
                        <Tabs
                            orientation='vertical'
                            value={value}
                            onChange={handleChange}
                            variant="fullWidth"
                            sx={{
                                '& .MuiTab-root': {
                                    color: '#3a3b3c', // Default color for tabs
                                },
                                '& .Mui-selected': {
                                    color: 'whitesmoke', // Color for the selected tab
                                }
                            }}
                            textColor="inherit"
                            indicatorColor='secondary'
                        >
                            <Tab
                                label="Education"
                                {...a11yProps(0)}
                            />
                            <Tab
                                label="Experience"
                                {...a11yProps(1)}
                            />
                            <Tab
                                label="Skill"
                                {...a11yProps(2)}
                            />
                            <Tab
                                label="Certifications"
                                {...a11yProps(3)}
                            />
                        </Tabs>
                    </div>
                    
                    <Link to="/home" className="button_new" style={{marginTop: 32}}>
                        <ArrowBackIosNew/>
                    </Link>
                </Grid>

                <Grid item style={{width: '80%', height: '100%', padding: 20}}>
                        <TabPanel value={value} index={0}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.99 }}
                                animate={{ opacity: 1, scale: 1, }}
                                transition={{ duration: 1 }}
                                style={{backgroundColor: '#3e4579', height: '100%', width: '100%', borderRadius: 15}}>
                                <AboutMe/>
                            </motion.div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.99 }}
                                animate={{ opacity: 1, scale: 1, }}
                                transition={{ duration: 1 }}
                                style={{backgroundColor: '#3e4579', height: '100%', width: '100%'}}>
                                Item 2
                            </motion.div>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.99 }}
                                animate={{ opacity: 1, scale: 1, }}
                                transition={{ duration: 1 }}
                                style={{backgroundColor: '#3e4579', height: '100%', width: '100%'}}>
                                Item 3
                            </motion.div>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.99 }}
                                animate={{ opacity: 1, scale: 1, }}
                                transition={{ duration: 1 }}
                                style={{backgroundColor: '#3e4579', height: '100%', width: '100%'}}>
                                Item 4
                            </motion.div>
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.99 }}
                                animate={{ opacity: 1, scale: 1, }}
                                transition={{ duration: 1 }}
                                style={{backgroundColor: '#3e4579', height: '100%', width: '100%'}}>
                                Item 5
                            </motion.div>
                        </TabPanel>
                </Grid>
            </Grid>
        </div>
    )
}
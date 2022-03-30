import Styles from '../../styles/faq/Tabs.module.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import StyleAcc from '../../styles/Accordion.module.css'

const TabsShow = () => {

  return (
    <div>
        <div className={Styles.Container}>
          <div className={Styles.InnerContainer}>
          <Tabs>
    <TabList>
      <Tab><button className={Styles.Btn} >Bitloops vs Other Tools</button></Tab>
      <Tab>    <button className={Styles.Btn}>Capabilities</button></Tab>
      <Tab>
           <button className={Styles.Btn}>Scaling</button></Tab>
      <Tab>    <button className={Styles.Btn}>Developers</button></Tab>
    </TabList>

    <TabPanel style={{
        marginTop:'5rem !important',
    
    }}>
        <div className={Styles.ControlWidth}>

        
    <Accordion>
            <AccordionItem>
                <AccordionItemHeading className={StyleAcc.accordionHeading}>
                    <AccordionItemButton className={StyleAcc.accordionHeading} style={{background:'#7404E4',color:'white'}}>
                        What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                      
                       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                    
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                  
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                   
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                      
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                    
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            
        </Accordion>
        </div>
    </TabPanel>
    <TabPanel style={{
        marginTop:'5rem !important'
    }}>
    <div className={Styles.ControlWidth}>

        
<Accordion>
        <AccordionItem>
            <AccordionItemHeading className={StyleAcc.accordionHeading}>
                <AccordionItemButton className={StyleAcc.accordionHeading} style={{background:'#7404E4',color:'white'}}>
                    What harsh truths do you prefer to ignore?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                   
                </p>
            </AccordionItemPanel>
        </AccordionItem>
      
      
    
        
    </Accordion>
    </div>
    </TabPanel>
    <TabPanel style={{
        marginTop:'5rem !important'
    }}>
    <div className={Styles.ControlWidth}>

        
<Accordion>
        <AccordionItem>
            <AccordionItemHeading className={StyleAcc.accordionHeading}>
                <AccordionItemButton className={StyleAcc.accordionHeading} style={{background:'#7404E4',color:'white'}}>
                    What harsh truths do you prefer to ignore?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                  
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
           
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                
                </p>
            </AccordionItemPanel>
        </AccordionItem>
      
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
              
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
           
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    
        
    </Accordion>
    </div>
    </TabPanel>
    <TabPanel style={{
        marginTop:'5rem !important',

    }}>
    <div className={Styles.ControlWidth}>

        
<Accordion>
        <AccordionItem>
            <AccordionItemHeading className={StyleAcc.accordionHeading}>
                <AccordionItemButton className={StyleAcc.accordionHeading} style={{background:'#7404E4',color:'white'}}>
                    What harsh truths do you prefer to ignore?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                 
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                
                </p>
            </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                   
                </p>
            </AccordionItemPanel>
        </AccordionItem>
      
        <AccordionItem>
            <AccordionItemHeading>
                <AccordionItemButton>
                    Is free will real or just an illusion?
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p>
                    In ad velit in ex nostrud dolore cupidatat consectetur
          
                </p>
            </AccordionItemPanel>
        </AccordionItem>
    
        
    </Accordion>
    </div>
    </TabPanel>

  </Tabs>
          </div>
        </div>
        <div className={Styles.AccordianContainer}>
        <div className={Styles.FirstAccordian}>
    
        </div>
        </div>
    </div>
  )
}

export default TabsShow
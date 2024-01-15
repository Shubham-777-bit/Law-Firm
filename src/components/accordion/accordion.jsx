import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import styles from './accordion.module.css';
import button from "../../assets/button.png"

const CustomExpandIcon = () => {
  return (
    <div style={{ position: 'relative', width: '28px', height: '28px', overflow: 'hidden' }}>
      <img src={button} alt="Expand" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '18px', color: 'black', fontWeight: 'bold' }}>
        +
      </div>
    </div>
  );
};


const DropdownAccordion = () => {
  const [expandedPanel, setExpandedPanel] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  return (
    <div className={styles.container}>
      <Accordion expanded={expandedPanel === 'panel1'} onChange={handleChange('panel1')} className={styles.accordion}>
        <AccordionSummary expandIcon={<CustomExpandIcon/>} aria-controls="panel1bh-content" id="panel1bh-header" className={styles.summary}>
          <Typography className={styles.heading}>Do I need a personal injury report?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <Typography className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedPanel === 'panel2'} onChange={handleChange('panel2')} className={styles.accordion}>
        <AccordionSummary expandIcon={<CustomExpandIcon/>} aria-controls="panel2bh-content" id="panel2bh-header" className={styles.summary}>
          <Typography className={styles.heading}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <Typography className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Repeat the above Accordion block for Dropdown 3, Dropdown 4, and so on with unique IDs and content */}
      <Accordion expanded={expandedPanel === 'panel3'} onChange={handleChange('panel3')} className={styles.accordion}>
        <AccordionSummary expandIcon={<CustomExpandIcon/>} aria-controls="panel3bh-content" id="panel3bh-header" className={styles.summary}>
          <Typography className={styles.heading}>What should I do right after car accidect</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <Typography className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedPanel === 'panel4'} onChange={handleChange('panel4')} className={styles.accordion}>
        <AccordionSummary expandIcon={<CustomExpandIcon/>} aria-controls="panel4bh-content" id="panel4bh-header" className={styles.summary}>
          <Typography className={styles.heading}>How much is my case worth?</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.details}>
          <Typography className={styles.text}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DropdownAccordion;









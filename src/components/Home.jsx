/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState,useLayoutEffect } from 'react';
import About from './About';
import image1 from '../assets/home/random/img1.svg';
import image2 from '../assets/home/random/img2.svg';
import image3 from '../assets/home/random/img3.svg';
import image4 from '../assets/home/random/img4.svg';
import image5 from '../assets/home/random/img5.svg';
import image6 from '../assets/home/random/img6.svg';
import image7 from '../assets/home/random/img7.svg';

const Home = () => {
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const [table1, setTable1] = useState([]);
    const [table2, setTable2] = useState([]);

    useEffect(() => {
      const rows = 3;
      const columns = 5;
      
      const imgDiv = document.querySelector('.png_container');
      const width = imgDiv.offsetWidth;
      const height = imgDiv.offsetHeight;
      const widthTd = width / columns;
      const heightTd = height / rows;
    
      // Create table
      const newTable1 = [];
      const newTable2 = [];
      for (let i = 0; i < rows; i++) {
        const row1 = [];
        const row2 = [];
        for (let j = 0; j < columns; j++) {
          row1.push(<td key={`cell1-${i}-${j}`} style={{ width: widthTd, height: heightTd,margin:'0',padding:'0', borderSpacing:'0' }}></td>);
          row2.push(<td key={`cell2-${i}-${j}`} style={{ width: widthTd, height: heightTd, margin:'0',padding:'0',  borderSpacing:'0' }}></td>);
        }
        newTable1.push(<tr key={`row1-${i}`}>{row1}</tr>);
        newTable2.push(<tr key={`row2-${i}`}>{row2}</tr>);
      }
      setTable1(newTable1);
      setTable2(newTable2);
      
      setTimeout(() => {
        putImageInTable('png_c1', [1, 0], image1);
        putImageInTable('png_c1', [0, 1], image2);
        putImageInTable('png_c1', [2, 2], image3);
        putImageInTable('png_c1', [0, 3], image4);
        putImageInTable('png_c1', [2, 4], image5);
    
        putImageInTable('png_c2', [0, 0], image3);
        putImageInTable('png_c2', [1, 1], image4);
        putImageInTable('png_c2', [2, 2], image6);
        putImageInTable('png_c2', [0, 3], image7);
        putImageInTable('png_c2', [1, 4], image1);
    
      }, 0);
    }, []);
  function putImageInTable(divId, [row, column], imageSrc) {
    const table = document.querySelector(`#${divId} table`);
    if (table && table.rows && table.rows[row]) {
      const cell = table.rows[row].cells[column];
      if (cell) {
        cell.innerHTML = `<img src="${imageSrc}" alt="Image" style="width: 100%; height: 100%; object-fit: contain;" />`;
      } else {
        console.error(`Cell at column ${column} does not exist in row ${row}`);
      }
    } else {
      console.error(`Row at index ${row} does not exist in the table`);
    }
  }
  



  return (
    <>
      <div className="home-heading" style={{ display: 'flex', alignItems:'center', justifyContent: 'center', minHeight: '110vh', flexDirection: 'row', width:'100%'}}>
        <div style={{display: 'flex', flexDirection: 'column',width:'100%'}}>
          <div id='png_c1' ref={containerRef1} className='png_container' style={{height: '230px', width: '100%', position: 'relative', marginBottom:'5%'}}>
            <table style={{ width: '100%', height: '100%' }}>
              <tbody>
                {table1}
              </tbody>
            </table>
          </div>
          <div className="home-content" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'coulmn' }}>
            <h1 className="heading" style={{ margin: 0}}>MATRIX</h1>
            <div>
              <h1 className="heading multimedia" style={{ margin: 0}}>VIT MULTIMEDIA CLUB</h1>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <h2 className='robotoi' style={{ paddingRight: '0rem', margin: '0.2rem', fontStyle: 'italic !important' }}><i>India&apos;s First Multimedia Club</i></h2>
              </div>
            </div>
          </div>
          <div id='png_c2' ref={containerRef2} className='png_container' style={{minHeight: '230px', width: '100%', position: 'relative'}}>
            <table style={{ width: '100%', height: '100%' }}>
              <tbody>
                {table2}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <About />
    </>
  );
};

export default Home;
            

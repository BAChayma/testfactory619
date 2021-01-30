import React, { useState, useEffect } from 'react';
import { TruchetTile } from './TruchetTile';
import { Flipper, Flipped } from "react-flip-toolkit";
import shuffle from "lodash.shuffle";
import R from 'ramda';
import FlipMove from 'react-flip-move';

//({ name })=>

export default function App()  {
    const [random, setRandom] = useState('ping');
    const [x, setX] = useState(3);
    const [matrix, setMatrix] = useState([]);
    const [highlightX, setHighlightX] = useState(-1);
    const invertList = () => setMatrix(shuffle(matrix));
    const flipList = matrix.reverse();
  
    useEffect(() => {
      setMatrix([]);
      for (let xd = 0; xd < x; xd++) {
        for (let yd = 0; yd < x; yd++) {
          setMatrix(mm => {
            if (!mm[xd]) { mm[xd]=[]; }
            mm[xd][yd] = Math.random() >= 0.5 ? 1 : 0;
            return mm;
          });
        }
      }
    }, [x, x, random])
  
  
    return (
      <>

<h2>Matrix</h2>
      <table className="truchet">
        <tbody>
          {matrix.map((xm, xindex) => 
            <tr key={xindex}>
              {xm.map((xy, yindex) => 
                <td key={yindex}><TruchetTile isInverse={xy === 1} /></td>
              )}
            </tr>
          )}
        </tbody>
      </table>

      <br/>
      <br/>

      <div className="hiddenPrint">
        <p>Choose an x to generate matrix.</p>
        <div style={{display:'flex'}}>
          <div style={{width:'80px'}}>x</div> 
          <div><input type="number" name="x" value={x} onChange={(e) => setX(e.target.value)}/></div>
        </div>  
       
        <div style={{display:'flex'}}>
          <div style={{width:'80px'}}>action</div> 
          <div><button onClick={() => setRandom(p => p === 'ping' ? 'pong' : 'ping')}>generate</button></div>
          <div><button onClick={flipList}>flip</button></div>
          <div><button onClick={invertList}>invert</button></div>
        </div>
      </div>

      <br/>
      <br/>
  
      <h2>Matrix {x} x {x}</h2>
      <table className="normal">
        <tbody>
          {matrix.map((xm, xindex) => 
            <tr key={xindex}>
              {xm.map((xy, yindex) => 
                <td 
                  key={yindex}
                  className={(highlightX === xindex || highlightX === yindex ? 'active' : 'inactive')}
                  onClick={() => { setHighlightX(xindex); setHighlightX(yindex);}}
                >{xy}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    </>
    )
  };



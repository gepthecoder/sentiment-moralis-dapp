import React, { useEffect, useState } from "react";
import "./Coin.css";
import { Button } from "web3uikit";


function Coin({perc, setPerc, token}) {
  const [color, setColor] = useState();

  useEffect(() => {
    if (perc < 50) {
      setColor("#c43d08");
    } else {
      setColor("green");
    }
  }, [perc]);

  return (
    <>
      <div>
        <div className="token">
          {token}
        </div>
        <div className="circle" style={{ boxShadow: `0 0 20px ${color}` }}>
          <div className="wave"
            style={{
              marginTop: `${100 - perc}%`,
              boxShadow: `0 0 20px ${color}`,
              backgroundColor: color,
            }}
          >
          </div>
          <div className="percentage">
            {perc}%
          </div>
        </div>

        <div className="votes">
          <Button 
            onClick={() => {
             }} 
            text="Up" 
            theme="primary" 
            type="button" 
          />

          <Button
            color="red"
            onClick={() => {
            }}
            text="Down"
            theme="colored"
            type="button"
          />
        </div>
        <div className="votes">
            <Button
            onClick={()=>{
            }}
            text="INFO"
            theme="translucent"
            type="button"
          />
        </div>

      </div>
     
    </>
  );
}

export default Coin;

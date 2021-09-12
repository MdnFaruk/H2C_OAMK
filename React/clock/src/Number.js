import React from 'react'
import './Number.css';
import AnimatedNumber from "animated-number-react";

export default function Number({number}) {

    const formatValue = (value) => value.toFixed(0);
    return (
       // <div className="Number">{number}</div>

       <AnimatedNumber className="number" value={number} formatValue={formatValue} />
    )
}

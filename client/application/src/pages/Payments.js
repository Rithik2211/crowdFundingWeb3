import React, { useEffect, useState } from 'react';
import { updateEthers } from '../context/contractHandler';

const Payments = () => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        const contract = updateEthers();
        console.log("@contract",contract);
    },[]);
    return (
    <div>
        <h1>Payments Page</h1>
    </div>
    )
}

export default Payments;
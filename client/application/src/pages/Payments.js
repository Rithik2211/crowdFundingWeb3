import React, { useEffect, useState } from 'react';
import { updateEthers } from '../context/contractHandler';

const Payments = () => {
    const [data, setData] = useState(null);
    useEffect(()=>{
        async function fetch(){
        const contract = await updateEthers();
        console.log("@contract",contract);
        }
        fetch();
    },[]);
    return (
    <div>
        <h1>Payments Page</h1>
    </div>
    )
}

export default Payments;
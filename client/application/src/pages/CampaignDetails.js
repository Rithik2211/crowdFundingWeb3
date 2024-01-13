import React from 'react';
import { useNavigate } from 'react-router-dom';
import {arrowRight} from '../assets/index';
import Button from '@mui/material/Button';

function CampaignDetails() {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col'>
       <Button className='w-[15%] p-[20px] gap-4' onClick={()=> navigate("/")}>
          <img src={arrowRight} alt='arrow' className='h-[15px] w-[15px]'/>
          Back To Home
        </Button>
      <div>
      CampaignDetails
      </div>
    </div>
  );
}

export default CampaignDetails;
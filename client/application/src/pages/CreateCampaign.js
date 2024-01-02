import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {ethers} from 'ethers';
import {money} from '../assets/index';
import TextField from '@mui/material/TextField';

function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name : '',
    title : '',
    description : '',
    target : '',
    deadline : '',
    image : ''
  })

  const handleSubmit = () => {

  }
  return (
    <div className='flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <h1 className='text-white'>Loading...</h1>}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Create a Campaign</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex text-white space-around flex-row gap-[40px]' style={{justifyContent:"space-evenly"}}>
          <TextField id="outlined-basic" label="Name" variant="outlined" style={{width:"450px"}} />
          <TextField id="outlined-basic" label="Title" variant="outlined" style={{width:"450px"}}/>
        </div>

      </form>
    </div>
  );
}

export default CreateCampaign;
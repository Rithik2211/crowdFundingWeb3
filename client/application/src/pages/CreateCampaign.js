import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {ethers} from 'ethers';
import {dollar} from '../assets/index';
import TextField from '@mui/material/TextField';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
// import { useStateContext } from '../context';

function CreateCampaign() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // const { CreateCampaign} = useStateContext();
  const [form, setForm] = useState({
    name : '',
    title : '',
    description : '',
    target : '',
    deadline : '',
    image : ''
  })

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: fieldName !== "deadline" ? e.target.value : `${e.$D}/${e.$M+1}/${e.$y}` });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submission",form);
    
    navigate("/");
  }
  return (
    <div className='flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && <h1 className='text-white'>Loading...</h1>}
      <div className='flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]'>
        <h1 className='font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white'>Create a Campaign</h1>
      </div>
      <form onSubmit={handleSubmit} className='w-full mt-[65px] flex flex-col gap-[30px]'>
        <div className='flex text-white space-around gap-[40px]' >
          <TextField id="outlined-basic" label="Name" placeholder="Write your Name" variant="outlined" sx={{width:"600px"}} onChange={(e)=>handleFormFieldChange("name",e)}/>
          <TextField id="outlined-basic" label="Title" placeholder="Write a Title" variant="outlined" sx={{width:"600px"}} onChange={(e)=>handleFormFieldChange("title",e)}/>
        </div>  
        <TextField id="outlined-textarea" label="Story" placeholder="Write a Story" multiline onChange={(e)=>handleFormFieldChange("description",e)}/>
        <div className='flex  gap-[20px] justify-center items-center p-4 bg-[#8c6dfd] rounded-[10px]'>
          <img src={dollar} alt="money" className='w-[40px] h-[40px] object-contain' />
          <h4>You will get 100% of the raised amount!</h4>
        </div>
        <div className='flex text-white sm:flex-row flex-col gap-[40px]' style={{justifyContent:"space-around"}}>
          <TextField sx={{width:"400px"}} id="outlined-basic" label="Goal" placeholder="0.50 ETH" variant="outlined" onChange={(e)=>handleFormFieldChange("target",e)}/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker sx={{width:"400px"}} label="End Date" onChange={(date) => { handleFormFieldChange("deadline", date) }}/>
          </LocalizationProvider>
          <TextField sx={{width:"400px"}} id="outlined-basic" label="Campaign Image" placeholder="Place Your Image Url" variant="outlined"  onChange={(e)=>handleFormFieldChange("image",e)}/>
        </div> 
        <div className='flex justify-center items-center mt-[40px]'>
          <Button type="submit" variant="contained">Submit New Campaign</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateCampaign;
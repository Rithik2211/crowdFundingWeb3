import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getUpdatedRedux } from '../store/utils';
import { walletAddress, wallet } from '../context/fetchData';
// import { handleGetCampaigns } from '../context/fetchData';
// import {config} from '../config';

function Home() {
  const navigate = useNavigate()
  const [data, setData] =  useState([]);

  useEffect(()=>{
    async function fetch(){
      let stateData = getUpdatedRedux('getCampaigns');
      // let campaignData = await handleGetCampaigns();
      // console.log("@Home",stateData,campaignData);
      console.log("@@Home",wallet);
      setData(stateData)
    }
    fetch();
  },[data]);

  return (
    <div className='flex flex-col p-[20px] gap-4'>
      <div>
        <h1>All Campaigns ({data.length})</h1>
      </div>
      <div className='flex flex-row p-[20px] gap-4'>
      {data.map((card,index)=>{
        return (
        <Card sx={{ maxWidth: 345 }}  onClick={()=> navigate(`/CampaignDetails?index=${index}`)}>
        <CardMedia
          sx={{ height: 140 }}
          image={card.image}
          title="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
        <CardActions className='flex justify-between flex-wrap mt-[15px] gap-2 ml-[20px] mr-[30px]'>
          <div className='flex flex-col gap-y-2'>
            <div className='flex justify-center'>{card.target}</div>
            <Typography variant="body2" color="text.secondary">Raised For 0.5</Typography>
          </div>
          <div className='flex flex-col gap-y-2'>
            <div className='flex justify-center'>{3}</div>
            <Typography variant="body2" color="text.secondary">Days Left</Typography>
          </div>
        </CardActions>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            By Address : {walletAddress}
          </Typography>
        </CardContent>
      </Card>
        )
      })}
      </div>
    </div>
  );
}

export default Home;
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {nft} from '../assets/index';

function Home() {
  const navigate = useNavigate()
  const [data, setData] =  useState([]);

  return (
    <div className='flex flex-col p-[20px] gap-4'>
      <div>
        <h1>All Campaigns ({data.length+1})</h1>
      </div>
      <>
      <Card sx={{ maxWidth: 345 }} onClick={()=> navigate("/CampaignDetails")}>
        <CardMedia
          sx={{ height: 140 }}
          image={nft}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Green Web
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Decentralized web3 social media application for the seamless application for and security for the user.
          </Typography>
        </CardContent>
        <CardActions className='flex justify-evenly'>
          <div className='flex flex-col gap-y-2'>
            <div className='flex justify-center'>{0.0}</div>
            <Typography variant="body2" color="text.secondary">Raised For 0.5</Typography>
          </div>
          <div className='flex flex-col gap-y-2'>
            <div className='flex justify-center'>{3}</div>
            <Typography variant="body2" color="text.secondary">Days Left</Typography>
          </div>
        </CardActions>
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            By Address : 
          </Typography>
        </CardContent>
      </Card>
      </>
    </div>
  );
}

export default Home;
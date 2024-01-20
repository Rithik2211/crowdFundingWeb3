import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {arrowRight} from '../assets/index';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {nft} from '../assets/index';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { getUpdatedRedux } from '../store/utils';

function CampaignDetails() {

  const [listData, setListData] = useState({});
  const navigate = useNavigate()

  useEffect(()=>{
    const index = new URLSearchParams(window.location.search).get('index');
    let stateData = getUpdatedRedux('getCampaigns');
    console.log("@Details Page",stateData);
    let actualData = stateData[index]
    setListData(actualData)
  },[]);

  return (
    <div className='flex flex-col'>
       <Button className='w-[176px]' onClick={()=> navigate("/")}>
          <img src={arrowRight} alt='arrow' className='h-[15px] w-[15px]'/>
          Back To Home
        </Button>
      <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2} className='flex sm-[flex-col] flex-row'>
        <Grid item xs={4}>
          <Card className='h-[47vh] m-4'>
          <CardMedia
            className='object-contain h-[47vh]'
            image={listData.image}
            title="Project"
          />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card className='h-[47vh] m-4'>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {listData.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {listData.description}
            </Typography>
          </CardContent>
          </Card>
        </Grid> 
        <Grid item xs={12}>
        <Card className='h-[28vh] m-4'>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {listData.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {listData.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default CampaignDetails;
import React from 'react';
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

function CampaignDetails() {
  const navigate = useNavigate()
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
            image={nft}
            title="Project"
          />
          </Card>
        </Grid>
        <Grid item xs={8}>
          <Card className='h-[47vh] m-4'>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Green Web
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A Decentralized web3 social media application for the seamless application for and security for the user.
            </Typography>
          </CardContent>
          </Card>
        </Grid> 
        <Grid item xs={12}>
        <Card className='h-[28vh] m-4'>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Green Web
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A Decentralized web3 social media application for the seamless application for and security for the user.
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
import React from 'react';

function NavigationBar() {
  return (
    <div className='flex flex-row h-1/10 w-full justify-items-center' >
        <div className='basis-1/4'>
        Crowdfunding Application
        </div>
        <div className='basis-1/4 text-center'>
           Profile
        </div>
        <div className='basis-1/4 text-center'>
           Campaign
        </div>
    </div>
  );
}

export default NavigationBar;
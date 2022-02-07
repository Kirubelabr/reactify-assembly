import { Card, Progress } from 'antd';
import React from 'react';

function MeetingStatus() {
  return <>
    <div className='lg:w-5/6 flex justify-center items-center mx-auto flex-row sm:flex-col sm:w-full'>
      <div className='w-full flex justify-around items-center'>
        <Card title="Available Shareholders" className='stat-card border-none text-center w-2/5 bg-first-card text-white'>
          <div className='flex justify-between items-center mt-3 mb-6'>
            <div className='border-r border-r-white w-1/2 flex justify-center flex-col'>
              <div className='text-2xl font-bold mb-2'>8,436</div>
              <div className='font-semibold'>Total Shareholders</div>
            </div>
            <div className='w-1/2 flex justify-center flex-col'>
              <div className='text-2xl font-bold mb-2'>29</div>
              <div className='font-semibold'>Attended Shareholders</div>
            </div>
          </div>
          <Progress type='circle' width={80} strokeWidth={8}
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }} trailColor={'transparent'} percent={75} className='progress-text' />
          <div className='mt-2 '>Percent of attended shareholders</div>
        </Card>
        <Card title="Shareholders Capital" className='stat-card border-none text-center w-2/5 bg-second-card text-white'>
          <div className='flex justify-between items-center mt-3 mb-6'>
            <div className='border-r border-r-white w-1/2 flex justify-center flex-col'>
              <div className='text-2xl font-bold mb-2'>2,243,684,175</div>
              <div className='font-semibold'>Total Share Capital</div>
            </div>
            <div className='w-1/2 flex justify-center flex-col'>
              <div className='text-2xl font-bold mb-2'>1,602,157,999</div>
              <div className='font-semibold'>Attended Shareholders Capital</div>
            </div>
          </div>
          <Progress type='circle' width={80} strokeWidth={8}
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }} trailColor={'transparent'} percent={61.5} className='progress-text' />
          <div className='mt-2 '>Percent of attended shareholders</div>
        </Card>
      </div>
    </div>
  </>;
}

export default MeetingStatus;

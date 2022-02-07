import { Card, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


function HomePage() {
  return (
    <>
      <div className='lg:w-3/4 lg:h-5/6 flex justify-center items-center mx-auto flex-row sm:flex-col sm:w-full'>
        <div className='flex justify-center items-center sm:flex-col lg:flex-row'>
          <div className='flex flex-col justify-center items-center'>
            <Image
              width={200}
              src='/assets/images/habesha beer logo.png'
              className='pointer-events-none'
            />
            <h1 className='text-2xl font-bold mt-4'>Annual General Assembly Meeting</h1>
          </div>
          <div className='divider'></div>
          <div className='flex flex-col justify-start items-start'>
            <Link to={'/admin'} className='homeCard mb-3 cursor-pointer'>
              <Card className='border-none'>
                <Image className='' src='/assets/images/settings.png' width={48} />
                <div className='ml-6'>
                  <div className='text-xl font-bold capitalize'>Administrator</div>
                  <div className='text-sm text-slate-400'>Meeting and Polls Dashboard</div>
                </div>
              </Card>
            </Link>
            <Link to={'/meeting'} className='homeCard mb-3 cursor-pointer'>
              <Card className='border-none'>
                <Image className='' src='/assets/images/job-interview.png' width={48} />
                <div className='ml-6'>
                  <div className='text-xl font-bold capitalize'>Meeting</div>
                  <div className='text-sm text-slate-400'>Want to register Shareholder for the meeting?</div>
                </div>
              </Card>
            </Link>
            <Link to={'/polls'} className='homeCard mb-3 cursor-pointer'>
              <Card className='border-none'>
                <Image className='' src='/assets/images/rank.png' width={48} />
                <div className='ml-6'>
                  <div className='text-xl font-bold capitalize'>Polls</div>
                  <div className='text-sm text-slate-400'>Vote for candidates</div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );

}

export default HomePage;

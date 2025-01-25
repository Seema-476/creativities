import React from 'react'
import MainPage from './MainPage'

const MainContent = () => {
    return (
        <>
            <MainPage />
            <div className='flex items-center justify-center h-screen w-full bg-slate-500 duration-500'>
                <p className='text-7xl font-bold text-white'>WELCOME!</p>
            </div>
        </>
  )
}

export default MainContent
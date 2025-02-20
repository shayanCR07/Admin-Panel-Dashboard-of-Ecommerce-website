import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, ecomPieChartData, SparklineAreaData } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
import welcomeBg from '../data/welcome-bg.svg'

const Ecommerce = () => {

  const  { currentColor } = useStateContext();
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${welcomeBg})`}}>
        
            <div className='flex justify-between items-center'>
              <div>
                <p className='font-bold text-gray-400'>Earnings</p>
                <p className='text-2xl'>$63,448.78</p>
              </div>
            </div>
          <div className='mt-6'>
            <Button 
            color='white'
            bgColor={ currentColor }
            text='Download'
            borderRadius="15px"
            size='md'/>
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl '
            >
              <button type='button'
               style={{ color: item.iconColor, backgroundColor: item.iconBg }}
               className='text-2xl opacity-0.9 rounded-full hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='text-lg font-semibold'>
                <span >{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'> {item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
            <div className='flex justify-between '>
                  <p className='font-semibold text-xl'>Revenue Updates</p>
                  <div className='flex items-center gap-4 '>
                      <p className='flex gap-2 hover:drop-shadow-xl text-gray-600 items-center'>
                        <span><GoDotFill /></span>
                        <span>Expense</span>
                      </p>
                      <p className='flex gap-2 hover:drop-shadow-xl text-green-600 items-center'>
                        <span><GoDotFill /></span>
                        <span>Bugdet</span>
                      </p>

                  </div>
            </div>
            <div className='mt-10 flex gap-10 flex-wrap justify-center'>
                  <div className='border-r-1 border-color m-4 pr-10'>
                     <div>
                       <p>
                         <span className='text-3xl font-semibold'>$93,438</span>
                         <span className='p-1.5 hover:drop-shadow-xl rounded-full text-white bg-green-400 ml-2'>23%</span>

                       </p>
                       <p className='text-gray-400 mt-1'>Budget</p>
                     </div>
                     <div className='mt-8'>
                       <p>
                         <span className='text-3xl font-semibold'>$48,268</span>
                       </p>
                       <p className='text-gray-400 mt-1'>Expense</p>
                     </div>
                     <div className='mt-5'>
                        <SparkLine 
                        currentColor={ currentColor }
                        id="line-sparkline"
                        type="Line"
                        height="80px"
                        width="250px"
                        data={SparklineAreaData}
                        color={ currentColor }/>
                     </div>
                     <div className='mt-10'>
                       <Button
                       color="white"
                       text="Download Report"
                       bgColor={ currentColor }
                       borderRadius="10px" />
                     </div>
                  </div>
                  <div >
                    <Stacked  width="320px" height="300px"/>
                  </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Ecommerce

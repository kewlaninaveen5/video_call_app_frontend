import { ShipWheel } from 'lucide-react'
import React from 'react'

const PageLoader = () => {
  return (
    <div className='min-h-screen flex items-center justify-center' data-theme="forest" >
    <ShipWheel className='animate-spin size-10 text-primary' />
    </div>
  )
}

export default PageLoader
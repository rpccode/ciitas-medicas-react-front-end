import React from 'react'

const ErrorMessage = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='text-left font-bold p-3 uppercase text-sm text-red-500 rounded-md'>
        {children}
    </div>
  )
}

export default ErrorMessage
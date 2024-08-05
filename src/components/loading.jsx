import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = (props) => {
  return (
      <div className='loading_screen'>
        {props ? <CircularProgress sx={{color:'white'}} />:<></> }</div>
  )
}

export default Loading
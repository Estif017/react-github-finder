import React, { useContext } from 'react'

import AlertContext from '../../Context/Alert/Alert_context'

const Alert = () => {
   const alertContext=useContext(AlertContext)
   const {alert}=alertContext
   return(alert !==null && (
   <div className={`alert alert-${alert.style}`}>
       <i className="fas fa-info-circle">{alert.message}</i>
   </div>))
}

export default Alert

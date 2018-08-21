import React from 'react'

const WarningMesaje = (props)=>{

    return(

        <section>

            <h3 className = "alert-warning" > { props.warning } </h3>

        </section>
    )    

}

export default WarningMesaje
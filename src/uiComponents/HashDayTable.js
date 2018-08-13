import React from 'react'

const HashDayTable = (props)=>{

    let objectKey = Object.keys(props.data)
    
    return(
        
        <table>
            <tbody>
                {objectKey.map((row)=>(
                    <tr key={row}>
                        <th>{row}</th><td>{Math.round(props.data[row])}</td>
                    </tr>
                ))}
            </tbody>
            </table>
    )

}

export default HashDayTable
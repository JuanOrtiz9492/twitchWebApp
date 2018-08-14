import React from 'react'
import {Table} from 'reactstrap'

const HashDayTable = (props)=>{

    let objectKey = Object.keys(props.data)
    
    return(
        
        <Table>
            <thead>
                <tr>
                    <th>Hours</th>
                    <th> Average Hashrate </th>
                </tr>
            </thead>
            <tbody>
                {objectKey.map((row)=>(
                    <tr key={row}>
                        <th>{row}</th><td>{Math.round(props.data[row])}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
    )

}

export default HashDayTable
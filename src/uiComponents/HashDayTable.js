import React from 'react'
import {Table} from 'reactstrap'

const HashDayTable = (props)=>{

    let returnTable = null

    if(typeof props.data == 'object'){

        let objectKey = Object.keys(props.data)

        returnTable=(
        
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
    )}
    
    return returnTable

}

export default HashDayTable
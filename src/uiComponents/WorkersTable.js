import React from 'react'
import {Table} from 'reactstrap'

const WorkersTable =(props)=>{

    let objectKeys = Object.getOwnPropertyNames(props.data[0])
    let keyRow=0;
    let keyColumn=0;

    return(
        
        <Table>
            <thead>
            <tr>{objectKeys.map((title)=><th key={title}>{title}</th>)}</tr>
            </thead>
            <tbody>
                {
                    props.data.map((row)=>
                    <tr key={keyRow++}>

                        {
                            objectKeys.map((objectKey,index)=>
                                <td key={keyColumn++}>{row[objectKey]}</td>
                        )}

                    </tr>)
                }
            </tbody>
        </Table>

    )
}

export default WorkersTable
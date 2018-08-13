import React from 'react'

const WorkersTable =(props)=>{

    let objectKeys = Object.getOwnPropertyNames(props.data[0])
    let keyRow=0;
    let keyColumn=0;

    return(
        
        <table>
            <tbody>
            <tr>{objectKeys.map((title)=><th key={title}>{title}</th>)}</tr>
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
        </table>

    )
}

export default WorkersTable
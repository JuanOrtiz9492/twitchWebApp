import React from 'react'

const WorkersTable =(props)=>{
    console.log(props.data)
    let keys = Object.getOwnPropertyNames(props.data[0])
    console.log(keys)
    return(
        
        <table>
            <tbody>
            <tr>{keys.map((title)=><th key={title}>{title}</th>)}</tr>
                {
                    props.data.map((row)=>
                    <tr key={"row:"+row.uid}>

                        {
                            keys.map((key,index)=>
                                <td key={"colmun:"+index.toString()+row.uid}>{row[key]}</td>
                        )}

                    </tr>)
                }
            </tbody>
        </table>

    )
}

export default WorkersTable
import React from 'react'

const dateToString=(dateSeconds)=>{

    let date = new Date(dateSeconds*1000)
    let year = date.getFullYear().toString()
    let month = date.getMonth()<10?('0'+date.getMonth().toString()):date.getMonth().toString()
    let day = date.getDay()<10?('0'+date.getDay().toString()):date.getDay().toString()
    let hour = date.getHours()<10?('0'+date.getHours().toString()):date.getHours().toString()
    let minutes = date.getMinutes()<10?('0'+date.getMinutes().toString()):date.getMinutes().toString()
    return(year+'-'+month+'-'+day+' '+hour+':'+minutes)
}
const DateTable =(props)=>{

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
                            <td key={keyColumn++}>{objectKey=='date'?dateToString(row[objectKey]):row[objectKey]}</td>
                    )}

                </tr>)
            }
        </tbody>
    </table>
    )
}

export default DateTable
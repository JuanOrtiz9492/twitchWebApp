export function dateToString(dateSeconds) {

    const months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

    let date = new Date(dateSeconds*1000)

    let year = date.getFullYear().toString()
    let month = months[date.getMonth()] 
    let day = date.getDate()<10?('0'+date.getDate().toString()):date.getDate().toString()
    let hour = date.getHours()<10?('0'+date.getHours().toString()):date.getHours().toString()
    let minutes = date.getMinutes()<10?('0'+date.getMinutes().toString()):date.getMinutes().toString()

    return(year+'-'+month+'-'+day+' '+hour+':'+minutes)

}



export function pages (list,itemsPerList) {
    
    const listLength = list.length

    return Math.ceil( listLength/itemsPerList )

}



export function listSlicer (list, itemsPerList ,index ) {

    return list.slice( itemsPerList*index , ( itemsPerList*(index+1) ) )

}



export function sortByDate(data) {

    data.sort(function(a,b){

        let returnValue=0

        if(a.date<b.date){
            returnValue =1
        }
        else if(a.date>b.date){
            returnValue=-1
        }

        return returnValue

    })
}




    export function sortByLastShare(data) {

        data.sort(function(a,b){
    
            let returnValue=0
    
            if(a.lastShare<b.lastShare){
                returnValue =1
            }
            else if(a.lastShare>b.lastShare){
                returnValue=-1
            }
    
            return returnValue
    
        })
    
}

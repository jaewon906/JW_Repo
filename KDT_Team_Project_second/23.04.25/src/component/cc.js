import { useSelector } from "react-redux"
let b=[];
function Aa(){
    const contentsData = useSelector(store=> store.dataSet.contentGet)

        for(var i=0; i<contentsData.length;i++){
            b[i]=0
        }
        console.log(b)
    
}

export default Aa; 

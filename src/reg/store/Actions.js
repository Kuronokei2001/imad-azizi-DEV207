export const Add_Liver =(u)=>{
    return {
        type:"Addlivre",
        payload:u
    }
}

export const Delete_Liver =(isbn)=>{
    return {
        type:"DeleteLivre",
        payload:isbn
    }
}
export const Reset_Panier =()=>{
    return {
        type:"resetSlice",
    }
}
const intialState ={
    livres:[
        {
            isbn:"123456789",
            Titre:"Dune",
            Auteur:"Frank Herbert",
            Prix:250,
            Genre:"Science Fiction"
    }
    ,
        {
            isbn:"987654321",
            Titre:"Orgueil et Prejuges",
            Auteur:"Jane Austin",
            Prix:180,
            Genre:"Romance"
        }
    ,
        {
            isbn:"283847489",
            Titre:"Breaking Bad",
            Auteur:"Walter White/Hiezenberg",
            Prix:300,
            Genre:"Lengendery"
        }
    ],
    Panier:[]
}

export const Livres =(state=intialState,action)=>{
        switch(action.type){
            case 'Addlivre':return{
                ...state,Panier:[...state.Panier,action.payload]
            }
                

            case 'DeleteLivre':return{
                ...state,
                Panier:[...state.Panier.filter(e=>e.isbn!==action.payload)]
            }
            
            case 'resetSlice':return{
               ...state, Panier:[]
        
            }

            default : return state;
        }
            
}
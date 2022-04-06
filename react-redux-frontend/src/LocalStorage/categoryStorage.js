
export const addCategory = (category) =>{
    let categories = []
    if(localStorage.getItem("category") !== null){
         categories = JSON.parse(localStorage.getItem("category"))
    }
    categories.push(category)
    localStorage.setItem("category",JSON.stringify(categories))
}

export const getCategories = () =>{
    let categories = [];
    if(localStorage.getItem('category') === null){
        return categories;
    }else{
        categories = JSON.parse(localStorage.getItem('category'))
    }
    return categories;
}



export const deleteCategory = () =>{

}

export const deleteCategories = () =>{
    if(localStorage.getItem("category")){
        localStorage.removeItem("category")
    }
}
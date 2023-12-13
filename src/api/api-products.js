const request = '/api/products.json'

export const getProducts = async () =>{
    try {
        const response = await fetch(request)

        if(!response.ok){
            throw new Error('Erreur de récupération des données')
        }

        const result = await response.json()

       
        return result
    } catch (error) {
        console.log(error.message);
        return []
    }
    
}
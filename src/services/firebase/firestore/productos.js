
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import {db} from '../index'
import { createProductAdaptedFromFirebase } from '../../../adapters/ProductAdapter';


export const getProducts = (categoryId) => {
    const productsCollection = categoryId 
    ? query(collection(db, "productos"), where("category", "==", categoryId))
    : collection(db, "productos")

    return getDocs(productsCollection)
        .then((querySnapshot)=>{
            const productAdapted = querySnapshot.docs.map((doc)=>{
                return createProductAdaptedFromFirebase(doc)
            })
            return productAdapted;
        })
        .catch((error)=>{
            return error
        })
};
export const getProductById = (itemId)=>{
    const productDoc = doc(db, "productos", itemId)

    return getDoc(productDoc)
    .then((queryDocumentSnapshot)=>{
        const productAdapted = createProductAdaptedFromFirebase(
          queryDocumentSnapshot
        );
        return productAdapted
    })
    .catch((error)=>{
        return error
    })
}
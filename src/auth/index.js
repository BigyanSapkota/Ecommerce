import { API } from "../config";

// for signup 
export const signup= async(user)=>{
    return fetch(`${API}/register`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}


// for signin
export const signin= async(user)=>{
    return fetch(`${API}/signin`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}

//authenticate  and to store token in localstorage
export const authenticate=(data,next)=>{
    if(typeof window !=='undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
        next()
    }
}

// redirect user by role if authenticated 
export const isAuthenticated=()=>{
    if(localStorage.getItem('jwt')){
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else{
        return false
    }
}

//signout 
export const signout=next=>{
    if(typeof window!=='undefined'){
        localStorage.removeItem('jwt',JSON.stringify('jwt'))
        next()
        return fetch(`${API}/signout`,{
            method:"POST"
        })
        .then(res=>{
            console.log('signout',res)
        })
        .catch(err=>console.log(err))
    }
}






// import { API } from "../config";

// // for signup 
// export const signup=user=>{
    
//     let out;
//     let error;
//     fetch(`${API}/register`,{
//         method:"POST",
//         headers:{
//             Accept:"application/json",
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(user)
//     })
//     .then(res=>{
//      out =res.json()
//     })
//     .catch(err=>{
//         error = err
//     })

//    return { data:out, error}
// }






export const axios={
    get<T>(url:string):Promise<T>{
        return new Promise((resolve)=>{
            console.log("hello")//
            const xhr=new XMLHttpRequest()
            xhr.open('Get',url)
            xhr.onreadystatechange=()=>{
                if(xhr.readyState==4 && xhr.status==200){
                    setTimeout(()=>{
                        resolve(JSON.parse(xhr.responseText))
                    },2000)
                }
                console.log("sdasd")//
                xhr.send(null)
            }
        })
    }
}
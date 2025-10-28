export const Api_key = `AIzaSyB6UE5MnYlMnIG-_BP4qBqazu9BH3XuYEg`

export const value_converter = (value) =>{
    if(value>=1000000){
        return (Math.floor(value/1000000)).toFixed(1) + "M"
    }else if(value>=1000){
        return (Math.floor(value/1000)).toFixed(1) + "K"
    }else{
        return value.toString()
    }   
}






function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`
    }
    return `Serving default masala chai`
}

function orderChai(size:"small"|"medium"|"large"|number){
    if(size === "small"){
        return `small cutting chai...`
    }
    if(size === "medium" || size === "large"){
        return `make extra chai`
    }
    return `chai order #${size}`
}


class KulhadChai{
    serve(){
        return `Serving Kulhad Chai`
    }
}

class CuttingChai{
    serve(){
        return `Serving Cutting Chai`
    }
}

function serve(chai:KulhadChai|CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

function isStringArray(arr: unknown): arr is string[]{
    return true;
}
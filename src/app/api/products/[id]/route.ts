import {NextRequest, NextResponse} from "next/server";
import {products} from "@/../data/products";

interface IParams{
    params:{
        id:string;
    }
}


export async function GET(req:NextRequest,{params}:IParams){
    const {id} = params;
    const product = products.find(item => item.id === parseInt(id));

    if(product){
        return NextResponse.json(product);
    }else{
        return NextResponse.json({message:'Product not found'},{status:401})
    }
}
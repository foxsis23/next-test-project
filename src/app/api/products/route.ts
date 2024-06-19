import {NextRequest, NextResponse} from "next/server";

import {products} from "@/../data/products";


export async function GET(req:NextRequest){
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = products.slice(startIndex, endIndex);

    return NextResponse.json({
        page,
        limit,
        total: products.length,
        products: paginatedProducts,
    });
}



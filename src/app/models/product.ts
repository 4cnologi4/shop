export interface Product {
    productId: number,
    productName: string,
    stars: number,
    imageUrl: string,
    listPrice: number,
    price: number,
    installments: Installments[]
}

export interface Installments {
    quantity: number;
    values: number
}
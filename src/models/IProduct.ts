export interface IProduct {
	products: RootObjectProducts[];
	total: number;
	skip: number;
	limit: number;
}
export interface RootObjectProductsDimensions {
	width: number;
	height: number;
	depth: number;
}
export interface RootObjectProductsReviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
export interface RootObjectProductsMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}
export interface RootObjectProducts {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: RootObjectProductsDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: RootObjectProductsReviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: RootObjectProductsMeta;
	thumbnail: string;
	images: string[];
}
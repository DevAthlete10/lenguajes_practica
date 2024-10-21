import { ProductModel } from "../../data";
import { CreateProductDto, CustomError, PaginationDto, UserEntity } from "../../domain";

export class ProductService {
    
    async createProduct(createProductDto:CreateProductDto){
        const categoryExists = await ProductModel.findOne({name: createProductDto.name});
        if (categoryExists) throw CustomError.badRequest('Product already exists');
        try {
            const product = new ProductModel(createProductDto);
            await product.save();
            return product;
        } catch (error) {
            return CustomError.badRequest('Category already exists');
        }
    }

    async getCategories(paginationDto:PaginationDto){
        const {page,limit} = paginationDto;        
        try {
            
            const [total, products] = await Promise.all([
                ProductModel.countDocuments(),
                ProductModel.find()
                        .skip((page-1) * limit)
                        .limit(limit)
                        .populate('user','name email emailValidated role')
                        .populate('category','name available')
            ]);
            return {
                total,
                page,
                limit,
                next: `/api/products?page=${(page+1)}&limit=${limit}`,
                prev: (page -1 > 0) ? `/api/products?page=${(page-1)}&limit=${limit}` :null,                
                products:products,                
            };
        } catch (error) {
            throw CustomError.internalServer('Internal Server Error');   
        }
    }

}
import { CategoryModel } from "../../data";
import {CreateCategoryDto, CustomError, PaginationDto, UserEntity } from "../../domain";

export class CategoryService {
    
    async createCategory(createCategoryDto:CreateCategoryDto,user:UserEntity){
        const categoryExists = await CategoryModel.findOne({name: createCategoryDto.name});
        if (categoryExists) throw CustomError.badRequest('Category already exists');
        try {
            const category = new CategoryModel({
                ...createCategoryDto,
                user:user.id
            });
            await category.save();
            return {
                id: category.id,
                name: category.name,
                available: category.available,
            }
        } catch (error) {
            return CustomError.badRequest('Category already exists');
        }
    }

    async getCategories(paginationDto:PaginationDto){
        const {page,limit} = paginationDto;        
        try {
            
            const [total, categories] = await Promise.all([
                CategoryModel.countDocuments(),
                CategoryModel.find()
                        .skip((page-1) * limit)
                        .limit(limit)
            ]);
            return {
                total,
                page,
                limit,
                next: `/api/categories?page=${(page+1)}&limit=${limit}`,
                prev: (page -1 > 0) ? `/api/categories?page=${(page-1)}&limit=${limit}` :null,                
                categories:categories.map(category => ({
                    id:category.id,
                    name:category.name,
                    available:category.available
                })),                
            };
        } catch (error) {
            throw CustomError.internalServer('Internal Server Error');   
        }
    }

}
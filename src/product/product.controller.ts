import {Controller, Get, Post, Body, Param, ParseIntPipe, ParseArrayPipe} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get('amount/:productId/:couponIds')
    async getProductAmount(@Param('productId', ParseIntPipe) productId: number,
                           @Param('couponIds', ParseArrayPipe) couponIds?: number[]) {
        return this.productService.getProductAmount(productInfoRequestDto);
    }

}

import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Product} from './entity/product.entity';
import {ProductInfoRequestDto} from "./dto/request/product-info-request.dto";

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private productRepository: Repository<Product>,
    ) {}

    async getProductAmount(productInfoRequestDto: ProductInfoRequestDto): Promise<number> {
        const product = await this.productRepository.findOne({ where: { id: productInfoRequestDto.productId } });
        if (!product) {
            throw new NotFoundException(`Product with ID ${productInfoRequestDto.productId} not found`);
        }

        // TODO 상품 가격 추출 로직을 완성 시켜주세요.

        return product.amount;
    }
}

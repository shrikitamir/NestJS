import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './interfaces/items.interface';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { };

    async findAll(): Promise<Array<Item>> {
        return await this.itemModel.find();
    };

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id })
    };

    async create(item: Item): Promise<Item> { 
        const newItem = new this.itemModel(item);
        return await newItem.save();
    };

    async update(id: string, item: Item): Promise<Item> { 
        return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
    };

    async delete(id: string): Promise<Item> { 
        return await this.itemModel.findByIdAndRemove(id);
    };
};

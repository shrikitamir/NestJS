import { Controller, Body, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/items.interface';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService) { };

    @Get()
    findAll(): Promise<Array<Item>> {
        return this.itemsService.findAll();
    };

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Item> {
        return this.itemsService.findOne(id);
    };

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto);
    };

    @Put(':id')
    update(@Param('id') id: string, @Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.update(id, createItemDto);
    };

    @Delete(':id')
    delete(@Param('id') id: string): Promise<Item> {
        return this.itemsService.delete(id);
    };
};

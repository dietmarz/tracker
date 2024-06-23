// src/services/ItemService.ts

import {Item} from "../model/Item.ts";
import {makeData} from "./makeFakeData.ts";

class ItemService {
    private items: Item[] = makeData(100);

    static readonly ItemNotFoundError = class extends Error {
        constructor(id: string | number) {
            super(`Item with id ${id} not found`);
            this.name = 'ItemNotFoundError';
        }
    }

    private timeoutMilliSec: number = 100;


    getAllItems(): Promise<Item[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.items), this.timeoutMilliSec);
        });
    }

    getItemById(id: number): Promise<Item> {
        return new Promise((resolve) => {
            const item  =this.items.find(item => item.id === id)
            if(item === undefined) {
                throw new ItemService.ItemNotFoundError(id);
            }
            setTimeout(() => resolve(item), this.timeoutMilliSec);
        });
    }

    createItem(newItem: Item): Promise<Item> {
        return new Promise((resolve) => {
            setTimeout(() => {
                newItem.id = this.items.length ? Math.max(...this.items.map(item => item.id)) + 1 : 1;
                this.items.push(newItem);
                resolve(newItem);
            }, this.timeoutMilliSec);
        });
    }

    updateItem(updatedItem: Item): Promise<Item> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = this.items.findIndex(item => item.id === updatedItem.id);
                if (index !== -1) {
                    this.items[index] = updatedItem;
                    resolve(updatedItem);
                } else {
                    throw new ItemService.ItemNotFoundError(updatedItem.id);
                }
            }, this.timeoutMilliSec);
        });
    }

    deleteItem(id: number): Promise<boolean> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = this.items.findIndex(item => item.id === id);
                if (index !== -1) {
                    this.items.splice(index, 1);
                    resolve(true);
                } else {
                    resolve(false);
                }
            }, this.timeoutMilliSec);
        });
    }
}

export default new ItemService();


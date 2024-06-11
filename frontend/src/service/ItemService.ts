// src/services/ItemService.ts

import { Item } from "../model/Item.ts";

class ItemService {
    private items: Item[] = [
        {
            id: 1,
            description: "Item 1",
            interval: 5,
            url: "http://ausService.com/1",
            xpath: "/html/body/div[1]",
            screenshot: true,
        },
        {
            id: 2,
            description: "Item 2",
            interval: 10,
            url: "http://example.com/2",
            xpath: "/html/body/div[2]",
            screenshot: false,
        },
    ];

    private timeoutMilliSec: number = 100;


    getAllItems(): Promise<Item[]> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.items), this.timeoutMilliSec);
        });
    }

    getItemById(id: number): Promise<Item | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.items.find(item => item.id === id)), this.timeoutMilliSec);
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

    updateItem(updatedItem: Item): Promise<Item | undefined> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const index = this.items.findIndex(item => item.id === updatedItem.id);
                if (index !== -1) {
                    this.items[index] = updatedItem;
                    resolve(updatedItem);
                } else {
                    resolve(undefined);
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

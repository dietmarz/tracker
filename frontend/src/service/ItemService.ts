// src/services/ItemService.ts

import {Item} from "../model/Item.ts";

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

    getAllItems(): Item[] {
        return this.items;
    }

    getItemById(id: number): Item | undefined {
        return this.items.find(item => item.id === id);
    }

    createItem(newItem: Item): Item {
        newItem.id = this.items.length ? Math.max(...this.items.map(item => item.id)) + 1 : 1;
        this.items.push(newItem);
        return newItem;
    }

    updateItem(updatedItem: Item): Item | undefined {
        const index = this.items.findIndex(item => item.id === updatedItem.id);
        if (index !== -1) {
            this.items[index] = updatedItem;
            return updatedItem;
        }
        return undefined;
    }

    deleteItem(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

export default new ItemService();

import { faker } from '@faker-js/faker'
import {Item} from "../model/Item.ts";

const newItem = (id: number): Item => {
    return {
        id: id,
        description: faker.airline.flightNumber(),
        interval: faker.number.int({min: 1, max: 20}),
        url: faker.internet.url(),
        xpath: faker.system.filePath(),
        screenshot: faker.datatype.boolean(0.5)
    }
}

export function makeData(count: number): Item[] {
    const items : Item[] = [];
    for(let i=0 ; i < count ; i++) {
        items.push(newItem(i));
    }
    return items;
}
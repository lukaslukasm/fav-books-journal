import { nanoid } from "nanoid";
import type { Book } from "../types/types";
import { faker } from "@faker-js/faker";

export default function getFakeBooks(n: number = 10): Book[] {
  const res: Book[] = [];

  for (let i = 0; i < n; i++) {
    const elm: Book = {
      id: nanoid(),
      author: faker.book.author(),
      name: faker.book.title(),
      description: faker.lorem.sentences({ min: 1, max: 3 }),
      imagePath: "/random",
    };

    res.push(elm);
  }

  return res;
}

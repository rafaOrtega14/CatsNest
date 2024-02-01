import { Injectable } from '@nestjs/common';
import { CatDictionary, Cats } from './cats.dictionary';

@Injectable()
export class CatsService {
  getCatRaces(): string[] {
    return CatDictionary.map((cat) => cat.race);
  }

  createCat(cat: Cats): Cats[] {
    CatDictionary.push(cat)
    return CatDictionary;
  }

  getDetailsByRace(race: string): Cats {
    const cats = CatDictionary.find((cat) => cat.race === race);
    return cats;
  }
}

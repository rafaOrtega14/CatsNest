import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cats } from './cats.dictionary';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatsService) {}
  @Get('races')
  getCatRaces(): string[] {
    return this.catService.getCatRaces();
  }
  @Post('')
  createCat(@Body() cats: Cats): Cats[] {
    return this.catService.createCat(cats);
  }
  @Get('details/:race')
  getDetailsByRace(@Param('race') race: string): Cats {
    return this.catService.getDetailsByRace(race);
  }
}

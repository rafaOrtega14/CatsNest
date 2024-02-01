import { HttpException, HttpStatus, NestMiddleware } from '@nestjs/common';
import { CatDictionary } from './cats.dictionary';

export class CatMiddleware implements NestMiddleware {
  use(req: any, res: any, next: (error?: any) => void) {
    const { race } = req.body;
    if (CatDictionary.find((cat) => cat.race === race)) {
      throw new HttpException(
        {
          status: 500,
          error: 'No puedes subir una raza de gato igual',
        },
        HttpStatus.FORBIDDEN,
      );
    } else {
      next();
    }
  }
}

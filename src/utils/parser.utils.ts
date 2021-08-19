import { BadRequestException } from "@nestjs/common";

import { UF } from "../interfaces/city/uf.enum";

export class ParserUtils {
  public static parseUF(uf: string): string {
    if(!UF[uf])
      throw new BadRequestException('Invalid UF.');

    return UF[uf];
  }
}
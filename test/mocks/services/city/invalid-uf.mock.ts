import { BadRequestException } from "@nestjs/common"

export const invalidUF = new BadRequestException("Invalid UF.");
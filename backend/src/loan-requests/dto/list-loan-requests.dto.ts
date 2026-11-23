import {IsIn, IsOptional} from "class-validator"
import { Type } from "class-transformer";

export class ListLoanRequestsDto {
  // TODO BACK-A: agregar las validaciones del filtro opcional indicado en el enunciado.
  // La conversión de la consulta a número ya está preparada.
  @IsOptional()
  @IsIn(["borrowed","taken"])
  @Type(() => Number)
  toolId?: number;
}


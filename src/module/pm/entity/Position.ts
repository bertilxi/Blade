import { BelongsTo, HasOne, Repository } from "@iguazu/puma";

@Repository()
export class PositionRepository {
  @BelongsTo("Project") public project;
  @HasOne("Assignment") public assignment;
}

export const Position = new PositionRepository();

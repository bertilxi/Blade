import { BelongsTo, HasMany, Repository } from "@iguazu/puma";

@Repository()
export class ProjectRepository {
  @BelongsTo("Client") public client;
  @HasMany("Position") public positions;
}

export const Project = new ProjectRepository();

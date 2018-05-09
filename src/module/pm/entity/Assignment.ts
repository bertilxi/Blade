import { BelongsTo, Repository } from "@iguazu/puma";

@Repository()
export class AssignmentRepository {
  @BelongsTo("Position") public position;
  @BelongsTo("Resource") public resource;
}

export const Assignment = new AssignmentRepository();

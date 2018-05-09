import { HasMany, Repository } from "@iguazu/puma";

@Repository({
  options: {
    fetch: { withRelated: ["assignments"] }
  }
})
export class ResourceRepository {
  @HasMany("Assignment") public assignments;
}

export const Resource = new ResourceRepository();

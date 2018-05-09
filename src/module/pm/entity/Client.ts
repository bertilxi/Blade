import { HasMany, Repository, WebModel } from "@iguazu/puma";

@Repository({
  options: {
    fetch: {
      withRelated: ["projects.positions.assignment.resource"]
    },
    listenTo: ["Project", "Position", "Assignment", "Resource"]
  }
})
export class ClientRepository {
  @HasMany("Project") public projects;
}

export const Client: WebModel = new ClientRepository() as any;

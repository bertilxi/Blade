import { Module } from "@iguazu/puma";
import { resolve } from "path";

import { Assignment, Client, Position, Project, Resource } from "./entity";
import { customerController } from "./controller";

const controllers = [customerController];
const entities = [Assignment, Client, Position, Project, Resource];
const migrationsPath = resolve(__dirname, "./migration");
const seedsPath = resolve(__dirname, "./seed");

@Module({
  controllers,
  entities,
  migrationsPath,
  seedsPath
})
export class PmModule {}

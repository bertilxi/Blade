import { Application } from "@iguazu/puma";
import { modules } from "./module";

@Application({ modules })
export class BladeApplication {}

import { setupWorker } from "msw/browser";
import { handlers } from "./handlers/idol.handlers";

export const worker = setupWorker(...handlers);

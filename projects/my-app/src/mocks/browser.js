import { setupWorker } from "msw";
import { authEndpoints } from "./endpoints/auth";
import { usersEndpoints } from "./endpoints/users";

const worker = setupWorker(
    ...authEndpoints,
    ...usersEndpoints,
);

worker.start();

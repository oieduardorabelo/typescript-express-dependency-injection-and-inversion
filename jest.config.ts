import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  extensionsToTreatAsEsm: [".ts"],
  preset: "ts-jest",
};

export default config;

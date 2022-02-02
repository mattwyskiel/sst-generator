import { Command } from "commander";
import { generateProject } from "./generate";

const program = new Command();

program
  .version("0.1.0")
  .argument("<name>", "The name of the generated Serverless Stack project")
  .description("Generates a Serverless Stack project in the current directory")
  .action(async (name) => await generateProject(name, process.cwd()));

program.parse();

import { yargs } from "@umijs/utils";
interface IOpts {
    cwd: string;
    args: yargs.Arguments;
}
export default class AppGenerator {
    cwd: string;
    args: yargs.Arguments;
    prompts: any;
    constructor({ cwd, args }: IOpts);
    run(): Promise<void>;
    prompting(): any;
    copyTpl(opts: {
        templatePath: string;
        target: string;
        context: object;
    }): void;
    copyDirectory(opts: {
        path: string;
        context: object;
        target: string;
    }): void;
    writing(): Promise<void>;
}
export {};

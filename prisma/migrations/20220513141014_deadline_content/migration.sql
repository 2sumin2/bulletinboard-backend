/*
  Warnings:

  - Made the column `content` on table `Board` required. This step will fail if there are existing NULL values in that column.
  - Made the column `deadline` on table `Board` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Board" ALTER COLUMN "content" SET NOT NULL,
ALTER COLUMN "deadline" SET NOT NULL;

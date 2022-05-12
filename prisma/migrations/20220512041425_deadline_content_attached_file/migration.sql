/*
  Warnings:

  - You are about to drop the column `deadLine` on the `Board` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Board" DROP COLUMN "deadLine",
ADD COLUMN     "deadline" TIMESTAMP(3),
ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "attachedFile" DROP NOT NULL;

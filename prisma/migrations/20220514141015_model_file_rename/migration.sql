/*
  Warnings:

  - The primary key for the `File` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `borderId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fileId` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fileName` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fileUpload` on the `File` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `File` table. All the data in the column will be lost.
  - Added the required column `boardId` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP CONSTRAINT "File_pkey",
DROP COLUMN "borderId",
DROP COLUMN "fileId",
DROP COLUMN "fileName",
DROP COLUMN "fileUpload",
DROP COLUMN "fileUrl",
ADD COLUMN     "boardId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "upload" TEXT,
ADD COLUMN     "url" TEXT NOT NULL,
ADD CONSTRAINT "File_pkey" PRIMARY KEY ("id");

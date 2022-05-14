-- CreateTable
CREATE TABLE "File" (
    "fileId" SERIAL NOT NULL,
    "fileName" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "fileUpload" TEXT,
    "authorId" INTEGER NOT NULL,
    "borderId" INTEGER NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("fileId")
);

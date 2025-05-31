/*
  Warnings:

  - You are about to alter the column `credits` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MODERATOR', 'USER');

-- DropIndex
DROP INDEX "Course_code_schoolId_key";

-- DropIndex
DROP INDEX "TransferMapping_fromCourseId_toCourseId_key";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "credits" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "TransferMapping" ADD COLUMN     "contributorId" TEXT;

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TransferMapping" ADD CONSTRAINT "TransferMapping_contributorId_fkey" FOREIGN KEY ("contributorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

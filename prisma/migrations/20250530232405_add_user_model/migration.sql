/*
  Warnings:

  - A unique constraint covering the columns `[code,schoolId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fromCourseId,toCourseId]` on the table `TransferMapping` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "credits" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "college" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Course_code_schoolId_key" ON "Course"("code", "schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "TransferMapping_fromCourseId_toCourseId_key" ON "TransferMapping"("fromCourseId", "toCourseId");

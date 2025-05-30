-- CreateEnum
CREATE TYPE "TransferStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "School" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "School_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "credits" DOUBLE PRECISION NOT NULL,
    "description" TEXT,
    "schoolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransferMapping" (
    "id" TEXT NOT NULL,
    "fromSchoolId" TEXT NOT NULL,
    "toSchoolId" TEXT NOT NULL,
    "fromCourseId" TEXT NOT NULL,
    "toCourseId" TEXT NOT NULL,
    "status" "TransferStatus" NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransferMapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "School_code_key" ON "School"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Course_code_schoolId_key" ON "Course"("code", "schoolId");

-- CreateIndex
CREATE UNIQUE INDEX "TransferMapping_fromCourseId_toCourseId_key" ON "TransferMapping"("fromCourseId", "toCourseId");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferMapping" ADD CONSTRAINT "TransferMapping_fromSchoolId_fkey" FOREIGN KEY ("fromSchoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferMapping" ADD CONSTRAINT "TransferMapping_toSchoolId_fkey" FOREIGN KEY ("toSchoolId") REFERENCES "School"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferMapping" ADD CONSTRAINT "TransferMapping_fromCourseId_fkey" FOREIGN KEY ("fromCourseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransferMapping" ADD CONSTRAINT "TransferMapping_toCourseId_fkey" FOREIGN KEY ("toCourseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `Schedule` to the `payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookingDate` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payment" ADD COLUMN     "Schedule" TEXT NOT NULL,
ADD COLUMN     "bookingDate" TEXT NOT NULL;

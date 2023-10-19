/*
  Warnings:

  - You are about to drop the column `Schedule` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `bookingDate` on the `payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payment" DROP COLUMN "Schedule",
DROP COLUMN "bookingDate";

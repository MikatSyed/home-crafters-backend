/*
  Warnings:

  - You are about to drop the column `payment_date` on the `payment` table. All the data in the column will be lost.
  - You are about to drop the column `payment_status` on the `payment` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "payment" DROP COLUMN "payment_date",
DROP COLUMN "payment_status";

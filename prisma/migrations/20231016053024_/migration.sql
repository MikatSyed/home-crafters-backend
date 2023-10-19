/*
  Warnings:

  - You are about to drop the column `slot_date` on the `categories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories" DROP COLUMN "slot_date";

-- AlterTable
ALTER TABLE "time_slots" ADD COLUMN     "slot_date" TIMESTAMP(3);

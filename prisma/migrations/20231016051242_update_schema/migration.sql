/*
  Warnings:

  - You are about to drop the column `slot_date` on the `bookings` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slot_id,service_id,booking_date]` on the table `bookings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "bookings_slot_id_service_id_slot_date_key";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "slot_date";

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "slot_date" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "bookings_slot_id_service_id_booking_date_key" ON "bookings"("slot_id", "service_id", "booking_date");

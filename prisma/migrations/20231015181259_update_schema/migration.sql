/*
  Warnings:

  - You are about to drop the column `available_service_id` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the `available_services` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slot_id,service_id,slot_date]` on the table `bookings` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `service_id` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot_date` to the `bookings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slot_id` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "available_services" DROP CONSTRAINT "available_services_service_id_fkey";

-- DropForeignKey
ALTER TABLE "available_services" DROP CONSTRAINT "available_services_slot_id_fkey";

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_available_service_id_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "available_service_id",
ADD COLUMN     "service_id" TEXT NOT NULL,
ADD COLUMN     "slot_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "slot_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "available_services";

-- CreateIndex
CREATE UNIQUE INDEX "bookings_slot_id_service_id_slot_date_key" ON "bookings"("slot_id", "service_id", "slot_date");

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_slot_id_fkey" FOREIGN KEY ("slot_id") REFERENCES "time_slots"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

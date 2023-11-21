/*
  Warnings:

  - You are about to drop the column `booking_id` on the `payment` table. All the data in the column will be lost.
  - Added the required column `bookingId` to the `payment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "payment" DROP CONSTRAINT "payment_booking_id_fkey";

-- DropIndex
DROP INDEX "payment_booking_id_key";

-- AlterTable
ALTER TABLE "payment" DROP COLUMN "booking_id",
ADD COLUMN     "bookingId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

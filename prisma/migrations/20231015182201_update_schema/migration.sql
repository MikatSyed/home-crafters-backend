/*
  Warnings:

  - You are about to drop the column `booking_status` on the `bookings` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `services` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "booking_status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'pending';

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "price" SET DATA TYPE INTEGER;

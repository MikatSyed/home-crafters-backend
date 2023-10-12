/*
  Warnings:

  - You are about to drop the column `start_time` on the `time_slots` table. All the data in the column will be lost.
  - Added the required column `location` to the `Service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endTime` to the `time_slots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isAvailable` to the `time_slots` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `time_slots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "location" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "time_slots" DROP COLUMN "start_time",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

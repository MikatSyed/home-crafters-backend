/*
  Warnings:

  - A unique constraint covering the columns `[start_time]` on the table `time_slots` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "time_slots_start_time_key" ON "time_slots"("start_time");

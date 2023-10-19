-- CreateEnum
CREATE TYPE "Availbility" AS ENUM ('upcoming', 'available');

-- AlterTable
ALTER TABLE "services" ADD COLUMN     "availbility" "Availbility" NOT NULL DEFAULT 'upcoming';

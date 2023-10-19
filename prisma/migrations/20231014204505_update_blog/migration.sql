/*
  Warnings:

  - You are about to drop the column `profileImg` on the `blogs` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `blogs` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "blogs" DROP CONSTRAINT "blogs_userId_fkey";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "profileImg",
DROP COLUMN "userId",
ADD COLUMN     "blogImg" TEXT[];

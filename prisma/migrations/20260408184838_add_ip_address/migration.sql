/*
  Warnings:

  - Added the required column `userIp` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "userIp" TEXT NOT NULL;

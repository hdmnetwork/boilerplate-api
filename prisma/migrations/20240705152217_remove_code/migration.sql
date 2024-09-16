/*
  Warnings:

  - You are about to drop the column `codeId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Code` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Code` DROP FOREIGN KEY `Code_userId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `codeId`;

-- DropTable
DROP TABLE `Code`;

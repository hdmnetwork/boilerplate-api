/*
  Warnings:

  - A unique constraint covering the columns `[userId,yearId]` on the table `Score` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Photo_userId_fkey` ON `photo`;

-- DropIndex
DROP INDEX `Photo_yearId_fkey` ON `photo`;

-- DropIndex
DROP INDEX `Score_userId_fkey` ON `score`;

-- DropIndex
DROP INDEX `Score_yearId_fkey` ON `score`;

-- DropIndex
DROP INDEX `UserRecoveryPassword_userId_fkey` ON `userrecoverypassword`;

-- CreateIndex
CREATE UNIQUE INDEX `Score_userId_yearId_key` ON `Score`(`userId`, `yearId`);

-- AddForeignKey
ALTER TABLE `UserRecoveryPassword` ADD CONSTRAINT `UserRecoveryPassword_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_yearId_fkey` FOREIGN KEY (`yearId`) REFERENCES `Year`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Score` ADD CONSTRAINT `Score_yearId_fkey` FOREIGN KEY (`yearId`) REFERENCES `Year`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

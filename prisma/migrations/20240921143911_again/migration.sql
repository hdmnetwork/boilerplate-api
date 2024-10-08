-- DropIndex
DROP INDEX `Photo_userId_fkey` ON `photo`;

-- DropIndex
DROP INDEX `Photo_yearId_fkey` ON `photo`;

-- DropIndex
DROP INDEX `UserRecoveryPassword_userId_fkey` ON `userrecoverypassword`;

-- AddForeignKey
ALTER TABLE `UserRecoveryPassword` ADD CONSTRAINT `UserRecoveryPassword_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Photo` ADD CONSTRAINT `Photo_yearId_fkey` FOREIGN KEY (`yearId`) REFERENCES `Year`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

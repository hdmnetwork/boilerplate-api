-- DropIndex
DROP INDEX `Photo_userId_fkey` ON `photo`;

-- DropIndex
DROP INDEX `Photo_yearId_fkey` ON `photo`;

-- DropIndex
DROP INDEX `UserRecoveryPassword_userId_fkey` ON `userrecoverypassword`;

-- CreateTable
CREATE TABLE `Score` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `yearId` INTEGER NOT NULL,
    `aperitif` INTEGER NOT NULL,
    `entreeFroide` INTEGER NOT NULL,
    `soupe` INTEGER NOT NULL,
    `entreeChaude` INTEGER NOT NULL,
    `sorbet` INTEGER NOT NULL,
    `plat` INTEGER NOT NULL,
    `dessert` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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

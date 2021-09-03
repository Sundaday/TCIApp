/*
  Warnings:

  - A unique constraint covering the columns `[bossId]` on the table `Raid` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bossId` to the `Raid` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Raid" ADD COLUMN     "bossId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Raid_bossId_unique" ON "Raid"("bossId");

-- AddForeignKey
ALTER TABLE "Raid" ADD FOREIGN KEY ("bossId") REFERENCES "Boss"("id") ON DELETE CASCADE ON UPDATE CASCADE;

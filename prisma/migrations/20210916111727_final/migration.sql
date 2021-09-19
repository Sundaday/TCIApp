-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'ADMIN', 'DEVELOPER');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "pseudo" VARCHAR(50),
    "mot_de_passe" VARCHAR(50),
    "email" VARCHAR(50),
    "guilde" VARCHAR(50),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Boss" (
    "id" SERIAL NOT NULL,
    "nom" VARCHAR(50),
    "element_boss" VARCHAR(50),
    "point_de_vie" DOUBLE PRECISION,
    "niveau" INTEGER,
    "palier" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Combat" (
    "id_team" SERIAL NOT NULL,
    "id_boss" INTEGER NOT NULL,
    "degat_boss" DOUBLE PRECISION,

    PRIMARY KEY ("id_team")
);

-- CreateTable
CREATE TABLE "Participe" (
    "id_raid" SERIAL NOT NULL,
    "id_boss" INTEGER NOT NULL,

    PRIMARY KEY ("id_raid")
);

-- CreateTable
CREATE TABLE "Raid" (
    "id" SERIAL NOT NULL,
    "date" DATE,
    "nom" VARCHAR(50),

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "personnage" VARCHAR(50),
    "degat_max" DOUBLE PRECISION,
    "element_team" VARCHAR(50),
    "id_user" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Combat" ADD FOREIGN KEY ("id_boss") REFERENCES "Boss"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Combat" ADD FOREIGN KEY ("id_team") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participe" ADD FOREIGN KEY ("id_boss") REFERENCES "Boss"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participe" ADD FOREIGN KEY ("id_raid") REFERENCES "Raid"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

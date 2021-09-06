-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('USER', 'ADMIN', 'DEVELOPER');

-- CreateTable
CREATE TABLE "USER" (
    "pseudo" VARCHAR(50),
    "mot_de_passe" VARCHAR(50),
    "email" VARCHAR(50),
    "guilde" VARCHAR(50),
    "id_user" SERIAL NOT NULL,

    PRIMARY KEY ("id_user")
);

-- CreateTable
CREATE TABLE "boss" (
    "nom" VARCHAR(50),
    "element_boss" VARCHAR(50),
    "point_de_vie" DOUBLE PRECISION,
    "niveau" INTEGER,
    "palier" INTEGER,
    "id_boss" SERIAL NOT NULL,

    PRIMARY KEY ("id_boss")
);

-- CreateTable
CREATE TABLE "combat" (
    "id_team" INTEGER NOT NULL,
    "id_boss" INTEGER NOT NULL,
    "degat_boss" DOUBLE PRECISION,

    PRIMARY KEY ("id_team","id_boss")
);

-- CreateTable
CREATE TABLE "participe" (
    "id_raid" INTEGER NOT NULL,
    "id_boss" INTEGER NOT NULL,

    PRIMARY KEY ("id_raid","id_boss")
);

-- CreateTable
CREATE TABLE "raid" (
    "date" DATE,
    "nom" VARCHAR(50),
    "id_raid" SERIAL NOT NULL,

    PRIMARY KEY ("id_raid")
);

-- CreateTable
CREATE TABLE "team" (
    "personnage" VARCHAR(50),
    "degat_max" DOUBLE PRECISION,
    "element_team" VARCHAR(50),
    "id_team" INTEGER NOT NULL,
    "id_user" INTEGER NOT NULL,

    PRIMARY KEY ("id_team")
);

-- CreateIndex
CREATE UNIQUE INDEX "USER.id_user_unique" ON "USER"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "boss.id_boss_unique" ON "boss"("id_boss");

-- CreateIndex
CREATE INDEX "combat2_fk" ON "combat"("id_boss");

-- CreateIndex
CREATE INDEX "combat_fk" ON "combat"("id_team");

-- CreateIndex
CREATE UNIQUE INDEX "combat_pk" ON "combat"("id_team", "id_boss");

-- CreateIndex
CREATE INDEX "participe2_fk" ON "participe"("id_boss");

-- CreateIndex
CREATE INDEX "participe_fk" ON "participe"("id_raid");

-- CreateIndex
CREATE UNIQUE INDEX "participe_pk" ON "participe"("id_raid", "id_boss");

-- CreateIndex
CREATE UNIQUE INDEX "raid.id_raid_unique" ON "raid"("id_raid");

-- CreateIndex
CREATE UNIQUE INDEX "team.id_team_unique" ON "team"("id_team");

-- CreateIndex
CREATE INDEX "compose_fk" ON "team"("id_user");

-- AddForeignKey
ALTER TABLE "combat" ADD FOREIGN KEY ("id_boss") REFERENCES "boss"("id_boss") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combat" ADD FOREIGN KEY ("id_team") REFERENCES "team"("id_team") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participe" ADD FOREIGN KEY ("id_boss") REFERENCES "boss"("id_boss") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participe" ADD FOREIGN KEY ("id_raid") REFERENCES "raid"("id_raid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "team" ADD FOREIGN KEY ("id_user") REFERENCES "USER"("id_user") ON DELETE CASCADE ON UPDATE CASCADE;

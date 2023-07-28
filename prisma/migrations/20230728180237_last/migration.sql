/*
  Warnings:

  - You are about to alter the column `price` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "price" REAL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tour" ("address", "city", "country", "createdAt", "description", "id", "image", "price", "title", "updatedAt") SELECT "address", "city", "country", "createdAt", "description", "id", "image", "price", "title", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
CREATE UNIQUE INDEX "Tour_address_city_country_key" ON "Tour"("address", "city", "country");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

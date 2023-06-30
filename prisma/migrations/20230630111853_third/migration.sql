/*
  Warnings:

  - You are about to alter the column `rating` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserTour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "tourId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "UserTour_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserTour_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserTour" ("createdAt", "datetime", "id", "tourId", "updatedAt", "userId") SELECT "createdAt", "datetime", "id", "tourId", "updatedAt", "userId" FROM "UserTour";
DROP TABLE "UserTour";
ALTER TABLE "new_UserTour" RENAME TO "UserTour";
CREATE UNIQUE INDEX "UserTour_tourId_userId_key" ON "UserTour"("tourId", "userId");
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "distance" REAL NOT NULL,
    "rating" REAL NOT NULL,
    "maxGroupSize" INTEGER NOT NULL,
    "featured" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tour" ("adress", "city", "createdAt", "distance", "featured", "id", "image", "maxGroupSize", "price", "rating", "title", "updatedAt") SELECT "adress", "city", "createdAt", "distance", "featured", "id", "image", "maxGroupSize", "price", "rating", "title", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

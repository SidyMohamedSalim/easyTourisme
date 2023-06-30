-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "distance" REAL NOT NULL,
    "rating" INTEGER NOT NULL,
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

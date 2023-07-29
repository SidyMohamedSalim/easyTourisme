/*
  Warnings:

  - The primary key for the `Booking` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "Tour_address_city_country_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "message" TEXT,
    "UserEmail" TEXT,
    "phone" TEXT,
    "TourId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Booking_UserEmail_fkey" FOREIGN KEY ("UserEmail") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Booking_TourId_fkey" FOREIGN KEY ("TourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Booking" ("TourId", "UserEmail", "createdAt", "email", "id", "message", "name", "phone", "updatedAt") SELECT "TourId", "UserEmail", "createdAt", "email", "id", "message", "name", "phone", "updatedAt" FROM "Booking";
DROP TABLE "Booking";
ALTER TABLE "new_Booking" RENAME TO "Booking";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the `UserTour` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `refresh_token_expires_in` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `distance` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `maxGroupSize` on the `Tour` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Tour` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Tour` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.
  - Added the required column `address` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "UserTour_tourId_userId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserTour";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "review";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "favoritesTours" (
    "TourId" TEXT NOT NULL,
    "userEmail" TEXT NOT NULL,

    PRIMARY KEY ("TourId", "userEmail"),
    CONSTRAINT "favoritesTours_TourId_fkey" FOREIGN KEY ("TourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "favoritesTours_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Options" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tourId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Options_tourId_fkey" FOREIGN KEY ("tourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "UserEmail" TEXT,
    "TourId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,

    PRIMARY KEY ("email", "TourId"),
    CONSTRAINT "Booking_UserEmail_fkey" FOREIGN KEY ("UserEmail") REFERENCES "User" ("email") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Booking_TourId_fkey" FOREIGN KEY ("TourId") REFERENCES "Tour" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "password" TEXT,
    "email" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name", "password") SELECT "email", "emailVerified", "id", "image", "name", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Account" ("access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId") SELECT "access_token", "expires_at", "id", "id_token", "provider", "providerAccountId", "refresh_token", "scope", "session_state", "token_type", "type", "userId" FROM "Account";
DROP TABLE "Account";
ALTER TABLE "new_Account" RENAME TO "Account";
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");
CREATE TABLE "new_Tour" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Tour" ("city", "createdAt", "id", "image", "price", "title", "updatedAt") SELECT "city", "createdAt", "id", "image", "price", "title", "updatedAt" FROM "Tour";
DROP TABLE "Tour";
ALTER TABLE "new_Tour" RENAME TO "Tour";
CREATE UNIQUE INDEX "Tour_address_city_country_key" ON "Tour"("address", "city", "country");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE INDEX "favoritesTours_TourId_userEmail_idx" ON "favoritesTours"("TourId", "userEmail");

-- CreateIndex
CREATE INDEX "Booking_email_TourId_idx" ON "Booking"("email", "TourId");

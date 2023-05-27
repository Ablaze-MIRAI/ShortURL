-- CreateTable
CREATE TABLE "Analytics" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "accessAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" INTEGER NOT NULL,
    "ip" TEXT NOT NULL,
    "ua" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "browser" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "referrer" TEXT NOT NULL,
    "source" TEXT
);

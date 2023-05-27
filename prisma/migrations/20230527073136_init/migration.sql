-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Url" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "target" TEXT NOT NULL
);
INSERT INTO "new_Url" ("createAt", "id", "name", "slug", "target", "updateAt") SELECT "createAt", "id", "name", "slug", "target", "updateAt" FROM "Url";
DROP TABLE "Url";
ALTER TABLE "new_Url" RENAME TO "Url";
CREATE UNIQUE INDEX "Url_slug_key" ON "Url"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

import { PrismaClient } from "@prisma/client";

// ป้องกันการสร้าง instance หลายตัวใน development
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query", "info", "warn", "error"], // เปิด logging
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

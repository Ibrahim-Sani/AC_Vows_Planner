import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  brideName: text("bride_name").notNull(),
  groomName: text("groom_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  weddingDate: text("wedding_date"),
  budget: text("budget"),
  packageInterest: text("package_interest"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const packages = pgTable("packages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  price: text("price").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
  popular: integer("popular").default(0),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  coupleName: text("couple_name").notNull(),
  packageUsed: text("package_used").notNull(),
  rating: integer("rating").notNull(),
  review: text("review").notNull(),
  avatarUrl: text("avatar_url"),
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
});

export const insertPackageSchema = createInsertSchema(packages).omit({
  id: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultations.$inferSelect;
export type Package = typeof packages.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { TeamSectionData } from "../../types/strapi";
import { getStrapiImageUrl } from "@/lib/strapi";

const DEFAULT_TEAM_MEMBERS = [
  { name: "Harry Matthew", role: "Co-Founder", image: "/team1.jpg" },
  { name: "Harry Matthew", role: "Co-Founder", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team1.jpg" },
  { name: "Anne Louis", role: "Developer", image: "/team2.jpg" },
];

export default function Team({ data }: { data?: TeamSectionData }) {
  const heading = data?.heading || "About us";
  const description = data?.description || "Thumbstack is a design and technology studio focused on creating digital products that balance clarity with character. Working as an extension of our clients' teams, we combine thoughtful design, robust engineering, and a collaborative process to build experiences that are both visually refined and functionally strong.";
  const members = data?.members?.map(m => {
    const imageUrl = getStrapiImageUrl(m.image);
    return {
      name: m.name,
      role: m.role,
      image: imageUrl || "/team1.jpg"
    };
  }) || DEFAULT_TEAM_MEMBERS;

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 lg:px-[100px]">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row items-end gap-8 md:gap-[218px] mb-24"
          style={{
            width: "100%",
            maxWidth: "1400px",
            height: "auto",
            minHeight: "150px",
            margin: "0 auto 6rem auto"
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-delight)",
              fontWeight: 500,
              fontSize: "clamp(56px, 8vw, 116px)",
              lineHeight: "0.8", // Tightened for flex-end alignment
              color: "#0F1D07",
              margin: 0
            }}
          >
            {heading}
          </h2>

          <div className="max-w-[385px] pb-2"> {/* Adjusted max-width and padding for alignment */}
            <p
              style={{
                fontFamily: "var(--font-satoshi)",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "1.6",
                color: "#0F1D07"
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {members.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-4"
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 700,
                    fontSize: "12px",
                    color: "#0F1D07"
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-satoshi)",
                    fontWeight: 500,
                    fontSize: "10px",
                    color: "#3145DD"
                  }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

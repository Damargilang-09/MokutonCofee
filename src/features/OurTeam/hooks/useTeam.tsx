import { useEffect, useState } from "react";
import axios from "axios";
import type { TeamMember } from "../types/teamTypes";
const ROLES = [
  "Founder & Head Roaster",
  "Lead Barista",
  "Roastery Manager",
  "Quality Control",
  "Barista",
  "Marketing & Brand",
];

const BIOS = [
  "Passionate about sourcing the finest single origin beans from across the archipelago.",
  "Crafting every cup with precision and love, one pour at a time.",
  "Ensuring every roast batch meets Mokuton's highest quality standards.",
  "Tasting and curating the perfect flavor profiles for our menu.",
  "Bringing warmth and expertise to every customer interaction.",
  "Telling the Mokuton story through creative visuals and campaigns.",
];

export const useTeam = () => {
  const [team, setTeam] = useState<(TeamMember & { role: string; bio: string })[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6&nat=us"
        );
        const members = response.data.results.map(
          (member: TeamMember, index: number) => ({
            ...member,
            role: ROLES[index],
            bio: BIOS[index],
          })
        );
        setTeam(members);
      } catch {
        setError("Gagal memuat data tim.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return { team, loading, error };
};
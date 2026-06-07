import TeamCard from "../../features/OurTeam/component/teamsCard";
import { useTeam } from "../../features/OurTeam/hooks/useteam";
TeamCard;

export default function TeamsPage() {
  const { team, loading, error } = useTeam();

  if (loading)
    return (
      <div className="flex justify-center mt-20">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );

  if (error) return <p className="text-center mt-20 text-red-400">{error}</p>;

  return (
    <div className="px-5 md:px-25 mt-20 pb-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl text-moku md:text-4xl">Meet Moku Team</h1>
        <p className="text-gray-400 mt-3 max-w-xl mx-auto">
          Behind every great cup of Mokuton coffee is a passionate team
          dedicated to craft, quality, and community.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member) => (
          <TeamCard
            key={member.login.uuid}
            photo={member.picture.large}
            name={`${member.name.first} ${member.name.last}`}
            role={member.role}
            bio={member.bio}
            city={member.location.city}
            country={member.location.country}
          />
        ))}
      </div>
    </div>
  );
}

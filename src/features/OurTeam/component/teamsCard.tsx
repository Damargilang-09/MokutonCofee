type Props = {
  photo: string;
  name: string;
  role: string;
  bio: string;
  city: string;
  country: string;
};

export default function TeamCard({ photo, name, role, bio, city, country }: Props) {
  return (
    <div className="card bg-base-100 border border-base-200 hover:scale-[1.02] transition-transform duration-200">
      <figure className="pt-6">
        <img
          src={photo}
          alt={name}
          className="rounded-full w-28 h-28 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center gap-1 pt-4">
        <h2 className="card-title text-base">{name}</h2>
        <span
          className="text-xs px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: "#7D9B76" }}
        >
          {role}
        </span>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">{bio}</p>
        <p className="text-xs text-gray-400 mt-1">
          {city}, {country}
        </p>
      </div>
    </div>
  );
}
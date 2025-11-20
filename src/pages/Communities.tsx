import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Users } from "lucide-react";

const mockCommunities = [
  {
    id: 1,
    name: "Tech Enthusiasts",
    icon: "💻",
    members: 1250,
    description: "A community for technology lovers to share and discuss latest trends",
    tags: ["Technology", "Coding", "AI"],
    joined: false,
  },
  {
    id: 2,
    name: "Fitness Warriors",
    icon: "💪",
    members: 890,
    description: "Get fit together! Share workouts, nutrition tips, and motivation",
    tags: ["Fitness", "Health", "Sports"],
    joined: true,
  },
  {
    id: 3,
    name: "Book Club",
    icon: "📚",
    members: 654,
    description: "Monthly book discussions and literary adventures",
    tags: ["Reading", "Books", "Literature"],
    joined: false,
  },
  {
    id: 4,
    name: "Travel Buddies",
    icon: "✈️",
    members: 2100,
    description: "Explore the world together, share travel tips and experiences",
    tags: ["Travel", "Adventure", "Culture"],
    joined: true,
  },
  {
    id: 5,
    name: "Music Producers",
    icon: "🎵",
    members: 445,
    description: "Create, share, and collaborate on music production",
    tags: ["Music", "Production", "Creative"],
    joined: false,
  },
  {
    id: 6,
    name: "Food Lovers",
    icon: "🍕",
    members: 1870,
    description: "Share recipes, restaurant reviews, and culinary adventures",
    tags: ["Food", "Cooking", "Restaurants"],
    joined: false,
  },
];

export default function Communities() {
  const [searchQuery, setSearchQuery] = useState("");
  const [communities, setCommunities] = useState(mockCommunities);

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      community.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleJoin = (id: number) => {
    setCommunities((prev) =>
      prev.map((c) => (c.id === id ? { ...c, joined: !c.joined } : c))
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Discover Communities</h1>
        <Link to="/communities/create">
          <Button className="gradient-bg">
            <Plus className="mr-2 h-5 w-5" />
            Create Community
          </Button>
        </Link>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search communities..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 py-6 text-lg rounded-xl"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCommunities.map((community) => (
          <div
            key={community.id}
            className="bg-white border-2 border-border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-smooth cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center text-3xl">
                {community.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{community.name}</h3>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {community.members.toLocaleString()} members
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {community.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {community.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => toggleJoin(community.id)}
                className={
                  community.joined
                    ? "flex-1 bg-green-600 hover:bg-green-700"
                    : "flex-1 gradient-bg"
                }
              >
                {community.joined ? "Joined ✓" : "Join"}
              </Button>
              <Link to={`/communities/${community.id}`} className="flex-1">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {filteredCommunities.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground text-lg">No communities found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Try adjusting your search or create a new community
          </p>
        </div>
      )}
    </div>
  );
}

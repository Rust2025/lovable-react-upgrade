import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Edit, Users, Calendar, MapPin } from "lucide-react";

export default function Profile() {
  // Mock data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    location: "San Francisco, CA",
    joinedDate: "January 2025",
    interests: ["Coding", "AI/ML", "Photography", "Travel"],
    communities: [
      { id: 1, name: "Tech Enthusiasts", icon: "💻" },
      { id: 2, name: "Fitness Warriors", icon: "💪" },
      { id: 3, name: "Travel Buddies", icon: "✈️" },
    ],
  };

  return (
    <div>
      <div className="flex justify-between items-start mb-8">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <Link to="/profile/edit">
          <Button className="gradient-bg">
            <Edit className="mr-2 h-5 w-5" />
            Edit Profile
          </Button>
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border text-center">
            <Avatar className="h-32 w-32 mx-auto mb-4">
              <AvatarFallback className="gradient-bg text-white text-4xl font-bold">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-muted-foreground mb-4">{user.email}</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                {user.location}
              </p>
              <p className="flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                Joined {user.joinedDate}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border mt-6">
            <h3 className="font-bold text-lg mb-4">Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Communities</span>
                <span className="font-bold text-primary text-xl">
                  {user.communities.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Posts</span>
                <span className="font-bold text-primary text-xl">42</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Events Attended</span>
                <span className="font-bold text-primary text-xl">15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl p-6 border">
            <h3 className="font-bold text-xl mb-4">My Interests</h3>
            <div className="flex flex-wrap gap-3">
              {user.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 gradient-bg text-white rounded-full font-semibold"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-xl">My Communities</h3>
              <Link to="/communities">
                <Button variant="outline" size="sm">
                  Browse More
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {user.communities.map((community) => (
                <Link
                  key={community.id}
                  to={`/communities/${community.id}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-smooth"
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-2xl">
                    {community.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{community.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Active member
                    </p>
                  </div>
                  <Button variant="ghost" size="sm">
                    View →
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border">
            <h3 className="font-bold text-xl mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-muted">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">Joined Tech Enthusiasts</p>
                  <p className="text-sm text-muted-foreground">2 days ago</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  📝
                </div>
                <div>
                  <p className="font-semibold">Posted in Fitness Warriors</p>
                  <p className="text-sm text-muted-foreground">5 days ago</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center text-white font-bold">
                  📅
                </div>
                <div>
                  <p className="font-semibold">RSVP'd to Travel Meetup</p>
                  <p className="text-sm text-muted-foreground">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

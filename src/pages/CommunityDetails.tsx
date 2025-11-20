import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Users, Calendar, MessageSquare } from "lucide-react";

export default function CommunityDetails() {
  const { id } = useParams();
  const [joined, setJoined] = useState(false);

  // Mock data
  const community = {
    id,
    name: "Tech Enthusiasts",
    icon: "💻",
    members: 1250,
    description:
      "A vibrant community for technology lovers to share and discuss the latest trends in tech, from AI to web development.",
    tags: ["Technology", "Coding", "AI"],
  };

  const members = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "Moderator" },
    { id: 3, name: "Mike Johnson", role: "Member" },
    { id: 4, name: "Sarah Williams", role: "Member" },
  ];

  const events = [
    {
      id: 1,
      title: "Tech Meetup 2025",
      date: "2025-02-15",
      attendees: 45,
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "2025-02-22",
      attendees: 32,
    },
  ];

  const posts = [
    {
      id: 1,
      author: "John Doe",
      content: "What's everyone working on this week?",
      likes: 12,
      comments: 5,
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "Check out this amazing new AI tool I found!",
      likes: 24,
      comments: 8,
    },
  ];

  return (
    <div>
      <Link to="/communities" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Communities
      </Link>

      <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center text-5xl">
            {community.icon}
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{community.name}</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Users className="h-5 w-5" />
              {community.members.toLocaleString()} members
            </p>
          </div>
          <Button
            onClick={() => setJoined(!joined)}
            className={joined ? "bg-green-600 hover:bg-green-700 px-8" : "gradient-bg px-8"}
            size="lg"
          >
            {joined ? "Joined ✓" : "Join Community"}
          </Button>
        </div>

        <p className="text-lg mb-4">{community.description}</p>

        <div className="flex flex-wrap gap-2">
          {community.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white/80 rounded-full text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Tabs defaultValue="about" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="posts">Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-4">About this Community</h2>
            <p className="text-muted-foreground leading-relaxed">
              {community.description}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted rounded-xl">
                <p className="text-3xl font-bold text-primary">{community.members}</p>
                <p className="text-sm text-muted-foreground mt-1">Members</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <p className="text-3xl font-bold text-primary">150+</p>
                <p className="text-sm text-muted-foreground mt-1">Posts</p>
              </div>
              <div className="text-center p-4 bg-muted rounded-xl">
                <p className="text-3xl font-bold text-primary">25</p>
                <p className="text-sm text-muted-foreground mt-1">Events</p>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="members" className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-6">Members</h2>
            <div className="space-y-4">
              {members.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-smooth"
                >
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="gradient-bg text-white font-semibold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="p-4 border rounded-xl hover:border-primary transition-smooth"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          <Users className="inline h-4 w-4 mr-1" />
                          {event.attendees} attending
                        </p>
                      </div>
                    </div>
                    <Button className="gradient-bg">RSVP</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="posts" className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border">
            <h2 className="text-2xl font-bold mb-6">Community Posts</h2>
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 border rounded-xl hover:border-primary transition-smooth"
                >
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback className="gradient-bg text-white">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">{post.author}</p>
                      <p className="text-muted-foreground mb-3">{post.content}</p>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <button className="hover:text-primary">
                          ❤️ {post.likes} likes
                        </button>
                        <button className="hover:text-primary flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          {post.comments} comments
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

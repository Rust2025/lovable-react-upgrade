import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <div className="inline-block">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Welcome to InterestConnect
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover communities that match your interests and connect with like-minded people
        </p>
        <Link to="/communities">
          <Button size="lg" className="gradient-bg text-lg px-8 py-6">
            Explore Communities
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-8 border hover:border-primary transition-smooth text-center">
          <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Find Your Tribe</h3>
          <p className="text-muted-foreground">
            Connect with people who share your passions and interests
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border hover:border-primary transition-smooth text-center">
          <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Personalized Matches</h3>
          <p className="text-muted-foreground">
            Get community recommendations based on your interests
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border hover:border-primary transition-smooth text-center">
          <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">Grow Together</h3>
          <p className="text-muted-foreground">
            Learn, share, and grow with your community members
          </p>
        </div>
      </div>

      <section className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-3xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div>
            <p className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              10K+
            </p>
            <p className="text-muted-foreground font-semibold">Active Members</p>
          </div>
          <div>
            <p className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              500+
            </p>
            <p className="text-muted-foreground font-semibold">Communities</p>
          </div>
          <div>
            <p className="text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
              1000+
            </p>
            <p className="text-muted-foreground font-semibold">Events Hosted</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create your profile, select your interests, and start connecting with amazing communities today!
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/auth/register">
            <Button size="lg" className="gradient-bg">
              Create Account
            </Button>
          </Link>
          <Link to="/communities">
            <Button size="lg" variant="outline">
              Browse Communities
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

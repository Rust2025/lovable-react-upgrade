import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const categories = ["All", "Sports", "Technology", "Arts", "Music", "Food", "Travel", "Gaming"];

const interests = [
  { id: 1, name: "Football", emoji: "⚽", category: "Sports" },
  { id: 2, name: "Basketball", emoji: "🏀", category: "Sports" },
  { id: 3, name: "Coding", emoji: "💻", category: "Technology" },
  { id: 4, name: "AI/ML", emoji: "🤖", category: "Technology" },
  { id: 5, name: "Painting", emoji: "🎨", category: "Arts" },
  { id: 6, name: "Photography", emoji: "📷", category: "Arts" },
  { id: 7, name: "Guitar", emoji: "🎸", category: "Music" },
  { id: 8, name: "DJ", emoji: "🎧", category: "Music" },
  { id: 9, name: "Cooking", emoji: "👨‍🍳", category: "Food" },
  { id: 10, name: "Baking", emoji: "🍰", category: "Food" },
  { id: 11, name: "Hiking", emoji: "🥾", category: "Travel" },
  { id: 12, name: "Beach", emoji: "🏖️", category: "Travel" },
  { id: 13, name: "Video Games", emoji: "🎮", category: "Gaming" },
  { id: 14, name: "Chess", emoji: "♟️", category: "Gaming" },
];

export default function SelectInterests() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);

  const filteredInterests =
    selectedCategory === "All"
      ? interests
      : interests.filter((i) => i.category === selectedCategory);

  const toggleInterest = (id: number) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedInterests.length < 3) {
      toast({
        title: "Select at least 3 interests",
        description: "Please select at least 3 interests to continue",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Interests saved!",
      description: "Your profile is now complete",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-5">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Select Your Interests</h1>
          <p className="text-muted-foreground text-lg">
            Choose at least 3 interests to help us find the perfect communities for you
          </p>
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "gradient-bg shrink-0"
                  : "shrink-0"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {filteredInterests.map((interest) => (
            <button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`aspect-square rounded-2xl p-4 flex flex-col items-center justify-center transition-smooth relative ${
                selectedInterests.includes(interest.id)
                  ? "gradient-bg text-white scale-105 shadow-lg"
                  : "bg-muted hover:bg-muted/80 hover:scale-105"
              }`}
            >
              {selectedInterests.includes(interest.id) && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              )}
              <span className="text-4xl mb-2">{interest.emoji}</span>
              <span className="text-sm font-semibold text-center">
                {interest.name}
              </span>
            </button>
          ))}
        </div>

        <div className="text-center mb-6">
          <p className="text-primary font-semibold text-lg">
            {selectedInterests.length} interest{selectedInterests.length !== 1 ? "s" : ""} selected
            {selectedInterests.length >= 3 && " ✓"}
          </p>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full gradient-bg hover:opacity-90 py-6 text-lg"
          disabled={selectedInterests.length < 3}
        >
          Continue to Dashboard
        </Button>
      </div>
    </div>
  );
}

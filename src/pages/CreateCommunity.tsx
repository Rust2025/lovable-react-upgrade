import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const emojiOptions = ["💻", "🎨", "🎮", "🎵", "⚽", "📚", "✈️", "🍕", "💪", "📷"];

export default function CreateCommunity() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    icon: "💻",
    description: "",
    tags: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Implement actual community creation when Cloud is connected
    setTimeout(() => {
      toast({
        title: "Community Created!",
        description: "Your community has been created successfully",
      });
      navigate("/communities");
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <Link
        to="/communities"
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Communities
      </Link>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Create New Community</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Community Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter community name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Community Icon</Label>
            <div className="flex flex-wrap gap-3">
              {emojiOptions.map((emoji) => (
                <button
                  key={emoji}
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, icon: emoji }))
                  }
                  className={`w-16 h-16 text-3xl rounded-xl transition-smooth ${
                    formData.icon === emoji
                      ? "gradient-bg scale-110 shadow-lg"
                      : "bg-muted hover:bg-muted/80 hover:scale-105"
                  }`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your community..."
              value={formData.description}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              name="tags"
              placeholder="e.g., Technology, Coding, AI"
              value={formData.tags}
              onChange={handleChange}
              required
            />
            <p className="text-sm text-muted-foreground">
              Add tags to help people find your community
            </p>
          </div>

          <div className="bg-muted p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Preview</h3>
            <div className="bg-white border rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 gradient-bg rounded-xl flex items-center justify-center text-3xl">
                  {formData.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {formData.name || "Community Name"}
                  </h4>
                  <p className="text-sm text-muted-foreground">0 members</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {formData.description || "Community description..."}
              </p>
              <div className="flex flex-wrap gap-2">
                {formData.tags.split(",").map(
                  (tag, index) =>
                    tag.trim() && (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold"
                      >
                        {tag.trim()}
                      </span>
                    )
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/communities")}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 gradient-bg"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Community"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

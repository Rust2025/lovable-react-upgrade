import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    communityInvites: true,
    eventReminders: true,
    weeklyDigest: false,
  });

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Settings Saved",
        description: "Your preferences have been updated",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 border">
          <h2 className="text-xl font-bold mb-6">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="email-notif" className="font-semibold">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive updates via email
                </p>
              </div>
              <Switch
                id="email-notif"
                checked={settings.emailNotifications}
                onCheckedChange={() => handleToggle("emailNotifications")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="invites" className="font-semibold">
                  Community Invites
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get notified about community invitations
                </p>
              </div>
              <Switch
                id="invites"
                checked={settings.communityInvites}
                onCheckedChange={() => handleToggle("communityInvites")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="reminders" className="font-semibold">
                  Event Reminders
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive reminders for upcoming events
                </p>
              </div>
              <Switch
                id="reminders"
                checked={settings.eventReminders}
                onCheckedChange={() => handleToggle("eventReminders")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="digest" className="font-semibold">
                  Weekly Digest
                </Label>
                <p className="text-sm text-muted-foreground">
                  Get a weekly summary of community activity
                </p>
              </div>
              <Switch
                id="digest"
                checked={settings.weeklyDigest}
                onCheckedChange={() => handleToggle("weeklyDigest")}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border">
          <h2 className="text-xl font-bold mb-6">Security</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password</Label>
              <Input id="current-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password</Label>
              <Input id="new-password" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" placeholder="••••••••" />
            </div>
            <Button variant="outline" className="w-full">
              Update Password
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-destructive/50">
          <h2 className="text-xl font-bold mb-4 text-destructive">Danger Zone</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Permanently delete your account and all associated data
          </p>
          <Button variant="destructive">Delete Account</Button>
        </div>

        <Button
          onClick={handleSave}
          className="w-full gradient-bg"
          size="lg"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </div>
  );
}

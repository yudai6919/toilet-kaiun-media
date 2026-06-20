export type VoiceEntry = {
  id: string;
  name: string;
  content: string;
  mood: string;
  moodEmoji: string;
  moodLabel: string;
  createdAt: string;
};

export const VOICE_STORAGE_KEY = "totonoe-voices";

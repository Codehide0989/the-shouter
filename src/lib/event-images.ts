import coverTournament from "@/assets/cover-tournament.jpg";
import coverArtwork from "@/assets/cover-artwork.jpg";
import coverPicbattle from "@/assets/cover-picbattle.jpg";
import coverCommunity from "@/assets/cover-community.jpg";
import type { EventType } from "@/lib/mock-data";

export const EVENT_IMAGE: Record<EventType, string> = {
  tournament: coverTournament,
  artwork: coverArtwork,
  picbattle: coverPicbattle,
  community: coverCommunity,
};

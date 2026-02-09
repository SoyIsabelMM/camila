import { EntranceSplash } from '@/components/invitation/entrance-splash';
import { HeroSection } from '@/components/invitation/hero-section';
import { CountdownSection } from '@/components/invitation/countdown-section';
import { EventDetails } from '@/components/invitation/event-details';
import { VideoSection } from '@/components/invitation/video-section';
import { VenueSection } from '@/components/invitation/venue-section';
import { ItinerarySection } from '@/components/invitation/itinerary-section';
import { ParentsSection } from '@/components/invitation/parents-section';
import { FooterSection } from '@/components/invitation/footer-section';

export default function Page() {
  return (
    <EntranceSplash>
      <main className="min-h-screen">
        <HeroSection />
        <CountdownSection />
        <ParentsSection />
        <EventDetails />
        <VideoSection />
        <ItinerarySection />
        <VenueSection />
        <FooterSection />
      </main>
    </EntranceSplash>
  );
}

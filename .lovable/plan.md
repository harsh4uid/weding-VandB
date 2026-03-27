

# Varun & Bhawna — Sacred Wedding Invitation Website

## Design System
- **Colors**: Deep maroon (#6B0F1A), Gold (#D4AF37), Cream (#FFF5E1), Dark maroon (#3D0A0F)
- **Fonts**: Playfair Display (headings), Tiro Devanagari (Sanskrit), Inter (nav/body)
- **Aesthetic**: Royal Indian wedding card brought to life digitally

## Sections (Single-Page Scrolling Experience)

### 1. Sticky Navbar
- Maroon background, gold text, centered "Varun & Bhawna" in script font
- Nav links: Home, Ceremonies, Venue & Family, RSVP
- Gold underline hover animation
- Hamburger menu on mobile
- Decorative bow & arrow motifs via CSS/SVG

### 2. Ganesh Invocation Hero (Full-Screen)
- Deep maroon gradient with golden mandala pattern (CSS)
- Temple silhouette background created with CSS/SVG
- Large "श्री गणेशाय नमः" in gold Devanagari
- Sanskrit shloka below
- Animated glowing diya (CSS animation)
- Floating flower petals (canvas/CSS animation)
- "Begin the Journey" CTA button with gold gradient glow
- Zoom-in entrance animation

### 3. Save the Date
- Cream background with golden temple arch frame (CSS borders/SVG)
- "SAVE THE DATE" + "Sunday, 19 April 2026" in elegant gold typography
- Decorative lotus patterns and hanging diyas
- Scroll-triggered fade-in + scale animation

### 4. Invitation Message
- Light patterned background
- "With the blessings of Lord Ram, we cordially invite you to celebrate the divine union of Varun & Bhawna."
- Music toggle button (top-right, always visible) with shehnai icon
- Background audio: the uploaded MP3 file, plays on user interaction

### 5. Venue Details
- "VENUE DETAILS" heading with diya separator row
- Left: venue name "Rajendra Club, Rajender Nagar, Ghaziabad"
- Right: styled map card with location pin + "Get Directions" button (links to Google Maps)
- Hover elevation effect on card

### 6. Venue Image Gallery
- 3 decorative image placeholder cards in horizontal row
- Gold borders, rounded corners, zoom-on-hover effect
- Stacks vertically on mobile

### 7. Family Blessings
- Deep maroon background with ornate gold CSS border
- Centered blessing text about divine grace of Lord Ram
- Gold tree symbol (SVG/CSS)
- "The Gupta & Sharma Families"
- Fade-in scroll animation

### 8. Footer
- Dark maroon background
- "© 2024 Varun & Bhawna's Wedding. All rights reserved."

## Animations & Interactions
- Framer Motion for scroll-triggered section animations (fade-in, scale)
- CSS keyframe animations for diya flame, floating petals, glowing effects
- Smooth scroll navigation from navbar links
- Music toggle with the uploaded bhajan MP3

## Responsiveness
- Mobile-first: sections stack vertically
- Navbar collapses to hamburger menu
- Gallery stacks to single column
- Font sizes scale down appropriately

## File Structure
- `src/pages/Index.tsx` — main page composing all sections
- `src/components/wedding/` — Navbar, HeroSection, SaveTheDate, InvitationMessage, VenueSection, Gallery, FamilyBlessings, Footer, MusicToggle, FloatingPetals
- Audio file copied to public folder for playback


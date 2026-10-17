import type { Entry } from './site'

/** Facts come from each game's own README (Games/PresidentalDebate, Projects/Scale). Don't add claims that aren't there. */
export const games: Entry[] = [
  {
    title: 'Presidential Brawl',
    meta: 'Online platform fighter · 2–4 players',
    description:
      'A Smash-style fighter starring U.S. presidents. Join a room with a four-letter code or invite link, or practice offline against a CPU or a training dummy that shows hitboxes. George Washington is playable now while the core mechanics are tuned.',
    tech: ['TypeScript', 'Canvas', 'Node.js', 'WebSockets'],
    image: {
      src: '/images/presidential-brawl.webp',
      alt: 'Presidential Brawl title card with six cartoon presidents in front of the Capitol',
    },
    link: { label: 'Play at arena.travingn.dev', href: 'https://arena.travingn.dev/' },
  },
  {
    title: 'Scale Up',
    meta: 'Browser game · Nine lessons and a sandbox',
    description:
      'A hands-on course in backend architecture. Each lesson adds a piece, from load balancers and CDNs to caching, queues, and sharding, then has you keep the system running under real traffic while every request moves across the map.',
    tech: ['HTML', 'JavaScript', 'Canvas'],
    image: {
      src: '/images/scale-up.webp',
      alt: 'Scale Up title card with a diagram of users, a load balancer, app servers, a cache and a database',
    },
    link: { label: 'Play at backend.travingn.dev', href: 'https://backend.travingn.dev/' },
  },
]

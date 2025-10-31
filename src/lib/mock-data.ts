export interface Bouquet {
  id: string;
  name: string;
  price: number;
  description: string;
  composition: string[];
  illustration: string;
}
export const bouquets: Bouquet[] = [
  {
    id: '1',
    name: 'Sunset Peonies',
    price: 75.00,
    description: 'A vibrant arrangement that captures the warm glow of a summer sunset. Perfect for bringing warmth and joy to any room.',
    composition: ['Peonies', 'Ranunculus', 'Eucalyptus', 'Dusty Miller'],
    illustration: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#444" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 95 C 45 80, 45 70, 50 60" /><path d="M50 95 C 55 80, 55 70, 50 60" /><path d="M40 65 C 30 50, 35 35, 45 30" /><path d="M60 65 C 70 50, 65 35, 55 30" /><path d="M50 60 C 40 50, 45 40, 50 35" /><path d="M50 60 C 60 50, 55 40, 50 35" /><circle cx="50" cy="28" r="5" fill="#F5B7B1" /><circle cx="40" cy="35" r="7" fill="#FADBD8" /><circle cx="60" cy="35" r="7" fill="#FADBD8" /><circle cx="50" cy="45" r="8" fill="#F1948A" /></g></svg>`,
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    price: 68.50,
    description: 'Cool and calming, this bouquet evokes the serenity of the seaside with its palette of blues, whites, and soft greens.',
    composition: ['Hydrangeas', 'Delphiniums', 'White Roses', 'Sea Holly'],
    illustration: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#444" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 95 V 60" /><path d="M45 90 L 48 65" /><path d="M55 90 L 52 65" /><path d="M40 70 C 30 60, 35 45, 45 40" /><path d="M60 70 C 70 60, 65 45, 55 40" /><path d="M50 60 C 40 50, 45 40, 50 35" /><path d="M50 60 C 60 50, 55 40, 50 35" /><circle cx="50" cy="30" r="8" fill="#AED6F1" /><circle cx="42" cy="42" r="6" fill="#EBF5FB" /><circle cx="58" cy="42" r="6" fill="#EBF5FB" /><circle cx="50" cy="50" r="5" fill="#85C1E9" /></g></svg>`,
  },
  {
    id: '3',
    name: 'Wild Meadow',
    price: 82.00,
    description: 'A whimsical and free-spirited arrangement, reminiscent of a walk through a blooming wildflower meadow.',
    composition: ['Daisies', 'Lavender', 'Queen Anne\'s Lace', 'Feverfew'],
    illustration: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#444" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 95 V 50" /><path d="M45 90 L 40 55" /><path d="M55 90 L 60 55" /><path d="M40 55 C 35 45, 38 35, 42 30" /><path d="M60 55 C 65 45, 62 35, 58 30" /><path d="M50 50 C 45 40, 48 30, 50 25" /><circle cx="50" cy="22" r="3" fill="#F9E79F" /><circle cx="42" cy="27" r="3" fill="#F9E79F" /><circle cx="58" cy="27" r="3" fill="#F9E79F" /><path d="M50 25 L 50 20" /><path d="M42 30 L 38 26" /><path d="M58 30 L 62 26" /><circle cx="50" cy="40" r="5" fill="#D7BDE2" /></g></svg>`,
  },
  {
    id: '4',
    name: 'Golden Hour',
    price: 95.00,
    description: 'Rich with golden hues and deep textures, this bouquet is perfect for celebrating life\'s most precious moments.',
    composition: ['Sunflowers', 'Solidago', 'Craspedia', 'Yarrow'],
    illustration: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="#444" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M50 95 V 60" /><path d="M45 85 L 48 62" /><path d="M55 85 L 52 62" /><circle cx="50" cy="45" r="15" fill="#F7DC6F" /><circle cx="50" cy="45" r="5" fill="#AF601A" /><path d="M50 30 L 50 20" /><path d="M50 60 L 50 70" /><path d="M35 45 L 25 45" /><path d="M65 45 L 75 45" /><path d="M39 34 L 32 27" /><path d="M61 56 L 68 63" /><path d="M39 56 L 32 63" /><path d="M61 34 L 68 27" /></g></svg>`,
  },
];
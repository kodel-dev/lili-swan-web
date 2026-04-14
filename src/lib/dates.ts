// src/lib/dates.ts

export const IMPORTANT_DATES = {
  startDate: new Date('2026-04-08T00:00:00'), // Hari jadian
  liliBirthday: new Date('2003-06-21T00:00:00'), // Ulang tahun Lili
  nextBirthday: new Date(new Date().getFullYear(), 5, 21), // Ulang tahun berikutnya (Juni = 5 dalam JS)
  timelineEvents: {
    crisisBlock: new Date('2026-03-28T00:00:00'),
    unblock: new Date('2026-03-29T00:00:00'),
    gettingCloser: new Date('2026-04-01T00:00:00'),
    official: new Date('2026-04-08T00:00:00'),
  }
};

export function calculateDaysTogether(): { days: number; hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const diff = now.getTime() - IMPORTANT_DATES.startDate.getTime();
  
  if (diff < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export function calculateDaysUntilBirthday(): number {
  const now = new Date();
  let nextBirthday = new Date(now.getFullYear(), 5, 21); // Juni = 5
  
  if (now > nextBirthday) {
    nextBirthday = new Date(now.getFullYear() + 1, 5, 21);
  }
  
  const diff = nextBirthday.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function calculateAge(): number {
  const now = new Date();
  const birthDate = IMPORTANT_DATES.liliBirthday;
  let age = now.getFullYear() - birthDate.getFullYear();
  const monthDiff = now.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

export function formatDate(date: Date): string {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateShort(date: Date): string {
  return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString().slice(-2)}`;
}

export function getZodiacSign(date: Date): { sign: string; symbol: string; element: string } {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return { sign: 'Cancer', symbol: '♋', element: 'Air' };
  }
  
  return { sign: 'Unknown', symbol: '?', element: 'Unknown' };
}
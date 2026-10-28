export const site = {
  name: 'Cedar Grove Community Church',
  short: 'Cedar Grove',
  phone: '(555) 010-0188',
  email: 'hello@cedargrove.example',
  address: '210 Elm Street, Cedar Grove',
  office: 'Tuesday to Friday, 9 a.m. to 3 p.m.',
};
export const nav = [
  { href: '/visit', label: 'Plan a visit' },
  { href: '/sermons', label: 'Sermons' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/give', label: 'Give' },
  { href: '/search', label: 'Search' },
];
export const services = [
  { day: 'Sunday', time: '9:00 a.m.', what: 'Worship, with a quiet reading and plain-spoken talk' },
  { day: 'Sunday', time: '10:45 a.m.', what: 'Worship, with more singing and a children’s time' },
  { day: 'Wednesday', time: '7:00 p.m.', what: 'Midweek prayer in the chapel' },
];
export const events = [
  { date: '2026-11-01', title: 'All Saints Sunday remembrance', time: '10:45 a.m.', place: 'Sanctuary', note: 'We read the names of church members who died this year. Visitors are welcome.' },
  { date: '2026-11-05', title: 'Food pantry', time: '4:00 to 6:00 p.m.', place: 'Fellowship hall', note: 'Open to everyone. No sign-up needed.' },
  { date: '2026-11-08', title: 'Community potluck', time: '12:15 p.m.', place: 'Fellowship hall', note: 'Bring a dish to share or just come hungry.' },
  { date: '2026-11-13', title: 'Youth fall retreat', time: 'Friday to Sunday', place: 'Off site', note: 'Grades 7 to 12. Forms due November 6.' },
  { date: '2026-11-22', title: 'Choir Sunday', time: '10:45 a.m.', place: 'Sanctuary', note: 'The choir sings, and everyone is invited to sing along.' },
  { date: '2026-11-25', title: 'Thanksgiving Eve gathering', time: '7:00 p.m.', place: 'Chapel', note: 'A short evening of thanks, songs and silence.' },
];
export const fmt = (d: Date | string, opts: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }) =>
  (typeof d === 'string' ? new Date(d + 'T12:00:00') : d).toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });
export const iso = (d: Date) => d.toISOString().slice(0, 10);

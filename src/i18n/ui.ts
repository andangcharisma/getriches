export const locales = ['en', 'id'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
	id: {
		navApp: 'Aplikasi',
		navBlog: 'Blog',
		getApp: 'Unduh aplikasi',
		tagline: 'Money management',
		h1a: 'Atur uang.',
		h1b: 'Raih kekayaan.',
		sub: 'Riches membantu kamu mencatat pengeluaran, mengatur anggaran, dan mencapai target tabungan — semua dalam satu aplikasi.',
		start: 'Mulai gratis',
		readDev: 'Baca update dev',
		balance: 'Total saldo',
		balanceAmount: 'Rp 12.480.000',
		budgetAmount: 'Rp 3.2 jt',
		budgetLeft: 'Sisa anggaran bulan ini',
		tx: [
			['Kopi & sarapan', '−Rp 38.000'],
			['Gaji Oktober', '+Rp 9.500.000'],
			['Transportasi', '−Rp 64.000'],
		],
		featTitle: 'Semua yang kamu butuhkan',
		features: [
			{ icon: 'track', kicker: 'Catat', title: 'Pencatatan cepat', body: 'Tambah transaksi dalam dua ketukan, lengkap dengan kategori otomatis.' },
			{ icon: 'budget', kicker: 'Anggaran', title: 'Batas yang jelas', body: 'Tetapkan anggaran per kategori dan lihat sisanya secara real-time.' },
			{ icon: 'goals', kicker: 'Target', title: 'Tabungan terarah', body: 'Buat target, pantau progres, dan rayakan setiap pencapaian.' },
		],
		ctaTitle: 'Siap mulai atur uangmu?',
		ctaSub: 'Gratis. Tanpa kartu kredit.',
		blogTag: 'Blog pengembangan',
		blogTitle: 'Kabar dari dapur Riches',
		blogSub: 'Progres development, fitur baru, dan cerita di balik layar.',
		back: '← Semua artikel',
		feedback: 'Punya saran fitur? Kirim ke hello@riches.app',
		rights: '© 2026 Riches. Semua hak dilindungi.',
		siteDescription: 'Riches membantu kamu mencatat pengeluaran, mengatur anggaran, dan mencapai target tabungan.',
	},
	en: {
		navApp: 'App',
		navBlog: 'Blog',
		getApp: 'Get the app',
		tagline: 'Money management',
		h1a: 'Master money.',
		h1b: 'Get rich.',
		sub: 'Riches helps you track spending, set budgets, and hit savings goals — all in one app.',
		start: 'Start free',
		readDev: 'Read dev updates',
		balance: 'Total balance',
		balanceAmount: '$4,280.50',
		budgetAmount: '$320',
		budgetLeft: 'Budget left this month',
		tx: [
			['Coffee & breakfast', '−$6.50'],
			['October salary', '+$3,200.00'],
			['Transport', '−$12.40'],
		],
		featTitle: 'Everything you need',
		features: [
			{ icon: 'track', kicker: 'Track', title: 'Fast logging', body: 'Add a transaction in two taps, with automatic categories.' },
			{ icon: 'budget', kicker: 'Budget', title: 'Clear limits', body: 'Set a budget per category and see what is left in real time.' },
			{ icon: 'goals', kicker: 'Goals', title: 'Focused saving', body: 'Create goals, track progress, and celebrate every milestone.' },
		],
		ctaTitle: 'Ready to take control?',
		ctaSub: 'Free. No credit card.',
		blogTag: 'Development blog',
		blogTitle: 'News from the Riches kitchen',
		blogSub: 'Development progress, new features, and behind-the-scenes stories.',
		back: '← All posts',
		feedback: 'Have a feature idea? Email hello@riches.app',
		rights: '© 2026 Riches. All rights reserved.',
		siteDescription: 'Riches helps you track spending, set budgets, and hit savings goals.',
	},
} as const;

export const dateLocale: Record<Locale, string> = { id: 'id-ID', en: 'en-US' };

export function formatDate(date: Date, lang: Locale) {
	return date.toLocaleDateString(dateLocale[lang], { day: 'numeric', month: 'short', year: 'numeric' });
}

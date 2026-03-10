import { getPortfolio, getUi, type Locale } from '~/data/portfolio'

const LOCALE_KEY = 'portfolio-locale'

export type { Locale }

export function usePortfolioLocale() {
  const cookie = useCookie<Locale>(LOCALE_KEY, {
    default: () => 'pt-BR',
    maxAge: 60 * 60 * 24 * 365
  })

  const locale = useState<Locale>('portfolio-locale', () => cookie.value ?? 'pt-BR')

  const setLocale = (value: Locale) => {
    locale.value = value
    cookie.value = value
    if (import.meta.client) {
      document.documentElement.lang = value === 'pt-BR' ? 'pt-BR' : 'en'
    }
  }

  const portfolio = computed(() => getPortfolio(locale.value))
  const ui = computed(() => getUi(locale.value))

  return { locale, setLocale, portfolio, ui }
}

import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { SectionHeading } from './components/SectionHeading'
import homePreview from './assets/Home5.svg'
import pouchLogo from './assets/Group 2072.svg'
import sparklesIcon from './assets/Sparkles.svg'
import refreshIcon from './assets/Refresh.svg'
import coinWalletIcon from './assets/Coin Wallet.svg'
import walletFeatureIcon from './assets/Wallet.svg'
import moneyBagFrancFeatureIcon from './assets/Money Bag Franc.svg'
import sampleRateFeatureIcon from './assets/Sample Rate.svg'
import hotPriceFeatureIcon from './assets/Hot Price.svg'
import userGroupsFeatureIcon from './assets/User Groups.svg'
import sortingArrowsFeatureIcon from './assets/Sorting Arrows Horizontal.svg'
import checkLockFeatureIcon from './assets/Check Lock.svg'
import timeSpanFeatureIcon from './assets/Time Span.svg'
import handshakeFeatureIcon from './assets/Handshake.svg'
import earthPlanetIcon from './assets/Earth Planet.svg'
import securityLockIcon from './assets/Security Lock.svg'
import increaseIcon from './assets/Increase.svg'
import ellipse107Icon from './assets/Ellipse 107.svg'
import ellipse108Icon from './assets/Ellipse 108.svg'
import ellipse109Icon from './assets/Ellipse 109.svg'
import googlePlayIcon from './assets/Google Play.svg'
import appleIncIcon from './assets/Apple Inc.svg'

const featureItems = [
  { icon: walletFeatureIcon, title: 'Instant Swap (Pouch Liquidity)', subtitle: 'Pouch provides its own liquidity pool' },
  { icon: moneyBagFrancFeatureIcon, title: 'Automatic Swap Engine', subtitle: 'Swap completes only when both sides are fulfilled' },
  { icon: sampleRateFeatureIcon, title: 'Auto-Rate Optimizer', subtitle: 'Automatically selects the best available rate' },
  { icon: hotPriceFeatureIcon, title: 'Scheduled / Future Swap', subtitle: 'Users lock in a rate for a later time' },
  { icon: userGroupsFeatureIcon, title: 'User-Created Swap Marketplace (P2P)', subtitle: 'Offers created by users, while Pouch ensures safety and execution.' },
  { icon: sortingArrowsFeatureIcon, title: 'Partial Swap Matching', subtitle: 'Large offers can be filled by multiple users' },
  { icon: checkLockFeatureIcon, title: 'Escrow-Protected Swaps', subtitle: 'Funds locked during the swap' },
  { icon: timeSpanFeatureIcon, title: 'Offer Expiry & Auto-Cancel', subtitle: 'Time-limited swap offers' },
  { icon: handshakeFeatureIcon, title: 'Reputation & Trust Score', subtitle: 'Users earn ratings from completed swaps' },
]

const movementItems = [
  { icon: sparklesIcon, title: 'Blazing Swaps', subtitle: 'Fast, seamless global currency moves' },
  { icon: moneyBagFrancFeatureIcon, title: 'Multiple Funding Options', subtitle: 'Cards, bank transfer, and local rails where available' },
  { icon: increaseIcon, title: 'Competitive Rates', subtitle: 'Transparent pricing with real-time rate discovery' },
  { icon: hotPriceFeatureIcon, title: 'Marketplace Offers', subtitle: 'Create custom offers and negotiate securely in-app' },
  { icon: securityLockIcon, title: 'Best-practice Security', subtitle: 'Encryption in transit and at rest, plus device binding.' },
  { icon: earthPlanetIcon, title: 'Global Reach', subtitle: 'Send and receive across multiple countries' },
]

const howItWorksItems = [
  { step: '1', title: 'Create an account', subtitle: 'Sign up in minutes with phone number and ID.' },
  { step: '2', title: 'Add funds', subtitle: 'Top up with card or local bank transfer.' },
  { step: '3', title: 'Swap & withdraw', subtitle: 'Convert instantly and send to bank or wallet.' },
]

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text) transition-colors">
      <section className="mx-auto bg-(--color-surface-muted) pb-8 pt-4 px-4 sm:px-6 lg:px-10">
        <header className="mx-auto w-full">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-(--color-primary) dark:text-white font-semibold">
              <img src={pouchLogo} alt="Pouch logo" className="h-9 w-auto" />
              POUCH
            </div>
            <div className="hidden items-center gap-10 rounded-full border border-(--color-border) bg-(--color-surface) px-10 py-3 shadow-sm md:flex">
              <a href="#features" className="text-sm md:texet-lg font-normal text-(--color-text)">Features</a>
              <a href="#how-it-works" className="text-sm md:texet-lg font-normal text-(--color-text)">How it works</a>
              <a href="#" className="text-sm md:texet-lg font-normal text-(--color-text)">Security</a>
              <a href="#" className="text-sm md:texet-lg font-normal text-(--color-text)">Support</a>
              <button className="rounded-full bg-(--color-primary) px-6 py-2 text-sm text-white">Download</button>
            </div>
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="relative inline-flex h-9 w-16 items-center rounded-full border border-(--color-border) bg-(--color-surface) px-1"
              aria-label="Toggle color mode"
            >
              <span className="pointer-events-none absolute left-2 text-amber-400">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M10 1.5l1.3 2.6 2.9.4-2.1 2 0.5 2.9L10 8.1 7.4 9.4l0.5-2.9-2.1-2 2.9-.4L10 1.5z"/></svg>
              </span>
              <span className="pointer-events-none absolute right-2 text-slate-500">
                <svg viewBox="0 0 20 20" className="h-4 w-4 fill-current"><path d="M13.7 2.3a7.5 7.5 0 10.1 15 8 8 0 01-.1-15z"/></svg>
              </span>
              <span className={`h-7 w-7 rounded-full bg-(--color-primary) transition-transform ${isDark ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
          </nav>
        </header>

        <section className="mx-auto max-w-7xl grid w-full items-center gap-10 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-(--color-surface) px-12 py-3 text-sm md:text-[18px] font-normal text-(--color-primary) dark:text-white shadow-sm">
              <img src={sparklesIcon} alt="" aria-hidden="true" className="h-4 md:h-8 w-4 md:w-8" />
              Fast, secure, and simple
            </p>
            <h1 className="max-w-sm text-[30px] md:text-[45px] font-medium leading-tight text-(--color-primary) dark:text-white">Money Without <br /> Borders.</h1>
            <p className="text-sm md:text-[18px] font-normal text-(--color-text)">Swap and send money at great rates - all in a few taps.</p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="space-y-6">
                <button className="inline-flex items-center gap-2 rounded-full bg-(--color-primary-soft) px-9 py-3 text-sm md:text-[18px] font-normal text-(--color-text)">
                  <img src={refreshIcon} alt="" aria-hidden="true" className="h-5 w-5" />
                  Swap Now!
                </button>
                <p className='text-xs md:text-sm flex gap-1 items-center'>
                  <img src={securityLockIcon} alt="" aria-hidden="true" className="h-3 w-3" />
                  Bank-level security
                </p>
              </div>
              <div className="space-y-6">
                <button className="inline-flex items-center gap-2 rounded-full border border-(--color-primary) dark:border-white px-9 py-3 text-sm md:text-[18px] font-normal text-(--color-primary) dark:text-white">
                  <img src={coinWalletIcon} alt="" aria-hidden="true" className="h-5 w-5" />
                  Add Funds
                </button>
                <p className='text-xs md:text-sm flex gap-1 items-center'>
                  <img src={earthPlanetIcon} alt="" aria-hidden="true" className="h-3 w-3" />
                  10+ countries</p>
              </div>
            </div>
            <div className="flex gap-6 text-xs text-black/80">
              
            </div>
          </div>
          <div className="mx-auto w-full max-w-75">
            <img src={homePreview} alt="Pouch app dashboard preview" className="w-full" />
          </div>
        </section>
      </section>

      <main>
        <section id="features" className="mx-auto w-full bg-(--color-bg) pb-16">
          <SectionHeading
            title="Pouch Native Swapping Systems features"
            subtitle="These are native, platform-managed swap systems maintained by Pouch to guarantee liquidity availability, execution speed, and transaction security."
          />
          <div className="mx-6 xl:mx-auto mt-16 grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full bg-(--color-bg) pb-16">
          <SectionHeading title="Built for global money movement." subtitle="Your all-in-one solution for global money management." />
          <div className="mx-6 xl:mx-auto mt-16 grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
            {movementItems.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto w-full bg-(--color-bg) pb-16">
          <SectionHeading title="How it works" subtitle="Get started in three simple steps" />
          <div className="mx-6 xl:mx-auto mt-16 grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-3">
            {howItWorksItems.map((item) => (
              <article
                key={item.step}
                className="rounded-[30px] border border-(--color-border) bg-(--color-surface) p-8 shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-(--color-primary) text-xs font-semibold text-white">{item.step}</div>
                <h3 className="text-[18px] font-normal text-(--color-text)">{item.title}</h3>
                <p className="mt-2 max-w-57.5 text-[12px] font-normal text-(--color-text-muted)">{item.subtitle}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-7xl rounded-4xl bg-(--color-surface-muted) px-6 py-8 text-center sm:px-10">
            <div className="mx-auto mb-3 grid place-items-center">
              <img src={securityLockIcon} alt="" aria-hidden="true" className="h-12 w-12" />
            </div>
            <h3 className="text-[28px] md:text-[40px] font-normal text-(--color-text)">Security you can trust</h3>
            <p className="mx-auto mt-3 max-w-3xl text-xs md:text-base text-(--color-text-muted)">
              2-factor authentication, device binding, anomaly detection, and industry-standard encryption keep your account safe.
            </p>
            <div className="mt-7 flex justify-around items-center">
              <p className="w-fit flex items-center gap-4 rounded-full bg-(--color-pill) px-4 md:px-8 py-2 text-xs text-white">
                <img src={sparklesIcon} alt="" aria-hidden="true" className="h-4 w-4" />
                PCI-DSS aligned
              </p>
              <p className="w-fit flex items-center gap-4 rounded-full bg-(--color-pill) px-4 md:px-8 py-2 text-xs text-white">
                <img src={sparklesIcon} alt="" aria-hidden="true" className="h-4 w-4" />
                GDPR ready
              </p>
              <p className="w-fit flex items-center gap-4 rounded-full bg-(--color-pill) px-4 md:px-8 py-2 text-xs text-white">
                <img src={sparklesIcon} alt="" aria-hidden="true" className="h-4 w-4" />
                ISO 27001
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full bg-(--color-bg) px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[40px] font-semibold text-(--color-text)">Get the Pouch app</h2>
            <p className="mt-4 text-[16px] text-(--color-text-muted)">Download for iOS and Android, or continue on the web</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              <button className="flex min-w-62.5 items-center justify-center gap-3 rounded-full bg-black px-7 py-3 text-left text-white">
                <img src={appleIncIcon} alt="" aria-hidden="true" className="h-6 w-6" />
                <span className="text-sm leading-tight">
                  <span className="block text-xs">Download iOS</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </span>
              </button>
              <button className="flex min-w-62.5 items-center justify-center gap-3 rounded-full bg-black px-7 py-3 text-left text-white">
                <img src={googlePlayIcon} alt="" aria-hidden="true" className="h-6 w-6" />
                <span className="text-sm leading-tight">
                  <span className="block text-xs">Get it on</span>
                  <span className="block text-lg font-semibold">Google Play</span>
                </span>
              </button>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              <div>
                <p className="text-2xl font-semibold text-(--color-primary)">10+</p>
                <p className="text-xl text-(--color-text)">Supported</p>
                <p className="text-sm text-(--color-text-muted)">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-(--color-primary)">10</p>
                <p className="text-xl text-(--color-text)">Seconds</p>
                <p className="text-sm text-(--color-text-muted)">Avg. swap time</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-(--color-primary)">100k+</p>
                <p className="text-xl text-(--color-text)">Pouch Users</p>
                <p className="text-sm text-(--color-text-muted)">Active users</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-(--color-primary)">99.95%</p>
                <p className="text-xl text-(--color-text)">Pouch</p>
                <p className="text-sm text-(--color-text-muted)">Uptime</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-(--color-surface-muted) py-12">
        <div className="mx-auto grid w-full gap-10 px-4 sm:px-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
          <div className='col-span-2'>
            <div className="mb-3 flex items-center gap-3 text-(--color-primary) dark:text-white font-semibold">
              <img src={pouchLogo} alt="Pouch logo" className="h-9 w-auto" />
              POUCH
            </div>
            <p className="max-w-sm text-[12px] text-(--color-text-muted)">Smart digital wallet for global money exchange, transfers and secure payments.</p>
            <div className="mt-3 space-y-1 text-[12px] text-(--color-text-muted)">
              <p>Location: Lagos, Nigeria</p>
              <p>Email: support@pouch.app</p>
            </div>
            <p className="mt-3 text-[12px] text-(--color-text-muted)">Privacy - Terms</p>
            <p className="mt-5 text-[10px] text-(--color-text-muted)">(c) 2025 Pouch. All rights reserved.</p>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold uppercase text-(--color-text)">Product</p>
            <div className="space-y-2 text-[12px] text-(--color-text-muted)"><p>Wallet</p><p>Exchange</p><p>Send Money</p><p>Receive</p></div>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold uppercase text-(--color-text)">Company</p>
            <div className="space-y-2 text-[12px] text-(--color-text-muted)"><p>About Us</p><p>Security</p><p>Blog</p></div>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold text-(--color-text)">Resources</p>
            <div className="space-y-2 text-[12px] text-(--color-text-muted)"><p>Help Center</p><p>FAQs</p><p>Terms</p><p>AML & KYC</p></div>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold uppercase text-(--color-text)">APP & SOCIAL</p>
            <div className="space-y-2 text-[12px] text-(--color-text-muted)"><p>App Store</p><p>Play Store</p></div>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <img src={ellipse107Icon} alt="" aria-hidden="true" className="h-4 w-4" />
              <img src={ellipse108Icon} alt="" aria-hidden="true" className="h-4 w-4" />
              <img src={ellipse109Icon} alt="" aria-hidden="true" className="h-4 w-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

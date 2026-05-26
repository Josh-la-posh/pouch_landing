import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { SectionHeading } from './components/SectionHeading'
import homePreview from './assets/Home5.svg'

const featureItems = [
  { icon: 'wallet', title: 'Instant Swap (Pouch Liquidity)', subtitle: 'Pouch provides its own liquidity pool' },
  { icon: 'wallet', title: 'Automatic Swap Engine', subtitle: 'Swap completes only when both sides are fulfilled' },
  { icon: 'rates', title: 'Auto-Rate Optimizer', subtitle: 'Automatically selects the best available rate' },
  { icon: 'percent', title: 'Scheduled / Future Swap', subtitle: 'Users lock in a rate for a later time' },
  { icon: 'users', title: 'User-Created Swap Marketplace (P2P)', subtitle: 'Offers created by users, while Pouch ensures safety and execution.' },
  { icon: 'arrows', title: 'Partial Swap Matching', subtitle: 'Large offers can be filled by multiple users' },
  { icon: 'lock', title: 'Escrow-Protected Swaps', subtitle: 'Funds locked during the swap' },
  { icon: 'clock', title: 'Offer Expiry & Auto-Cancel', subtitle: 'Time-limited swap offers' },
  { icon: 'shield', title: 'Reputation & Trust Score', subtitle: 'Users earn ratings from completed swaps' },
]

const movementItems = [
  { icon: 'spark', title: 'Blazing Swaps', subtitle: 'Fast, seamless global currency moves' },
  { icon: 'wallet', title: 'Multiple Funding Options', subtitle: 'Cards, bank transfer, and local rails where available' },
  { icon: 'rates', title: 'Competitive Rates', subtitle: 'Transparent pricing with real-time rate discovery' },
  { icon: 'percent', title: 'Marketplace Offers', subtitle: 'Create custom offers and negotiate securely in-app' },
  { icon: 'shield', title: 'Best-practice Security', subtitle: 'Encryption in transit and at rest, plus device binding.' },
  { icon: 'clock', title: 'Global Reach', subtitle: 'Send and receive across multiple countries' },
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
    <div className="min-h-screen bg-[#1f4b82] px-3 py-3 text-black transition-colors dark:bg-slate-950 dark:text-white">
      <section className="mx-auto max-w-7xl bg-[#efebf3] px-4 pb-8 pt-4 sm:px-6 lg:px-10">
        <header className="mx-auto w-full max-w-6xl">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-semibold text-violet-800">P</div>
              <p className="text-3xl font-semibold text-violet-900">Pouch</p>
            </div>
            <div className="hidden items-center gap-10 rounded-full border border-black/10 bg-white px-10 py-3 shadow-sm md:flex">
              <a href="#features" className="text-sm text-black/80">Features</a>
              <a href="#how-it-works" className="text-sm text-black/80">How it works</a>
              <a href="#" className="text-sm text-black/80">Security</a>
              <a href="#" className="text-sm text-black/80">Support</a>
              <button className="rounded-full bg-violet-900 px-6 py-2 text-sm text-white">Download</button>
            </div>
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="grid h-9 w-9 place-items-center rounded-full bg-white px-2 text-[10px]"
              aria-label="Toggle color mode"
            >
              {isDark ? 'LIGHT' : 'DARK'}
            </button>
          </nav>
        </header>

        <section className="mx-auto grid w-full max-w-6xl items-center gap-10 py-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm text-violet-800 shadow-sm">Fast, secure, and simple</p>
            <h1 className="max-w-sm text-[40px] font-semibold leading-tight text-violet-900">Money Without Borders.</h1>
            <p className="max-w-md text-[16px] font-normal text-black/80">Swap and send money at great rates all in a few taps.</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-violet-400 px-7 py-3 text-base font-medium text-violet-950">Swap Now!</button>
              <button className="rounded-full border border-violet-500 px-7 py-3 text-base font-medium text-violet-700">Add Funds</button>
            </div>
            <div className="flex gap-6 text-xs text-black/80">
              <p>Bank-level security</p>
              <p>10+ countries</p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[300px]">
            <img src={homePreview} alt="Pouch app dashboard preview" className="w-full" />
          </div>
        </section>
      </section>

      <main>
        <section id="features" className="mx-auto w-full max-w-7xl bg-[#f3f2f5] px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pouch Native Swapping Systems features"
            subtitle="These are native, platform-managed swap systems maintained by Pouch to guarantee liquidity availability, execution speed, and transaction security."
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl bg-[#efedf2] px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading title="Built for global money movement." subtitle="Your all-in-one solution for global money management." />
          <div className="mx-auto mt-12 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {movementItems.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} subtitle={item.subtitle} />
            ))}
          </div>
        </section>

        <section id="how-it-works" className="mx-auto w-full max-w-7xl bg-[#f3f2f5] px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading title="How it works" subtitle="Get started in three simple steps" />
          <div className="mx-auto mt-10 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {howItWorksItems.map((item) => (
              <article
                key={item.step}
                className="rounded-[30px] border border-[#dfdce4] bg-[#f8f8f8] p-8 shadow-[0_2px_6px_rgba(0,0,0,0.04)] dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-violet-700 text-xs font-semibold text-white">{item.step}</div>
                <h3 className="text-[18px] font-normal text-black dark:text-white">{item.title}</h3>
                <p className="mt-2 max-w-[230px] text-[12px] font-normal text-black/70 dark:text-white/70">{item.subtitle}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-6xl rounded-[32px] bg-[#ddd5e2] px-6 py-8 text-center sm:px-10">
            <div className="mx-auto mb-3 grid h-8 w-8 place-items-center rounded-full bg-violet-700 text-sm font-semibold text-white">S</div>
            <h3 className="text-[40px] font-normal text-black">Security you can trust</h3>
            <p className="mx-auto mt-3 max-w-3xl text-[16px] text-black/80">
              2-factor authentication, device binding, anomaly detection, and industry-standard encryption keep your account safe.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <span className="rounded-full bg-violet-900 px-8 py-2 text-xs text-white">PCI-DSS aligned</span>
              <span className="rounded-full bg-violet-900 px-8 py-2 text-xs text-white">GDPR ready</span>
              <span className="rounded-full bg-violet-900 px-8 py-2 text-xs text-white">ISO 27001</span>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl bg-[#f3f2f5] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-[40px] font-semibold text-black">Get the Pouch app</h2>
            <p className="mt-4 text-[16px] text-black/80">Download for iOS and Android, or continue on the web</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              <button className="flex min-w-[250px] items-center justify-center gap-3 rounded-full bg-black px-7 py-3 text-left text-white">
                <span className="text-sm leading-tight">
                  <span className="block text-xs">Download iOS</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </span>
              </button>
              <button className="flex min-w-[250px] items-center justify-center gap-3 rounded-full bg-black px-7 py-3 text-left text-white">
                <span className="text-sm leading-tight">
                  <span className="block text-xs">Get it on</span>
                  <span className="block text-lg font-semibold">Google Play</span>
                </span>
              </button>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              <div>
                <p className="text-2xl font-semibold text-violet-800">10+</p>
                <p className="text-xl text-black">Supported</p>
                <p className="text-sm text-black/80">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-violet-800">10</p>
                <p className="text-xl text-black">Seconds</p>
                <p className="text-sm text-black/80">Avg. swap time</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-violet-800">100k+</p>
                <p className="text-xl text-black">Pouch Users</p>
                <p className="text-sm text-black/80">Active users</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-violet-800">99.95%</p>
                <p className="text-xl text-black">Pouch</p>
                <p className="text-sm text-black/80">Uptime</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#e8e8ea] py-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-semibold text-violet-800">P</div>
              <p className="text-3xl font-semibold text-violet-900">POUCH</p>
            </div>
            <p className="max-w-sm text-[12px] text-black/85">Smart digital wallet for global money exchange, transfers and secure payments.</p>
            <div className="mt-3 space-y-1 text-[12px] text-black/80">
              <p>Location: Lagos, Nigeria</p>
              <p>Email: support@pouch.app</p>
            </div>
            <p className="mt-3 text-[12px] text-black/80">Privacy - Terms</p>
            <p className="mt-5 text-[10px] text-black/70">(c) 2025 Pouch. All rights reserved.</p>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold uppercase text-black">Product</p>
            <div className="space-y-2 text-[12px] text-black/85"><p>Wallet</p><p>Exchange</p><p>Send Money</p><p>Receive</p></div>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold uppercase text-black">Company</p>
            <div className="space-y-2 text-[12px] text-black/85"><p>About Us</p><p>Security</p><p>Blog</p></div>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold text-black">Resources</p>
            <div className="space-y-2 text-[12px] text-black/85"><p>Help Center</p><p>FAQs</p><p>Terms</p><p>AML & KYC</p></div>
          </div>

          <div>
            <p className="mb-3 text-[14px] font-semibold uppercase text-black">APP & SOCIAL</p>
            <div className="space-y-2 text-[12px] text-black/85"><p>App Store</p><p>Play Store</p></div>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-pink-500 text-[10px] text-white">I</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-500 text-[10px] text-white">F</span>
              <span className="grid h-5 w-5 place-items-center rounded-full bg-black text-[10px] text-white">X</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

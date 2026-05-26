const iconStyles = 'h-5 w-5 text-violet-700 dark:text-violet-300'

function CardIcon({ icon }) {
  if (icon === 'spark') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" fill="currentColor" />
      </svg>
    )
  }
  if (icon === 'wallet') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="12" r="1.5" fill="currentColor" />
      </svg>
    )
  }
  if (icon === 'rates') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <path d="M4 16l4-4 3 3 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 9h3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'percent') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M6 18L18 6" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (icon === 'users') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M4.5 17c.7-2 2.2-3 3.5-3h8c1.3 0 2.8 1 3.5 3" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (icon === 'arrows') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <path d="M4 8h14m0 0l-3-3m3 3l-3 3M20 16H6m0 0l3-3m-3 3l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'lock') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 10V8a4 4 0 118 0v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  if (icon === 'clock') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
  if (icon === 'shield') {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={iconStyles}>
        <path d="M12 3l7 3v5c0 4.5-3.2 8-7 10-3.8-2-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  }
  return <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">•</span>
}

export function Card({ icon, title, subtitle }) {
  return (
    <article className="rounded-[30px] border border-[#dfdce4] bg-[#f8f8f8] p-8 shadow-[0_2px_6px_rgba(0,0,0,0.04)] dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-lg text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
        <CardIcon icon={icon} />
      </div>
      <h3 className="text-[18px] font-normal text-black dark:text-white">{title}</h3>
      <p className="mt-2 max-w-[220px] text-[12px] font-normal text-black/70 dark:text-white/70">{subtitle}</p>
    </article>
  )
}

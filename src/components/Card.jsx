
export function Card({ icon, title, subtitle }) {
  return (
    <article className="rounded-[40px] border border-(--color-border) bg-(--color-surface) p-8 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
      <div className="mb-5 ">
        <img src={icon} alt="" aria-hidden="true" className="h-8 w-8" />
      </div>
      <h3 className="text-[18px] font-normal text-(--color-text)">{title}</h3>
      <p className="mt-2 max-w-55 text-[12px] font-normal text-(--color-text-muted)">{subtitle}</p>
    </article>
  )
}

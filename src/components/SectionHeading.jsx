export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto w-full bg-(--color-surface) px-5 py-12 text-center">
      <h2 className="text-[22px] md:text-[40px] font-semibold leading-tight text-(--color-text)">{title}</h2>
      <p className="mx-auto mt-4 w-full max-w-2xl text-xs md:text-base font-normal text-(--color-text-muted)">{subtitle}</p>
    </div>
  )
}

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-[40px] font-semibold leading-tight text-black dark:text-white">{title}</h2>
      <p className="mt-4 text-[16px] font-normal text-black/80 dark:text-white/80">{subtitle}</p>
    </div>
  )
}

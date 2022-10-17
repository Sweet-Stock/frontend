export const TextElement = ({ content, text }) => {
  return (
    <p className="text-base text-slate-800 font-thin">
      <b>{text}</b> {content}
    </p>
  )
}

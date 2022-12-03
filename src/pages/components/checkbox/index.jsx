export const CheckBox = ({ label,onChange }) => {
  return (
    <div className="flex-1 flex gap-1 flex-col justify-center items-center">
      <h1 className="text-[#e5e5e5] text-base font-[Rubik] leading-[1.5]">
        {label}
      </h1>
      <input
        onChange={onChange}
        type="checkbox"
        id=""
      />
    </div>
  )
}

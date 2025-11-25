interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  className: string;
}

function Button({ children, onClick, disabled, className } : ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={` w-full py-3 rounded-lg bg-blue-500 text-white
        active:scale-[0.97] transition
        disabled:bg-gray-300 disabled:text-gray-500 ${className}`}
    >
      {children}
    </button>
  )
}
export default Button;
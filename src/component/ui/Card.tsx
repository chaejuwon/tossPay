interface cardProps {
  children: React.ReactNode;
  className: string;
}

function Card({ children, className }: cardProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  )
}
export default Card;
import { cn } from "../../utils/cn"

type CardHeaderProps = {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return <div className={cn(className)} {...rest}>{children}</div>
}

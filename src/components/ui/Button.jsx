import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const VARIANTS = {
  primary:
    'bg-charcoal text-cream-200 hover:bg-charcoal-700 dark:bg-gold-400 dark:text-charcoal-900 dark:hover:bg-gold-300',
  gold: 'bg-gold-400 text-charcoal-900 hover:bg-gold-300',
  outline:
    'border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal/5 dark:border-cream-100/30 dark:text-cream-100 dark:hover:bg-white/5',
  ghost: 'text-charcoal hover:bg-charcoal/5 dark:text-cream-100 dark:hover:bg-white/10',
}

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm sm:text-base',
  lg: 'px-8 py-4 text-base sm:text-lg',
}

const Button = forwardRef(function Button(
  { as, to, href, variant = 'primary', size = 'md', className = '', children, ...props },
  ref
) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none disabled:hover:translate-y-0 ${VARIANTS[variant]} ${SIZES[size]} ${className}`

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  const Component = as || 'button'
  return (
    <Component ref={ref} className={classes} {...props}>
      {children}
    </Component>
  )
})

export default Button

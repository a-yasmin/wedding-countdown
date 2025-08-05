import { cn } from '@/lib/utils'
import React, { JSX } from 'react'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * @default 'p'
	 */
	as?: keyof JSX.IntrinsicElements
}

const Text = React.forwardRef<HTMLElement, TextProps>(
	({ as = 'p', className, children, ...props }, ref) => {
		return React.createElement(
			as,
			{
				...props,
				className: cn(
					'text-base tracking-normal',
					as === 'h3' && 'text-xl tracking-wide',
					as === 'h2' && 'text-2xl tracking-wider',
					className,
				),
				ref,
			},
			children,
		)
	},
)
Text.displayName = 'Text'

export default Text

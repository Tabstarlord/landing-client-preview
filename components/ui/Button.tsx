import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'yellow' | 'white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    variant?: ButtonVariant;
    size?: ButtonSize;
    showArrow?: boolean;
    className?: string;
}

const variants: Record<ButtonVariant, { background: string; border: string; hoverBackground: string; text: string }> = {
    yellow: {
        background: "#FACC15",
        border: "#F5C75E",
        hoverBackground: '#EAB308',
        text: '#ffffff',
    },
  white: {
    background: '#ffffff',
    border: '#FACC15',
    hoverBackground: '#FEFCE8',
    text: '#EAB308',
  },
}

const sizes: Record<ButtonSize, { padding: string; fontSize: number }> = {
    sm: {
        padding: "10px 20px",
        fontSize: 14,
    },
    md: {
        padding: "10px 20px",
        fontSize: 14
    },
    lg: {
        padding: "20px 30px",
        fontSize: 16
    },
};

export default function Button({
    children,
    href,
    variant = 'yellow',
    size = 'md',
    showArrow = true,
    className = '',
}: ButtonProps) {
    const colors = variants[variant];
    const dimensions = sizes[size];

    const style = {
        "--button-bg": colors.background,
        "--button-border": colors.border,
        "--button-hover-bg": colors.hoverBackground,
        "--button-text": colors.text,
        "--button-padding": dimensions.padding,
        "--button-font-size": `${dimensions.fontSize}px`,
    } as CSSProperties;

    const content = (
        <>
        <span>{children}</span>

        {showArrow && (
            <ArrowRight
                size={18}
                strokeWidth={2.2}
                className="angular-button-arrow"
                aria-hidden="true"
            />
        )}
        </>
    );

    const classes = `angular-button ${className}`.trim();

    if (href) {
        return (
            <Link
            href={href}
            className={classes}
            style={style}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
        type="button"
        className={classes}
        style={style}
        >
            {content}
        </button>
    )
}

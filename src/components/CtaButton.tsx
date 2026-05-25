import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-block rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300";
  const styles =
    variant === "primary"
      ? "bg-charcoal text-cream hover:bg-charcoal-light shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      : "border border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-cream";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

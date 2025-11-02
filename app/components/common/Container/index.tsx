import { cn } from "~/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-screen-3xl px-32",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Container;

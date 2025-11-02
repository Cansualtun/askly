import { Separator } from "~/components/ui/separator";

const Footer = () => {
    return (
        <footer className="h-[300px] w-full rounded-lg bg-muted/40 flex flex-col justify-between text-xs lg:text-sm">
            <div className="pl-2" />
            <div className="flex flex-col items-center gap-3 pb-4">
                <Separator className="w-3/4" />
                <p className="text-center text-gray-400 text-xs">All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;

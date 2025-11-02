import { Button } from "~/components/ui/button"
import { SlRefresh } from "react-icons/sl";

const Refresh = () => {
    return (
        <Button
            tooltip="Yenile"
            className="border border-gray-200 w-20 h-12"
            aria-label="Yenile"
        >
            <SlRefresh />
        </Button>
    )
}

export default Refresh

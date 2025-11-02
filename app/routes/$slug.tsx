import { useParams } from "react-router";

export default function TestPage() {
    const { slug } = useParams();

    return (
        <main className="p-6 text-center">
            <h1 className="text-2xl font-semibold capitalize">
                {slug?.replace(/-/g, " ")}
            </h1>
            <p className="mt-2 text-gray-500">
                You are viewing <strong>{slug}</strong>
            </p>
        </main>
    );
}

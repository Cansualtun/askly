import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "react-router";
import { serverApi } from "~/services/http.server";

export async function loader({ request }: LoaderFunctionArgs) {
    const cookie = request.headers.get("Cookie");
    const token = cookie?.match(/token=([^;]+)/)?.[1];

    const res = await serverApi.get("/posts", {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return json({ posts: res.data });
}

export default function IndexRoute() {
    const { posts } = useLoaderData<typeof loader>();
    return (
        <div>
            <h1>Posts</h1>
            <pre>{JSON.stringify(posts, null, 2)}</pre>
        </div>
    );
}

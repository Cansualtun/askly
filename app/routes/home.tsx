import type { Route } from "./+types/home";
import Container from "~/components/common/Container";
import Product from "~/components/common/Layout/product";

import Refresh from "~/components/common/Refresh";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Askly" },
    { name: "description", content: "Askly Home Page" },
  ];
}

const Home = () => {
  return (
    <>
      <Container className="h-dvh overflow-hidden relative">
        <div className="grid h-full w-full gap-3 lg:gap-4">
          <section className="min-w-0 min-h-0 overflow-hidden">
            <Product />
          </section>
        </div>
      </Container>
      <div className="fixed bottom-4 right-4 z-50">
        <Refresh />
      </div>
    </>
  );
};

export default Home;

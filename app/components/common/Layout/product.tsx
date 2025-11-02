import { slugify } from "~/lib/utils";
import CardDemo from "../Card";
import Header from "../Header";
//@ts-ignore
import type { Route } from "~/types/product";
import { useSurveyStore } from "~/store/useSurveyStore";

export async function loader({ params }: Route.LoaderArgs) {
  const posts = useSurveyStore();
  console.log(posts, "asdasd")
  return posts;

}

export default function Product({
  loaderData,
}: Route.ComponentProps) {
  const posts = loaderData
  const layoutSpan = [1, 1, 1, 1, 1, 2, 1, 1, 1];
  console.log(posts, "leele")

  const cards = posts.surveys.map((item, index) => {
    const id = index + 1;
    return {
      id,
      img: `/images/welcome/card_${id}.png`,
      title: `Welcome Card ${id}`,
      description: `This is a description for Welcome Card ${id}.`,
      url: `/${slugify(id.toString())}`,
      colSpan: item,
    };
  });

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="grid h-full w-full grid-cols-4 grid-rows-3 gap-2 lg:gap-3">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className={`min-w-0 min-h-0 flex items-stretch justify-stretch p-1 lg:p-2 ${layoutSpan.includes(3) === 2 ? "col-span-2" : "col-span-1"
                }`}
            >

              {layoutSpan.includes(2) ? (
                <Header />
              ) : (
                <CardDemo
                  img={card.img}
                  title={card.title}
                  description={card.description}
                  url={card.url}
                  className={"shadow-lg lg:shadow-md"}
                />
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}

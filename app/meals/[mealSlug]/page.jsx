import Image from "next/image";

import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

import classes from "./page.module.css";

export default async function MealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} sizes="100%" priority alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href="">{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
          <p
            className={classes.instructions}
            dangerouslySetInnerHTML={{
              __html: meal.instructions,
            }}
          ></p>
        </div>
      </header>
      <main></main>
    </>
  );
}

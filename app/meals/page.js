import Link from "next/link";

const MealsPage = () => {
  return (
    <section>
      <h1>Meals</h1>
      <p>
        <Link href="meals/meal-1">Meal 1</Link>
      </p>
      <p>
        <Link href="meals/meal-2">Meal 2</Link>
      </p>
      <p>
        <Link href="meals/meal-3">Meal 3</Link>
      </p>
    </section>
  );
};

export default MealsPage;

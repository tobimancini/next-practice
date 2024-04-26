import Link from "next/link";

const SpecificMealPage = ({ params }) => {
  return (
    <section>
      <h1>{params.slug}</h1>
      <p>
        <Link href="/meals">Go back</Link>
      </p>
    </section>
  );
};

export default SpecificMealPage;

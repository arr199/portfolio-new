export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col">
      <h2 className="font-medium text-[rgb(59, 61, 65)] text-[20px] opacity-40">Hello there!</h2>
      <span className="mr-10 break-words text-start tracking-tight  mt-4 text-xl md:text-4xl opacity-50 font-semibold">
        Ethan is a designer crafting interfaces and interactions that are useful and feel natural.
        Previously, he designed human interfaces at Apple and has worked for Marqeta and GoodNotes.
        He&apos;s currently a designer at Berkeleytime.
      </span>
    </main>
  );
}

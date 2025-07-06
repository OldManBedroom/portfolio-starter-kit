export default function HeroBanner() {
  return (
    <section className="relative w-full h-[400px]">
      <img
        src="/callmeifyougetlostid.png"
        alt="Hero Banner"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg bg-black bg-opacity-20 px-4 py-2 rounded">
          Welcome to My Portfolio
        </h1>
      </div>
    </section>
  )
}

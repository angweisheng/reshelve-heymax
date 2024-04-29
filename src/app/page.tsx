import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { CircleUser, HandCoins, Recycle } from "lucide-react";
import BookReel from "@/components/BookReel";


const perks = [
  {
    name: "Your favourite books, for free",
    Icon: HandCoins,
    description: "Don't buy, adopt a book and give it a new home"
  },
  {
    name: "Customer Support",
    Icon: CircleUser,
    description: "24/7 Online Support for a seamless exchange experience"
  },
  {
    name: "Sustainable",
    Icon: Recycle,
    description: "Save your money and the trees"
  }
]


export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-width-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Reread Relove <span className="text-violet-600">Reshelve</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to Reshelve, your handy online book exchange
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/books" className={buttonVariants()}>
              Browse Top Books
            </Link>
            <Button variant="ghost">Get started &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk)=> (
              <div key={perk.name} className='text-center md:flex md:items-start md:text-keft lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-violet-100 text-violet-900'>
                    {<perk.Icon className='w-1/3 h-1/3'/>}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
                  <p className='mt-3 text-sm text-muted-foreground'>{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>

      </section>
    </>
  );
}

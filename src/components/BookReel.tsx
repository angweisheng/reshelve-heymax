"use client";

import { TQueryValidator } from "../lib/validators/query-validator";
import { trpc } from "../trpc/client";


interface BookReelProps {
  title: string;
  query: TQueryValidator;
}

const FALLBACK_LIMIT = 4;

const BookReel = (props: BookReelProps) => {
  const { title, query } = props;

  const { data } = trpc.getInfiniteBooks.useInfiniteQuery(
    {
      limit: query.limit ?? FALLBACK_LIMIT,
      query,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
  console.log(data);

  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2x1 px4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default BookReel;

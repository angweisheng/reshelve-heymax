import Link from "next/link";

interface BookReelProps {
  title: string;
  subtitle?: string;
  href?: string;
}

const BookReel = (props: BookReelProps) => {
  const { title, subtitle, href } = props;
  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2x1 px4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          ) : null}
          {subtitle ? (
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        {href ? (
          <Link href={href}>
            See more books <span aria-hidden="true">&rarr;</span>
          </Link>
        ) : null}
      </div>
    </section>
  );
};

export default BookReel;

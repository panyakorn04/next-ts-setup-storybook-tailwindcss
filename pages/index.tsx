import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';

const Home = () => {
  const { locale } = useRouter();

  return (
    <PrimaryLayout>
      <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
        <Image
          src="/google-com.png"
          alt="Google Logo"
          width={272}
          height={92}
          priority
        />
        <Search />
        <p>
          Google offered in:{' '}
          <Link href="/" locale={locale === 'en' ? 'th' : 'en'}>
            Thailand
          </Link>
        </p>
      </section>
    </PrimaryLayout>
  );
};

export default Home;


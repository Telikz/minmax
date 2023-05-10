import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>MINMAX</title>
      </Head>
      <section>
        <div className='flex flex-col'>
          <div class="hero h-min bg-base-100">
            <div class="hero-content text-center">
              <div class="max-w pt-6">
                <Link href='//' class="btn btn-ghost text-primary text-5xl font-extrabold">MINMAX</Link>
                <p className='py-4'>
                  Welcome to Minmax – your ultimate skill-maximizing resource. Catering to athletes, artists, and life enthusiasts, our platform is designed to help you excel.
                  MinMax turns personal growth into a game, enabling you to track progress, set goals, and receive tailored recommendations to unlock your potential.
                  Focusing on meditation and more, Minmax covers nutrition, exercise, productivity, and creativity to help you reach new heights. Join us and level up your life today!</p>
              </div>
            </div>
          </div>
          <div className='container mx-auto p-4'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">

              <Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link>
              <Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link><Link href='/Meditation/learnMeditation' class="card bg-base-100 shadow-xl image-full">
                <div class="card-body items-center">
                  <h2 class="card-title text-center">Meditation and mindfulness</h2>
                  <p className=' text-center'>Learn Meditation and mindfulness bip bop hello</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </Layout>
  );
}
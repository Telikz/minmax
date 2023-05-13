import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function AboutFitness() {
  return (
    <Layout>
      <Head>
        <title>Fitness</title>
      </Head>
      <main className="flex-col">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div class="max-w">
              <h1 class="text-5xl font-bold">Fitness</h1>
              <p class="py-4">
                Fitness is the state of being physically healthy and strong, encompassing various aspects like cardiovascular endurance, strength training, flexibility, and balance. It improves overall health, enhances daily functioning, and boosts athletic performance. Incorporating a well-rounded fitness routine can effectively support your goals and enhance overall success.
              </p>
            </div>
          </div>
          <body data-page="fitness">
          </body>
        </div>
        <div className='container mx-auto p-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href='/Fitness/GettingStarted' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Getting Started</h2>
                <p className=' text-center'>Learn the basics of fitness and how to develop a well-rounded routine</p>
              </div>
            </Link>
            <Link href='/Fitness/CardiovascularEndurance' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Cardiovascular Endurance</h2>
                <p className=' text-center'>Discover various exercises and techniques to improve cardiovascular endurance</p>
              </div>
            </Link>
            <Link href='/Fitness/Flexibility' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Flexibility</h2>
                <p className=' text-center'>Explore stretching exercises and practices to enhance flexibility and prevent injury</p>
              </div>
            </Link>
            <Link href='/Fitness/Balance' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Balance</h2>
                <p className=' text-center'>Learn about exercises and techniques to improve balance and coordination</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

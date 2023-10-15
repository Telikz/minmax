import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function AboutSleep() {
  return (
    <Layout>
      <Head>
        <title>Sleep</title>
      </Head>
      <main className="flex-col">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div class="max-w">
              <h1 class="text-5xl font-bold">Sleep</h1>
              <p class="py-4">
                Sleep is a vital component of overall health and well-being. Adequate, restful sleep is essential for maintaining cognitive function, emotional balance, and physical health. Incorporating healthy sleep habits and routines can improve the quality of your sleep, leading to better productivity, mood, and overall wellness.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto p-4'>
          <div className="grid gap-4">
            <Link href='/Sleep/GettingStarted' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Getting Started</h2>
                <p className=' text-center'>Learn the basics of healthy sleep and how to create an optimal sleep environment</p>
              </div>
            </Link>
            <Link href='/Sleep/SleepHygiene' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Sleep Hygiene</h2>
                <p className=' text-center'>Discover practical tips and habits for improving the quality of your sleep</p>
              </div>
            </Link>
            <Link href='/Sleep/SleepAids' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Sleep Aids</h2>
                <p className=' text-center'>Explore various tools and techniques to help you fall asleep faster and sleep more soundly</p>
              </div>
            </Link>
            <Link href='/Sleep/SleepDisorders' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Sleep Disorders</h2>
                <p className=' text-center'>Learn about common sleep disorders and how to address them</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

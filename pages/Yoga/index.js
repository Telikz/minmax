import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function AboutYoga() {
  return (
    <Layout>
      <Head>
        <title>Yoga</title>
      </Head>
      <main className="flex-col">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div class="max-w">
              <h1 class="text-5xl font-bold">Yoga</h1>
              <p class="py-4">
                Yoga is an ancient practice that integrates physical, mental, and spiritual aspects to promote overall well-being. It combines breath control, meditation, and body postures to enhance flexibility, strength, balance, and relaxation. Incorporating a regular yoga practice can improve mental clarity, reduce stress, and support personal growth.
              </p>
            </div>
          </div>
          <body data-page="yoga">
          </body>
        </div>
        <div className='container mx-auto p-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href='/Yoga/GettingStarted' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Getting Started</h2>
                <p className=' text-center'>Learn the basics of yoga and how to begin your practice</p>
              </div>
            </Link>
            <Link href='/Yoga/Asanas' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Asanas</h2>
                <p className=' text-center'>Explore a variety of yoga poses for different skill levels and purposes</p>
              </div>
            </Link>
            <Link href='/Yoga/Pranayama' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Pranayama</h2>
                <p className=' text-center'>Discover breathing techniques to enhance your yoga practice and overall well-being</p>
              </div>
            </Link>
            <Link href='/Yoga/Meditation' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Meditation</h2>
                <p className=' text-center'>Learn about yoga meditation practices for mental clarity and inner peace</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

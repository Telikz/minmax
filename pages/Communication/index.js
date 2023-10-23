import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function AboutCommunication() {
  return (
    <Layout>
      <Head>
        <title>Communication</title>
      </Head>
      <main className="flex-col">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div class="max-w">
              <h1 class="text-5xl font-bold">Communication</h1>
              <p class="py-4">
                </p>
            </div>
          </div>
        </div><div className='container mx-auto p-4'>
          <div className="grid col-auto gap-4">
            <Link href='/' class="card bg-base-100 shadow-xl image-full hover:bg-base-200">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Getting Started</h2>
                <p className=' text-center'></p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

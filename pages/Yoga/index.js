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
              <h1 class="text-5xl font-bold">Ashtanga Yoga</h1>
              <p class="py-4">
                Yoga is an ancient practice that integrates physical, mental, and spiritual aspects to promote overall well-being. It combines breath control, meditation, and body postures to enhance flexibility, strength, balance, and relaxation. Incorporating a regular yoga practice can improve mental clarity, reduce stress, and support personal growth.
              </p>
            </div>
          </div>
        </div>
        <div className='container mx-auto p-4'>
          <div className="grid col-auto gap-4">
          <Link href='/Yoga/Yogi' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Yogi Chat</h2>
                <p className=' text-center'>Ethical standards and integrity in our actions.</p>
              </div>
            </Link>
            <Link href='/Yoga/Yama' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Yama</h2>
                <p className=' text-center'>Ethical standards and integrity in our actions.</p>
              </div>
            </Link>
            <Link href='/Yoga/Niyama' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Niyama</h2>
                <p className=' text-center'>Personal practices of self-discipline and inner exploration.</p>
              </div>
            </Link>
            <Link href='/Yoga/Asana' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Asana</h2>
                <p className=' text-center'>Physical postures designed to purify the body and provide physical strength and stamina.</p>
              </div>
            </Link>
            <Link href='/Yoga/Pranayama' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Pranayama</h2>
                <p className=' text-center'>Breathing techniques that control the energy within the body and help to maintain a balanced state of mind.</p>
              </div>
            </Link>
            <Link href='/Yoga/Pratyahara' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Pratyahara</h2>
                <p className=' text-center'>Withdrawal of the senses, allowing for greater introspection and detachment from external stimuli.</p>
              </div>
            </Link>
            <Link href='/Yoga/Dharana' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Dharana</h2>
                <p className=' text-center'>Concentration or the ability to focus on a single point, preparing the mind for meditation.</p>
              </div>
            </Link>
            <Link href='/Yoga/Dhyana' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Dhyana</h2>
                <p className=' text-center'>Meditation, building upon Dharana, where uninterrupted flow of concentration is achieved.</p>
              </div>
            </Link>
            <Link href='/Yoga/Samadhi' className="card bg-base-100 shadow-xl image-full">
              <div className="card-body items-center">
                <h2 className="card-title text-center">Samadhi</h2>
                <p className=' text-center'>Reaching a state of profound spiritual bliss.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

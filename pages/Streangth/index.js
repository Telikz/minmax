import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '/components/layout';

export default function AboutStrengthTraining() {
  return (
    <Layout>
      <Head>
        <title>Strength Training</title>
      </Head>
      <main className="flex-col">
        <div class="hero bg-base-100">
          <div class="hero-content text-center">
            <div class="max-w">
              <h1 class="text-5xl font-bold">Strength Training</h1>
              <p class="py-4">
                Strength training helps build muscle strength and endurance through targeted exercises like weightlifting, bodyweight exercises, and resistance training. It can improve overall health, boost metabolism, and enhance athletic performance. Incorporating strength training into your routine can effectively support your goals and enhance overall success.
              </p>
            </div>
          </div>
          <body data-page="strengthtraining">
          </body>
        </div>
        <div className='container mx-auto p-4'>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href='/StrengthTraining/GettingStarted' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Getting Started</h2>
                <p className=' text-center'>Learn the basics of strength training and how to incorporate it into your routine</p>
              </div>
            </Link>
            <Link href='/StrengthTraining/Weightlifting' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Weightlifting</h2>
                <p className=' text-center'>Discover various weightlifting exercises and techniques to build muscle strength</p>
              </div>
            </Link>
            <Link href='/StrengthTraining/BodyweightExercises' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Bodyweight Exercises</h2>
                <p className=' text-center'>Explore bodyweight exercises that can be performed anywhere, without any equipment</p>
              </div>
            </Link>
            <Link href='/StrengthTraining/ResistanceTraining' class="card bg-base-100 shadow-xl image-full">
              <div class="card-body items-center">
                <h2 class="card-title text-center">Resistance Training</h2>
                <p className=' text-center'>Learn about resistance training techniques using bands, cables, and other tools</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'

export default function Home({exploreData , cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Header />
      <Banner />
      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {exploreData?.map(({img , location , distance}) => (
            <SmallCard img = {img} location={location} distance={distance} key={img}  />
          ))}
          </div>

        </section>

        <section className="pt-6">
          <h1 className="text-4xl font-semibold pb-5">Explore Nearby</h1>
          <div className="grid grid-cols-4 overflow-auto">
          {cardsData?.map(({img , title}) => (
            <MediumCard img = {img} title={title} key={img}  />
          ))}
          </div>
        </section>

      </main>
    </div>
    

  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
      (res) => res.json()
      );

    const cardsData = await fetch('https://links.papareact.com/zp1').then(
      (res) => res.json()
    );

    return{
      props : {
        exploreData , cardsData
      },
    };
}
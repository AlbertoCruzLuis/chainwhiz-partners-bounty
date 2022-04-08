import { PartnerSection } from "content/PartnerSection"
import { PageLayout } from "layouts/PageLayout"
import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Our Partners</title>
      </Head>
      <PageLayout>
        <PartnerSection />
      </PageLayout>
    </>
  )
}

export default Home

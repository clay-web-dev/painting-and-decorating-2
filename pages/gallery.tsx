import CommonLanding from "../components/sections/CommonLanding";
import GetQuoteSection from "../components/sections/GetQuoteSection";
import ResidentialSection from "../components/sections/ResidentialSection";
import Head from "next/head";

const ResidentialPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Residential Painting & Decorating</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Residential Painting & Decorating"} />
      <ResidentialSection />
      <GetQuoteSection />
    </>
  );
};

export default ResidentialPage;

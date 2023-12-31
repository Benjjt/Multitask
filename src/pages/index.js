import Head from "next/head";
import MainContainer from "../../components/MainContainer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ben's Multivitamin Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-screen h-screen flex flex-col justify-start items-center">
        <MainContainer />
      </main>
    </>
  );
}

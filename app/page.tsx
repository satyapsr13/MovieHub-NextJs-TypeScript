import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen ">
      <Head>
        <title>Movie Hub</title>
        <meta name="description" content=" Movie Hub" />
      </Head>
      <main className="container mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-white" >Movie Hub</h1>


      </main>
    </div>
  );
}

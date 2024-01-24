import Layout from "../components/Layout";
import NotFoundImg from "../assets/png/notfoundpage.png";

export default function NotFound() {
  return (
    <>
      <Layout>
        <div className="w-full flex justify-center">
          <div className=" max-w-7xl w-full flex h-[calc(100vh-372px)]">
            {/* 왼쪽 */}
            <div className=" w-1/2 h-full flex flex-col justify-center space-y-6">
              <h1 className=" text-4xl font-bold">404 PAGE NOT FOUND</h1>
              <h2 className=" text-xl font-semibold">Not even the Eye of Uatu sees your request...</h2>
              <p>
                Check that you typed the address correctly, go back to your
                previous page or try using our site search to find something
                specific.
              </p>
            </div>
            {/* 오른쪽 */}
            <div className=" w-1/2 h-full flex justify-center overflow-hidden">
                <img className=" animate-scared" src={NotFoundImg} alt="Not_Found_img"/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

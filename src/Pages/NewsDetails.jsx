import {FaStar} from "react-icons/fa";
import Header from "./Shared/Header/Header";
import Navbar from "./Shared/Navbar/Navbar";
import {Link, useLoaderData, useParams} from "react-router-dom";
// import RightSideNav from "./Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  const {id} = useParams();
  console.log(id);
  console.log(newsDetails);

  const {title, image_url, rating, details, category_id} = newsDetails;
  return (<div>
    <Header></Header>
    <Navbar></Navbar>
    <div className="grid grid-cols-4">
      {/* <!-- News Details Card (60%) --> */}
      <div className="col-span-3">
        <div className="mx-auto p-5 sm:p-10 md:p-16">
          <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto">
            <h1 className="text-md sm:text-2xl font-semibold hover:text-indigo-600 transition
          duration-500 ease-in-out inline-block mb-2 text-justify">
              {title}
            </h1>

            <div className="mt-2">
              <img className="w-full" src={image_url} alt="News Image"/>
            </div>
            <p className="text-black text-justify py-5 text-base leading-8">
              {details}
            </p>
            <div className="py-5 text-sm font-regular text-black flex justify-between">
              <div className="flex">
                <FaStar size={25} color="orange"/>
                <span className="ml-2 text-lg">{rating.number}</span>
              </div>
              <div>
                <Link to={`/category/${category_id}`}>
                  <button className="btn btn-outline btn-warning rounded-none">
                    All News in this Category
                  </button>
                </Link>
              </div>
            </div>
            <hr/>
          </div>
        </div>
      </div>

      {/* <!-- Right Side Navbar (40%) --> */}
      <div className="col-span-1 p-4 shadow-md">
        {/* <RightSideNav></RightSideNav> */}
      </div>
    </div>
  </div>);
};

export default NewsDetails;
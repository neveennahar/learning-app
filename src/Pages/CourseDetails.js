import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const CourseDetails = () => {
    const ref = React.createRef();
    const data = useLoaderData()

    return (
        <div className='w-[75%] mx-auto'>

            <Pdf targetRef={ref} filename="tutorial.pdf">
                {({ toPdf }) => <button className='btn btn-secondary' onClick={toPdf}>Download PDF</button>}
            </Pdf>

            <div ref={ref} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={data?.img} alt="Shoes" className="rounded-xl h-[350px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data?.name}</h2>
                    <h4 className='text-xl'>Price: {data?.price}</h4>
                    <p>Rating: {data?.rating}</p>
                    <p>Enrolled: {data?.enrolled}</p>
                    <p>{data?.details}</p>
                    <div className="card-actions">
                        <Link className="btn btn-primary" to={"/checkout"}>Buy Premium Access</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;
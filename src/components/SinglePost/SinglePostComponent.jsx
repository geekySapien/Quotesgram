import React from 'react';
import cover from '../../assets/quotesToRemember.png';
import { MdEdit, MdDelete } from 'react-icons/md';
import './SinglePostComponent.css';
export default function SinglePostComponent() {
    return (
        <>
            <div className="mt-2 mr-6 ml-6 ">
                <div className="w-full h-full imageContainer ">
                    <img
                        src={cover}
                        className="w-full h-full rounded-lg object-cover"
                    />
                </div>
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold mt-4 postTitle ">
                        Lorem ipsum dolor sit
                    </h1>
                    <div className="flex gap-3 icons ">
                        <MdEdit className="mt-4 w-6 h-6 cursor-pointer text-green-600" />
                        <MdDelete className="mt-4 w-6 h-6 cursor-pointer text-red-500" />
                    </div>
                </div>
                <div className="flex justify-between mt-3">
                    <p className="text-lg">
                        Author: <span className="text-lg font-bold">Riya</span>
                    </p>
                    <p className="text-lg italic">1 hour ago</p>
                </div>
                <div className="postDescription leading-8 mt-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus officiis error voluptatum asperiores voluptas,
                    quas iste, sequi facere ea assumenda voluptates provident
                    est alias rem deleniti nihil. Quaerat, voluptatibus eos?
                    Dolores esse dolore necessitatibus aperiam quam recusandae
                    repellat tempora earum repellendus, accusamus porro corporis
                    cum soluta quod cupiditate quae laudantium officia
                    aspernatur! Quis earum fugit porro obcaecati dignissimos
                    quaerat dicta? Earum similique, sed neque debitis
                    consequuntur repellat voluptatem repellendus at, maxime odio
                    repudiandae ad suscipit sint, facere alias illum eveniet
                    facilis hic eum numquam omnis beatae. Magni consequuntur
                    reiciendis aliquid? Laudantium quia aspernatur dolorum,
                    rerum, vitae est inventore laborum perferendis fugiat eaque
                    natus ratione harum optio sint eveniet veritatis ipsam
                    consequatur vel, qui repellat molestias facilis esse
                    quisquam fugit? Suscipit. Necessitatibus, exercitationem.
                    Cumque alias perferendis nisi deleniti sed nostrum fuga
                    assumenda delectus aliquam commodi? Amet obcaecati vel neque
                    illo facere, ullam corrupti molestiae fuga nesciunt dolores
                    voluptas possimus itaque eum. Quasi quod mollitia magnam
                    consequatur quis repellendus quaerat aspernatur, delectus
                    pariatur quam unde animi asperiores placeat accusamus
                    deleniti fugit, saepe libero! Unde optio facilis eius cumque
                    officiis perferendis totam voluptatibus!
                </div>
            </div>
        </>
    );
}

import React, { useState } from 'react'
import Header from '../Header'
import Banner from '../../assets/footerbg.png'
import BD2 from '../../assets/blog_details/bd2.png'
import RP1 from '../../assets/blog_details/rp1.png'
import RP2 from '../../assets/blog_details/rp2.png'
import BPIMG1 from '../../assets/blog_details/blogpreviewimg.png'
import BPIMG10 from '../../assets/blog_details/bdc1.png'
import BPIMG11 from '../../assets/blog_details/bdc2.png'
import BPIMG2 from '../../assets/blog_details/blogdetailsmain.png'
import Footer from '../Footer'
import { FaCaretRight, FaChevronLeft, FaChevronRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const tasks = [
    {
        id: 1,
        img: { BPIMG1 },
        name: "Emilie D'Amore",
        description: 'Praesentium et odit commodi dolores possimus quisquam expedita ipsum. Voluptas vel vero officia alias ut.',
    },
    {
        id: 2,
        img: 'BPIMG2',
        name: "John Doe",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam.',
    },
    {
        id: 3,
        img: 'BPIMG3',
        name: "Jane Smith",
        description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
];

function BlogDetails() {
    const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

    // Handle navigation
    const handleNext = () => {
        if (currentTaskIndex < tasks.length - 1) {
            setCurrentTaskIndex(currentTaskIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentTaskIndex > 0) {
            setCurrentTaskIndex(currentTaskIndex - 1);
        }
    };

    // Get the current task
    const currentTask = tasks[currentTaskIndex];

    return (
        <div>
            <div className='w-[100%] overflow-x-hidden font-[Montserrat] text-[24px]' style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                {/* Header Season */}
                <Header />

                <div className='bg-gradient-to-r from-[#121D2773] to-[#121D27E8] flex flex-col items-center py-40 whitespace-nowrap'>
                    <h1 className='text-[#C5A572] text-[60px] font-[Bellefair]'>Blog Details</h1>
                    <h1 className='text-[20px] opacity-70 text-[#ffffff]'>Home / Blogs / Blog Details</h1>
                </div>
            </div>

            {/* Details */}
            <div className='w-[85%] m-auto grid grid-cols-6 md:gap-10 gap-5 pt-20 pb-10'>
                <div className='sm:col-span-4 col-span-6'>

                    <img src={BPIMG2} alt="BPIMG2" />
                    <div className='space-y-3 pt-8'>
                        <h1 className='text-[#C5A572] text-[25px]'>21-04-2020  ~  Food</h1>
                        <h1 className='lg:text-[30px] text-[26px] text-[#121D27] font-medium'>Macarons vs. Macaroons: What’s the Difference There?</h1>
                        <p className='opacity-60 text-justify'>Aut sit est est. Tenetur ad reiciendis veniam omnis eligendi porro illo natus. Quae vitae unde beatae et rem. Hic autem voluptas nisi est dolore hic autem sapiente.Deleniti odit iusto consequatur perferendis distinctio velit. Delectus non aperiam rerum molestiae iure ratione totam totam dolores. Ipsam explicabo perferendis. Facere aperiam accusantium aliquid asperiores sunt cumque eos inventore.Amet omnis dolore quo expedita. Veniam soluta esse magnam rerum doloribus numquam. Qui eveniet quam sint explicabo tempora quisquam aspernatur. Quia rerum ipsam sed aut itaque expedita recusandae numquam quaerat. Voluptatem aliquam id odit deleniti et. Aliquam et excepturi dolores quo.Ipsum sint ullam quidem omnis aut debitis velit. Rerum voluptas esse et nobis quis saepe iste. Debitis eligendi repellendus similique laborum. Ab nam dignissimos beatae.Magnam at unde eos nostrum quibusdam eius. Modi nobis voluptatem libero incidunt possimus rerum aut enim nulla. Tempore maxime quaerat. Dolor accusantium et sunt sit optio praesentium quae voluptatem.</p>
                        <h1 className='lg:text-[30px] text-[26px] text-[#121D27] font-medium'>Nam libero tempore, cum soluta eligendi optio</h1>
                        <p className='opacity-60 text-justify'>Eaque aut odio expedita. Accusantium a dignissimos officiis. Aspernatur a vel. Maxime ea occaecati ab nobis. Quo ex non vitae voluptate temporibus sed qui. Sed distinctio molestiae eveniet in dolor consequuntur quod debitis magni.Error qui eum animi autem quos ipsam nihil. Id possimus ipsam quis. Quo sed nemo aut perspiciatis voluptas nam optio. Maiores beatae officiis vel molestias esse cumque veniam consequuntur incidunt.</p>
                        <div className='grid xxs:grid-cols-2 grid-cols-1 sm:gap-5 gap-3 md:pt-10 pt-5'>
                            <img src={BPIMG10} alt="BPIMG10" className='' />
                            <img src={BPIMG11} alt="BPIMG11" className='' />
                        </div>
                        <p className='opacity-60 py-5 text-justify'>Aut rem rerum at fugiat. Dolores numquam ipsam corporis. Enim et fugit eligendi. Blanditiis harum non eaque aspernatur. Mollitia et distinctio voluptatem error hic numquam ea sunt aut. Pariatur non similique et.Et iure enim dolore. Aspernatur soluta neque mollitia quia accusantium provident non explicabo quia. Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero officia alias ut. Assumenda nihil est consequatur nesciunt cupiditate eum in libero dolor. Soluta odio voluptatem dolores molestiae dolorem nesciunt. Aspernatur similique repellendus beatae.Repellendus recusandae voluptate reiciendis sequi alias eos. Quasi enim ratione voluptates a unde sint provident eveniet omnis. Esse illo qui aut alias hic enim.</p>
                    </div>

                    {/* <div className='border-2 border-[#c5a57273] flex md:flex-row flex-col md:space-x-5 sm:p-6 p-3 relative mt-5'>
                        <img src={BPIMG1} alt="RP1" />
                        <div>
                            <h1 className='font-[Bellefair] lg:text-[40px] text-[30px]'>Emilie D'Amore</h1>
                            <p className='opacity-60 pb-2'>Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero oficia alias ut.</p>
                            <div className='text-[#121D27] flex items-center lg:space-x-5 space-x-3'>
                                <FaInstagram className='lg:text-[30px] text-[20px]' />
                                <FaFacebookF className='lg:text-[30px] text-[20px]' />
                                <FaTwitter className='lg:text-[30px] text-[20px]' />
                                <FaLinkedinIn className='lg:text-[30px] text-[20px]' />
                            </div>
                        </div>
                        <p className='text-[25px] absolute md:right-5 md:top-0 bottom-2 right-5'>Reply</p>
                    </div> */}

                    <div className="border-2 border-[#c5a57273] flex md:flex-row flex-col md:space-x-5 sm:p-6 p-3 relative mt-5">
                        <img src={BPIMG1} alt={currentTask.name} />
                        <div>
                            <h1 className="font-[Bellefair] lg:text-[40px] text-[30px]">{currentTask.name}</h1>
                            <p className="opacity-60 pb-2">{currentTask.description}</p>
                            <div className="text-[#121D27] flex items-center lg:space-x-5 space-x-3">
                                <FaInstagram className="lg:text-[30px] text-[20px]" />
                                <FaFacebookF className="lg:text-[30px] text-[20px]" />
                                <FaTwitter className="lg:text-[30px] text-[20px]" />
                                <FaLinkedinIn className="lg:text-[30px] text-[20px]" />
                            </div>
                        </div>
                        <p className="text-[25px] absolute md:right-5 md:top-0 bottom-2 right-5">Reply</p>
                    </div>

                    {/* Pagination controls */}
                    <div className="flex justify-between space-x-5 mt-5">
                        <button
                            onClick={handlePrevious}
                            disabled={currentTaskIndex === 0}
                            className=" disabled:opacity-50 flex items-center"
                        >
                            <FaChevronLeft className='me-3' /> Previous
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentTaskIndex === tasks.length - 1}
                            className="disabled:opacity-50 flex items-center"
                        >
                            Next <FaChevronRight className='ms-3' />
                        </button>
                    </div>

                    {/* Comments */}
                    <div>
                        <h1 className='text-[#121D27] font-[Bellefair] sm:text-[55px] text-[40px] pt-10 pb-3'>2 Comments</h1>
                        <div className='bg-[#C5A57217] flex md:flex-row flex-col md:space-x-5 p-5 relative mt-5'>
                            <img src={RP1} alt="RP1" />
                            <div>
                                <h1 className='font-[Bellefair] lg:text-[40px] text-[30px]'>Emilie D'Amore</h1>
                                <p className='text-[#979797]'>21-04-2020 at 03:00 PM</p>
                                <p className='opacity-60'>Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero oficia alias ut.</p>
                            </div>
                            <p className='text-[25px] absolute md:right-5 md:top-0 bottom-2 right-5'>Reply</p>
                        </div>

                        <div className='bg-[#C5A57217] flex md:flex-row flex-col md:space-x-5 p-5 relative mt-5'>
                            <img src={RP2} alt="RP2" />
                            <div>
                                <h1 className='font-[Bellefair] lg:text-[40px] text-[30px]'>Emilie D'Amore</h1>
                                <p className='text-[#979797]'>21-04-2020 at 03:00 PM</p>
                                <p className='opacity-60'>Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero oficia alias ut.</p>
                            </div>
                            <p className='text-[25px] absolute md:right-5 md:top-0 bottom-2 right-5'>Reply</p>
                        </div>
                    </div>

                    {/* Reply */}
                    <div>
                        <h1 className='text-[#121D27] sm:text-[55px] text-[40px] font-[Bellefair] pt-10'>Leave a Reply</h1>
                        <p className='text-[#979797]'>Your email address will not be published.</p>
                        <input type="text" placeholder='Comments*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' />
                        <div className='sm:flex items-center justify-between sm:space-x-5'>
                            <input type="text" placeholder='Name*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' />
                            <input type="text" placeholder='E-mail*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' />
                        </div>
                        <button className='text-white bg-black py-2 px-5 text-[20px] mt-8'>Post Comments</button>
                    </div>
                </div>

                <div className='sm:col-span-2 col-span-6'>
                    <h1 className='text-[#121D27] text-[25px] font-semibold pb-2'>Search</h1>
                    <input type="text" className='outline-none border-2 border-[#121d276b] w-full px-5 py-2 mb-5' placeholder='Search here....' />
                    <div className='py-3'>
                        <h1 className='text-[25px] pb-3 font-semibold'>Categories</h1>
                        <div className='flex items-center space-x-3 text-[#121D27] py-2 border-b'>
                            <FaCaretRight />
                            <h1 className='text-[20px]'>American Food</h1>
                        </div>
                        <div className='flex items-center space-x-3 text-[#121D27] py-2 border-b'>
                            <FaCaretRight />
                            <h1 className='text-[20px]'>American Food</h1>
                        </div>
                        <div className='flex items-center space-x-3 text-[#121D27] py-2 border-b'>
                            <FaCaretRight />
                            <h1 className='text-[20px]'>American Food</h1>
                        </div>
                        <div className='flex items-center space-x-3 text-[#121D27] py-2 border-b'>
                            <FaCaretRight />
                            <h1 className='text-[20px]'>American Food</h1>
                        </div>
                        <div className='flex items-center space-x-3 text-[#121D27] py-2 border-b'>
                            <FaCaretRight />
                            <h1 className='text-[20px]'>American Food</h1>
                        </div>
                    </div>
                    <div className='sm:flex flex-col grid xxs:grid-cols-2 grid-cols-1 gap-3'>
                        <h1 className='text-[#121D27] text-[25px] font-semibold col-span-2'>Recent Post</h1>
                        <div className='sm:flex lg:flex-row sm:flex-col justify-center lg:space-x-3 py-4 border-b xxs:col-span-1 col-span-2 '>
                            <img src={BD2} alt="BD2" className='w-full' />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                        <div className='sm:flex lg:flex-row flex-col justify-center lg:space-x-2 py-4 border-b xxs:col-span-1 col-span-2'>
                            <img src={BD2} alt="BD2" className='w-full' />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                        <div className='sm:flex xxs:col-span-1 col-span-2 lg:flex-row flex-col justify-center lg:space-x-2 py-4 border-b'>
                            <img src={BD2} alt="BD2" className='w-full' />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                        <div className='sm:flex xxs:col-span-1 col-span-2 lg:flex-row flex-col justify-center lg:space-x-2 py-4 border-b'>
                            <img src={BD2} alt="BD2" className='w-full' />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <h1 className='text-[#121D27] text-[25px] font-semibold pb-3'>Tage</h1>
                        <p className='text-[#121D27]'>Citrus ~ Creamy ~ Darker ~ Organic ~ Smooth ~ Sweet</p>
                    </div>
                    <div>
                        <h1 className='text-[#121D27] text-[25px] font-semibold pb-5'>Share Blog</h1>
                        <div className='text-[#121D27] flex items-center space-x-5'>
                            <FaInstagram className='text-[30px]' />
                            <FaFacebookF className='text-[30px]' />
                            <FaTwitter className='text-[30px]' />
                            <FaLinkedinIn className='text-[30px]' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default BlogDetails
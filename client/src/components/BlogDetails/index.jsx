import React from 'react'
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
import { FaCaretRight, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function BlogDetails() {
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
            <div className='w-[85%] m-auto grid grid-cols-6 gap-10 pt-20 pb-10'>
                <div className='col-span-4'>

                    <img src={BPIMG2} alt="BPIMG2" />
                    <div className='space-y-3 pt-8'>
                        <h1 className='text-[#C5A572] text-[25px]'>21-04-2020  ~  Food</h1>
                        <h1 className='text-[30px] text-[#121D27] font-medium'>Macarons vs. Macaroons: What’s the Difference There?</h1>
                        <p className='opacity-60'>Aut sit est est. Tenetur ad reiciendis veniam omnis eligendi porro illo natus. Quae vitae unde beatae et rem. Hic autem voluptas nisi est dolore hic autem sapiente.Deleniti odit iusto consequatur perferendis distinctio velit. Delectus non aperiam rerum molestiae iure ratione totam totam dolores. Ipsam explicabo perferendis. Facere aperiam accusantium aliquid asperiores sunt cumque eos inventore.Amet omnis dolore quo expedita. Veniam soluta esse magnam rerum doloribus numquam. Qui eveniet quam sint explicabo tempora quisquam aspernatur. Quia rerum ipsam sed aut itaque expedita recusandae numquam quaerat. Voluptatem aliquam id odit deleniti et. Aliquam et excepturi dolores quo.Ipsum sint ullam quidem omnis aut debitis velit. Rerum voluptas esse et nobis quis saepe iste. Debitis eligendi repellendus similique laborum. Ab nam dignissimos beatae.Magnam at unde eos nostrum quibusdam eius. Modi nobis voluptatem libero incidunt possimus rerum aut enim nulla. Tempore maxime quaerat. Dolor accusantium et sunt sit optio praesentium quae voluptatem.</p>
                        <h1 className='text-[30px] text-[#121D27] font-medium'>Nam libero tempore, cum soluta eligendi optio</h1>
                        <p className='opacity-60'>Eaque aut odio expedita. Accusantium a dignissimos officiis. Aspernatur a vel. Maxime ea occaecati ab nobis. Quo ex non vitae voluptate temporibus sed qui. Sed distinctio molestiae eveniet in dolor consequuntur quod debitis magni.Error qui eum animi autem quos ipsam nihil. Id possimus ipsam quis. Quo sed nemo aut perspiciatis voluptas nam optio. Maiores beatae officiis vel molestias esse cumque veniam consequuntur incidunt.</p>
                        <div className='flex space-x-5 pt-10 w-auto'>
                            <img src={BPIMG10} alt="BPIMG10" className='w-auto' />
                            <img src={BPIMG11} alt="BPIMG11" className='w-auto' />
                        </div>
                        <p className='opacity-60 py-5'>Aut rem rerum at fugiat. Dolores numquam ipsam corporis. Enim et fugit eligendi. Blanditiis harum non eaque aspernatur. Mollitia et distinctio voluptatem error hic numquam ea sunt aut. Pariatur non similique et.Et iure enim dolore. Aspernatur soluta neque mollitia quia accusantium provident non explicabo quia. Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero officia alias ut. Assumenda nihil est consequatur nesciunt cupiditate eum in libero dolor. Soluta odio voluptatem dolores molestiae dolorem nesciunt. Aspernatur similique repellendus beatae.Repellendus recusandae voluptate reiciendis sequi alias eos. Quasi enim ratione voluptates a unde sint provident eveniet omnis. Esse illo qui aut alias hic enim.</p>
                    </div>

                    <div className='border-2 border-[#c5a57273] flex space-x-5 p-6 relative mt-5'>
                        <img src={BPIMG1} alt="RP1" />
                        <div>
                            <h1 className='font-[Bellefair] text-[40px]'>Emilie D'Amore</h1>
                            <p className='opacity-60 pb-2'>Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero oficia alias ut.</p>
                            <div className='text-[#121D27] flex items-center space-x-5'>
                                <FaInstagram className='text-[30px]' />
                                <FaFacebookF className='text-[30px]' />
                                <FaTwitter className='text-[30px]' />
                                <FaLinkedinIn className='text-[30px]' />
                            </div>
                        </div>
                        <p className='text-[25px] absolute right-5'>Reply</p>
                    </div>

                    {/* Comments */}
                    <div>
                        <h1 className='text-[#121D27] font-[Bellefair] text-[55px] pb-3'>2 Comments</h1>
                        <div className='bg-[#C5A57217] flex space-x-5 p-5 relative mt-5'>
                            <img src={RP1} alt="RP1" />
                            <div>
                                <h1 className='font-[Bellefair] text-[40px]'>Emilie D'Amore</h1>
                                <p className='text-[#979797]'>21-04-2020 at 03:00 PM</p>
                                <p className='opacity-60'>Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero oficia alias ut.</p>
                            </div>
                            <p className='text-[25px] absolute right-5'>Reply</p>
                        </div>

                        <div className='bg-[#C5A57217] flex space-x-5 p-5 relative mt-5'>
                            <img src={RP2} alt="RP2" />
                            <div>
                                <h1 className='font-[Bellefair] text-[40px]'>Emilie D'Amore</h1>
                                <p className='text-[#979797]'>21-04-2020 at 03:00 PM</p>
                                <p className='opacity-60'>Praesentium et odit commodi dolores possimus quisquam expedita ipsum.Voluptas vel vero oficia alias ut.</p>
                            </div>
                            <p className='text-[25px] absolute right-5'>Reply</p>
                        </div>
                    </div>

                    {/* Reply */}
                    <div>
                        <h1 className='text-[#121D27] text-[55px] font-[Bellefair] pt-10'>Leave a Reply</h1>
                        <p className='text-[#979797]'>Your email address will not be published.</p>
                        <input type="text" placeholder='Comments*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' />
                        <div className='flex items-center justify-between space-x-5'>
                            <input type="text" placeholder='Name*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' />
                            <input type="text" placeholder='E-mail*' className='outline-none border-b w-full py-3 mt-5 border-gray-400 text-[20px]' />
                        </div>
                        <button className='text-white bg-black py-2 px-5 text-[20px] mt-8'>Post Comments</button>
                    </div>
                </div>

                <div className='col-span-2'>
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
                    <div>
                        <h1 className='text-[#121D27] text-[25px] font-semibold'>Recent Post</h1>
                        <div className='flex items-center justify-center space-x-2 py-4 border-b'>
                            <img src={BD2} alt="BD2" />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center space-x-2 py-4 border-b'>
                            <img src={BD2} alt="BD2" />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center space-x-2 py-4 border-b'>
                            <img src={BD2} alt="BD2" />
                            <div className='space-y-1'>
                                <h1 className='text-[20px] text-[#121D27]'>Healthy Cooking Is A Must For</h1>
                                <p className='opacity-40'>17th Jan 2020</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-center space-x-2 py-4 border-b'>
                            <img src={BD2} alt="BD2" />
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
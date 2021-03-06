import React from "react";
import classes from './../../styles/views/blog/blog-style.module.scss'
import imgPng from './../../project/image/views/blog/img.png'
import imPng from './../../project/image/views/blog/im.png'
import Link from 'next/link'
import {useRouter} from 'next/router'
import { NET } from "../../network";

const BlogView = ({blogData, screen}) => {
    
    const router = useRouter()

   
    return (
        <>
        <div className={classes.title}>блог</div>
        <div className={classes.blog}>
            <div className={classes.blog__content}>
                <div className={classes.blog__content__content}>
                <div className={classes.blog__content__mainCard}>
                   {blogData.slice(0, 1).map((elem) => {
                        return (
                            <Link href={`/news/${elem.id}`}>
                            <div style={{backgroundImage: `linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0) 100%), url(${NET.WEB_URL}/${elem.image})`}} className={classes.blog__mainNew}>
                                <div className={classes.blog__mainNew__content}>
                                    <div  className={classes.blog__mainNew__content__title}>{elem.title}</div>
                                   <div className={classes.blog__mainNew__content__info}>
                                        <div dangerouslySetInnerHTML={{__html: elem.small_description}} className={classes.blog__mainNew__content__info__desc}></div>
                                        <div className={classes.blog__mainNew__content__info__date}>{elem.date}</div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )
                        })}
                </div>   
                <div className={classes.blog__content__twoCards}>
                       {blogData.slice(1, 3).map((news) => {
                            return (
                            <div className={classes.blog__twoNews}>
                                <Link href={`/news/${news.id}`}>
                                <div className={classes.blog__twoNews__content}>
                                    <div className={classes.blog__twoNews__content__imgBlock}>
                                        <img className={classes.blog__twoNews__content__img} src={`${NET.WEB_URL}/${news.image}`} alt="" />
                                    </div>
                                    <div className={classes.blog__twoNews__content__block} >
                                        <div className={classes.blog__twoNews__content__block__block}>
                                            <div className={classes.blog__twoNews__content__title}>{news.title}</div>
                                            
                                        </div>
                                        <div className={classes.blog__twoNews__content__info}>

                                        <div dangerouslySetInnerHTML={{__html: news.small_description}} className={ screen ? classes.blog__twoNews__content__description2 : classes.blog__twoNews__content__description}></div>
                                            {/* <div className={classes.blog__twoNews__content__info__desc}>{news.small_description}</div> */}
                                            <div className={classes.blog__twoNews__content__info__date}>{news.date}</div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            )
                        })}
                </div>
                </div>
                <div className={classes.otherNews}>
                    {blogData.slice(3).map((news) => {
                            return (
                            <Link href={`/news/${news.id}`}>
                            <div className={classes.otherNews__new}>
                                <div className={classes.otherNews__content}>
                                    <div className={classes.blog__twoNews__content__imgBlock}>
                                        <img className={classes.blog__twoNews__content__img} src={`${NET.WEB_URL}/${news.image}`} alt="" />
                                    </div>
                                    <div className={classes.blog__twoNews__content__block} >
                                        <div className={classes.blog__twoNews__content__block__block}>
                                            <div className={classes.blog__twoNews__content__title}>{news.title}</div>
                                            <div className={classes.blog__twoNews__content__description}>{news.description}</div>
                                        </div>
                                        <div className={classes.blog__twoNews__content__info}>
                                            <div className={classes.blog__twoNews__content__info__desc}>{news.small_description}</div>
                                            <div className={classes.blog__twoNews__content__info__date}>{news.date}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                            )
                        })}
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogView

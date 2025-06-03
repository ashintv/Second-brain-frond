import { AddIcon, ShareIcon } from "./icos"


function getYouTubeEmbedUrl(url: string) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([\w\-]{11})/;
        const match = url.match(regex);
        if (match && match[1]) {
                return `https://www.youtube.com/embed/${match[1]}`;
        }
        return url;
}

export interface CardProps {
        title: string,
        link: string,
        type: 'twitter' | 'youtube' | 'facebook' | 'instagram'
}


export const Card = (props: CardProps) => {
        return <div className="mt-4  bg-white border-1 border-slate-100 shadow-md  w-90 rounded-xl  p-2">
                <div className="justify-between flex">
                        <div className="flex items-center">
                                <div className="px-2">
                                        <AddIcon size="md" />
                                </div>
                                {props.title}
                        </div>
                     
                                <div className="flex px-2 items-center text-slate-500">
                                        <div className="mx-0.5">
                                                <ShareIcon size="md" />
                                        </div>
                                        <div className="mx-0.5">
                                                <ShareIcon size="md" />
                                        </div>

                                </div>
        
                </div>

                {props.type === 'youtube' &&
                        <div className="pt-4">
                                <iframe className="w-full p-2" src={getYouTubeEmbedUrl(props.link)}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                        </div>
                }
                {props.type === 'twitter' &&
                        <blockquote className="twitter-tweet">
                                <a href={props.link}></a>
                        </blockquote>
                }




        </div>
}       
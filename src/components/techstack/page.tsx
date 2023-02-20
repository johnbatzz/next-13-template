import Image from "next/image"
import { useState } from "react"

export default function TechStacks() {
    const techstacks = [
        {
            name:'JavaScript',
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png'
        },
        {
            name:'TypeScript',
            docsUrl: 'https://www.typescriptlang.org/docs/',
            logoUrl: 'https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png'
        },
        {
            name:'HTML',
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            logoUrl: 'https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png'
        },
        {
            name:'CSS',
            docsUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            logoUrl: 'https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png'
        },
        {
            name:'SASS',
            docsUrl: 'https://sass-lang.com/documentation/',
            logoUrl: 'data:image/png;base64,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'
        },
        {
            name:'TailwindCSS',
            docsUrl: 'https://v2.tailwindcss.com/docs',
            logoUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--zKQJKp9C--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/i/1jqa96mtdymq7ydgjqf1.png'
        },
        {
            name:'Bootstrap',
            docsUrl: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ooXM2QoTnxoGIjPRDUesuGogbyi4Bu5nxg&usqp=CAU'
        },
        {
            name:'VueJS',
            docsUrl: 'https://vuejs.org/guide/introduction.html',
            logoUrl: 'data:image/png;base64,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'
        },
        {
            name:'ReactJS',
            docsUrl: 'https://reactjs.org/docs/getting-started.html',
            logoUrl: 'https://daily-dev-tips.com/ezoimgfmt/cdn.hashnode.com/res/hashnode/image/upload/v1647492266631/rH6yDfWyJ.png?ezimgfmt=rs:380x337/rscb2/ngcb2/notWebP'
        },
        {
            name:'Springboot',
            docsUrl: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#getting-started',
            logoUrl: 'https://blog.oxiane.com/wp-content/uploads/2021/02/spring_boog_400x400.png'
        },
        {
            name:'Rest API',
            docsUrl: 'https://docs.github.com/en/rest?apiVersion=2022-11-28',
            logoUrl: 'https://lh3.googleusercontent.com/-XvJzhz3pfH0/XjYG_xWkESI/AAAAAAAAJ9c/AYlgAtRknEU2W5fMcFhQoL6rmO8EBtIDQCK8BGAsYHg/s0/2020-02-01.png'
        },
        {
            name:'GraphQL',
            docsUrl: 'https://graphql.org/learn/',
            logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKSqZ2hV7xvg0P_xcQSzOn30fjKSJMYDtdblAHoVUCh1lecSrHLlG5zWhlBKfFuRDk7s&usqp=CAU'
        },
        {
            name:'Firebase',
            docsUrl: 'https://firebase.google.com/docs/firestore',
            logoUrl: 'https://png.pngitem.com/pimgs/s/31-316562_firebase-firestore-png-transparent-png.png'
        },
        {
            name:'ReactNative',
            docsUrl: 'https://reactnative.dev/docs/getting-started',
            logoUrl: 'https://4thpointer.com/wp-content/uploads/2021/01/React-Native.png'
        },
        {
            name:'Java EE',
            docsUrl: 'https://javaee.github.io/javaee-spec/javadocs/',
            logoUrl: 'data:image/png;base64,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'
        },
        {
            name:'MySQL',
            docsUrl: 'https://dev.mysql.com/doc/',
            logoUrl: 'https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.jpg'
        },
        {
            name:'Flutter',
            docsUrl: 'https://docs.flutter.dev/',
            logoUrl: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/02/Flutter-Framework-Feature-Image-Background-Colour.png'
        },
        {
            name:'jQuery',
            docsUrl: 'https://api.jquery.com/',
            logoUrl: 'https://www.nicepng.com/png/detail/274-2741860_jquery-in-easy-steps-create-dynamic-web-pages.png'
        },
    ]

    const [ratio, setRatio] = useState(16/9);

    return (
        <>
            <div className="px-[50px] my-[50px]">
                <h1 className="text-[2rem] sm:text-[3rem] text-center sm:text-left">Tech Stacks</h1>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 heading-10 gap-4">
                    { techstacks.map(techstack => (
                            <li key={techstack.name}>
                                <a 
                                    href={techstack.docsUrl}
                                    target='_blank'
                                    rel="noreferrer"
                                    className="text-yellow-600"
                                >
                                    <Image 
                                        src={techstack.logoUrl} 
                                        alt={techstack.name} 
                                        width={100}
                                        height={100 / ratio}
                                        onLoadingComplete={({ naturalWidth, naturalHeight }) => {
                                            setRatio(naturalWidth / naturalHeight);
                                        }}
                                        className="rounded-sm"
                                    />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
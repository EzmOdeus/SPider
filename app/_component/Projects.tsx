import Link from 'next/link'
import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <div
            className="flex flex-col items-center justify-center pb-20 z-50 "
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <Link href="https://spider-healthy.vercel.app/">
                    <ProjectCard
                        src="/Opera Snapshot_2024-08-27_234049_spider-healthy.vercel.app.png"
                        title="Doctors-Appointment"
                        description="Developed a fully functional doctors-appointment website using Next.js ,kinde For Auth,flowbite-react and Strapi .Implemented Doctor listings, Booking, functionality, and user authentication."
                    />
                </Link>
                <Link href="https://courses-spider.vercel.app/">
                    <ProjectCard
                        src="/courses-spider.vercel.app.png"
                        title="Courses webSite With Nextjs & Strapi"
                        description="Developed a fully functional website using Next.js ,Clerk For Auth, Strip , and Strapi .Implemented Courses listings, Booking, Payment, functionality, and user authentication."
                    />
                </Link>
                <Link href="https://x-clone6.vercel.app/">
                    <ProjectCard

                        src="/Opera Snapshot_2024-08-27_234503_x-clone6.vercel.app.png"
                        title="X-Clone"
                        description="Developed a fully functional using Next.js ,next-auth For Auth,flowbite-react and Firebase.
Implemented user authentication,upload post , likes , comments"
                    /></Link>
                <Link href="https://anime-es.vercel.app/">
                    <ProjectCard

                        src="/Opera Snapshot_2024-08-27_234703_anime-es.vercel.app.png"
                        title="X-Clone"
                        description="Developed a fully functional using Next.js ,Clerk-auth For Auth,flowbite-react and Firebase.
Implemented user authentication,upload post , likes , comments"
                    /></Link>
            </div>
        </div>)
}

export default Projects